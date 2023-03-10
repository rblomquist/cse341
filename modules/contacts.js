const mongodb = require("../db/connect");
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
  mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json(err);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
};

const getSingle = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use valid contact ID to find a contact")
  };
  const userId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId })
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json(err);
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
};

const addContact = async (req, res) => {
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
    if (result.acknowledged) {
      res.status(201).json(contact);
    } else {
      res.status(500).json(result.error || 'Some error occurred while creating the contact.');
    }
  };

const deleteContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use valid contact ID to delete a contact")
  };

  const userId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db()
  .collection("contacts")
  .deleteOne({ _id: userId })
.then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.status(500).json({err: "Could not delete"})
  })
}

const updateContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json("Must use valid contact ID to update a contact")
  };
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

module.exports = { getAll, getSingle, addContact, deleteContact, updateContact };