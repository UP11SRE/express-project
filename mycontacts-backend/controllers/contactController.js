const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactsModel");


//@desc get all contacts
//route GET/api/contacts
//access public

const getContact = asyncHandler(async(req,res) => {
    const contacts = await Contact.find({user_id : req.user.id})
    res.status(200).json(contacts)
});

//@desc to create the contact
//route GET/api/contacts
//access public


const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });
  
    res.status(201).json(contact);
  });

//@desc  get the contact by id
//route GET/api/contacts/id
//access public

const getbyid = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(201).json(contact);
})

//@desc  update the contact
//route GET/api/contacts/id
//access public

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
  
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
  
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedContact);
  });

//@desc  delete the contact
//route GET/api/contacts/id
//access public

const deleteContact = async(req,res) => {

    const contact = await Contact.findById(
        req.params.id
    );

    if(!contact){
        throw new Error("contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user is not authorized to delete contacts");
    }

    await Contact.deleteOne({_id : req.params.id});

    res.status(201).json(contact);
}



module.exports = {getContact, createContact, updateContact, deleteContact, getbyid};