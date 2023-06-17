const express = require("express");
const router = express.Router();


//const {getContact} = require("../controller/contactController");
const { getbyid, getContact, createContact, deleteContact, updateContact} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getbyid).put(updateContact).delete(deleteContact);


module.exports = router;