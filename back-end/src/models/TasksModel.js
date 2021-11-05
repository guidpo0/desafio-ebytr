const { ObjectId } = require('mongodb');
const mongoConnection = require('../connections/mongoServer');

const create = async ({ tasks, userId }) => {
  if (!ObjectId.isValid(userId)) return null;
  const sim = await mongoConnection().updateOne(
    { _id: ObjectId(userId) },
    { $set: { tasks } },
  );
  console.log(sim);
  return 0;
};

const getAll = async () => mongoConnection().find({}).toArray();

const getAllByUser = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const sim = await mongoConnection().findOne({ _id: ObjectId(id) });
  console.log(sim);
  return 0;
};

const update = async ({ id, tasks }) => {
  if (!ObjectId.isValid(id)) return null;
  const sim = await mongoConnection().updateOne(
    { _id: ObjectId(id) },
    { $set: { tasks } },
  );
  console.log(sim);
  return 0;
};

module.exports = {
  create,
  getAll,
  getAllByUser,
  update,
};
