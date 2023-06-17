const asyncHandler = require("express-async-handler");

//@desc get all contacts
//route GET/api/contacts
//access public

const getContact = asyncHandler(async(req,res) => {
    res.status(200).json({message : "get all the contacts"})
})

//@desc to create the contact
//route GET/api/contacts
//access public


const createContact = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;

    if(!email && !name && !body){
        res.status(400);
        throw new Error("All fields are mandatory !");

    }
    res.status(201).json({message : `contact created`})
})

//@desc  get the contact by id
//route GET/api/contacts/id
//access public

const getbyid = asyncHandler(async(req,res) => {
    res.status(201).json({message : `get all the contacts ${req.params.id}`});
})

//@desc  update the contact
//route GET/api/contacts/id
//access public

const updateContact = asyncHandler(async(req,res) => {
    res.status(201).json({message : `update the contacts ${req.params.id}`})
})


//@desc  delete the contact
//route GET/api/contacts/id
//access public

const deleteContact = async(req,res) => {
    res.status(201).json({message : `delete the contacts ${req.params.id}`})
}



module.exports = {getContact, createContact, updateContact, deleteContact, getbyid};