const express = require("express");
const contactRouter = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
// //hello
// contactRouter.get("/", (req, res) => {
//   res.send("hello word this is a conatact page");
// });

//create a contact and save it
//methode: post
//req.body

contactRouter.post("/", async (req, res) => {
  let { text } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,

    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "feriferiel1988@gmail.com",
    subject: "test mail",
  });
});

// //get all contacts
// //methode:get
// contactRouter.get("/", async (req, res) => {
//   try {
//     let result = await Contact.find();
//     res.status(200).send({ result: result, msg: "all contacts:" });
//   } catch (error) {
//     res.status(500).send("cannot get the user");
//   }
// });
// //get one contact
// //methode:get
// //params
// contactRouter.get("/:id", async (req, res) => {
//   try {
//     let result = await Contact.findOne({ _id: req.params.id });
//     res.status(200).send({ persons: result, msg: "this is the user.." });
//   } catch (error) {
//     res.status(500).send("cannot get the user");
//   }
// });

// //update contact
// //methode:put
// //req.body
// //params

// // contactRouter.put("/:id", async (req, res) => {
// //   try {
// //     let result = await Contact.findOneAndUpdate({
// //       _id: req.params.id,
// //       $set: { ...req.body },
// //     });
// //     res.status(200).send({ result: result, msg: "user updated..." });
// //   } catch (error) {
// //     res.status(500).send("cannot update the user..");
// //   }
// // });

// //delete contact
// //methode:delete
// //params

// contactRouter.delete("/:id", async (req, res) => {
//   try {
//     let resut = await Contact.findOneAndRemove({ _id: req.params.id });
//     res.status(200).send({ msg: "contact removed..." });
//   } catch (error) {
//     res.status(500).send("cannot delete the contact..");
//   }
// });

module.exports = contactRouter;
