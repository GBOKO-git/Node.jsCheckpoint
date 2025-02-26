const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gboko.amara@uvci.edu.ci",
    pass: "AMAG25129501",
  },
});
const mailOptions = {
  from: "gboko.amara@uvci.edu.ci",
  to: "younousskouakou@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello World!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
