const { ObjectId } = require('mongodb');
const mongoConnection = require('../connections/mongoServer');

const getAllByUser = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return mongoConnection().then(
    (collection) => collection.aggregate([
      { $match: { _id: ObjectId(id) } },
      {
        $project: {
          _id: 0,
          tasks: 1,
        },
      },
    ]).toArray(),
  ).then((result) => result[0]);
};

const getAll = async () => {
  let tasks = [];
  await mongoConnection().then(
    (collection) => collection.aggregate([{
      $project: {
        _id: 0,
      },
    }]).toArray(),
  ).then((results) => results.forEach((result) => {
    result.tasks.forEach((task) => {
      tasks = [...tasks, { ...task, userName: result.userName, userEmail: result.userEmail }];
    });
  }));
  return tasks;
};

const update = async ({ id, tasks }) => {
  if (!ObjectId.isValid(id)) return null;
  await mongoConnection().then(
    (collection) => collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { tasks } },
    ),
  );
  return getAllByUser(id);
};

module.exports = {
  getAll,
  getAllByUser,
  update,
};
