const { ObjectId } = require('mongodb');
const mongoConnection = require('../connections/mongoServer');

const create = async ({ userEmail, userPassword, userName }) => {
  const { insertedId } = await mongoConnection().then((collection) => collection.insertOne(
    {
      userEmail, userPassword, userRole: 'user', userName,
    },
  ));
  return {
    userId: insertedId,
    userEmail,
    userRole: 'user',
    userName,
  };
};

const createAdmin = async ({ userEmail, userPassword, userName }) => {
  const { insertedId } = await mongoConnection().then((collection) => collection.insertOne(
    {
      userEmail, userPassword, userRole: 'admin', userName,
    },
  ));
  return {
    userId: insertedId,
    userEmail,
    userRole: 'admin',
    userName,
  };
};

const getByEmail = async (userEmail) => mongoConnection().then(
  (collection) => collection.aggregate([
    { $match: { userEmail } },
    {
      $project: {
        _id: 0,
        userId: '$_id',
        userEmail: 1,
        userRole: 1,
        userPassword: 1,
        userName: 1,
      },
    },
  ]).toArray(),
).then((result) => result[0]);

const getAll = () => mongoConnection().then(
  (collection) => collection.aggregate([{
    $project: {
      _id: 0,
      userId: '$_id',
      userEmail: 1,
      userRole: 1,
      userName: 1,
    },
  }]).toArray(),
);

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return mongoConnection().then(
    (collection) => collection.aggregate([
      { $match: { _id: ObjectId(id) } },
      {
        $project: {
          _id: 0,
          userId: '$_id',
          userEmail: 1,
          userRole: 1,
          userName: 1,
        },
      },
    ]).toArray(),
  ).then((result) => result[0]);
};

const update = async ({
  id, userEmail, userPassword, userName,
}) => {
  if (!ObjectId.isValid(id)) return null;
  await mongoConnection().then((collection) => collection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        userEmail, userPassword, userName,
      },
    },
  ));
  return getById(id);
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const user = await getById(id);
  await mongoConnection().then((collection) => collection.deleteOne({ _id: ObjectId(id) }));
  return user;
};

module.exports = {
  create,
  createAdmin,
  getByEmail,
  getAll,
  getById,
  update,
  remove,
};
