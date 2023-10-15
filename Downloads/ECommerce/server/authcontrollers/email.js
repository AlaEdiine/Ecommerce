const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")
const cookieParser = require("cookie-parser")// cookies
const { createError } = require("../Service/Error");
const { SendEmail } = require("../Email/nodemailer");
require("dotenv").config();


//TODO: GET ALL USER
module.exports.Email = async (req, res , next) => {
   const {data} = req.body
   console.log(data);
  try{
    const succes = () =>
    toast.success("Message Sent Successfully !", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ja145xt",
        "template_6386h8g",
        form.current,
        "YNejKVNsZC2Tiq2yp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    succes(); // Display toast on successful email send
  };
}
  catch (err){
    return  next(err)
  }
}


