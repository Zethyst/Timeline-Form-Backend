import express, { Router } from "express";
import path from "path";
import nodemailer from "nodemailer";
import fast2sms from "fast-two-sms";
import generateOTP from "../Utils/mail";
import OTPEmailTemplate from "../Utils/otpEmail";

const router: Router = express.Router();

router.post("/sendmail", async (req, res) => {
  try {
    
    let otp: string = generateOTP();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "21052646@kiit.ac.in",
        pass: "unvhjmcnpiuafimo", //got the password from google account itself inside App Passwords
      },
    });

    const result = await transporter.sendMail({
      from: '"✨ Akshat Jaiswal ✨" <21052646@kiit.ac.in>', // sender address
      to: req.body.email, // list of receivers
      subject: "OTP Verification for Your Email Account", // Subject line
      text: "This email is sent using nodemailer", // plain text body
      html: OTPEmailTemplate(otp),
      attachments: [
        {
          filename: "image-1.png",
          path: path.join(__dirname, "../Utils/images/image-1.png"),
          cid: "uniq-image-1.png",
        },
        {
          filename: "image-2.png",
          path: path.join(__dirname, "../Utils/images/image-2.png"),
          cid: "uniq-image-2.png",
        },
        {
          filename: "image-3.png",
          path: path.join(__dirname, "../Utils/images/image-3.png"),
          cid: "uniq-image-3.png",
        },
        {
          filename: "image-4.png",
          path: path.join(__dirname, "../Utils/images/image-4.png"),
          cid: "uniq-image-4.png",
        },
        {
          filename: "image-5.png",
          path: path.join(__dirname, "../Utils/images/image-5.png"),
          cid: "uniq-image-5.png",
        },
        {
          filename: "image-6.png",
          path: path.join(__dirname, "../Utils/images/image-6.png"),
          cid: "uniq-image-6.png",
        },
        {
          filename: "image-7.png",
          path: path.join(__dirname, "../Utils/images/image-7.png"),
          cid: "uniq-image-7.png",
        },
        {
          filename: "image-8.png",
          path: path.join(__dirname, "../Utils/images/image-8.png"),
          cid: "uniq-image-8.png",
        },
      ],
    });
    res.send("OTP sent successfully!");
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

router.post('/sendsms',async (req,res)=>{
    let otp: string = generateOTP();
    console.log(req.body.number);
    
    var options = {authorization : "vjrGTVkDyezgnSQOo2WFA4IKph6clPCbUadiwuRMs5JEtf719B5p37hXiE2tebGvqmAgZJcSzd0Wk6BK",
    message : `Your OTP Code is ${otp}`,
    numbers : [`${req.body.number}`]} 

    try {  
        const data = await fast2sms.sendMessage(options);
        console.log(data);
        res.send(data)
        
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
})

export default router;
