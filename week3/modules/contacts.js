const mongodb = require("../../db/connect");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};  

const addContact = async (req, res) => {
  console.log(req.body)
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday

  }
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(contact)
  .then(results => {
      res.status(201).json(results)
    })
    .catch(err => {
      res.status(500).json({err: "Could not add"})
    })
}

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db()
  .collection("contacts")
  .deleteOne({_id: userId})
.then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.status(500).json({err: "Could not delete"})
  })
}

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db()
  .collection("contacts")
  .updateOne(
    {_id: userId},
    {$set:{
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email,
      "favoriteColor": req.body.favoriteColor,
      "birthday": req.body.birthday
      }
  
    })
.then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.status(500).json({err: "Could not update"})
  })
}


module.exports = { getAll, getSingle, addContact, deleteContact, updateContact };