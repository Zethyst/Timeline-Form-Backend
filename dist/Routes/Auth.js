"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const fast_two_sms_1 = __importDefault(require("fast-two-sms"));
const mail_1 = __importDefault(require("../Utils/mail"));
const otpEmail_1 = __importDefault(require("../Utils/otpEmail"));
const router = express_1.default.Router();
router.post("/sendmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let otp = (0, mail_1.default)();
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: "21052646@kiit.ac.in",
                pass: "unvhjmcnpiuafimo", //got the password from google account itself inside App Passwords
            },
        });
        const result = yield transporter.sendMail({
            from: '"✨ Akshat Jaiswal ✨" <21052646@kiit.ac.in>', // sender address
            to: req.body.email, // list of receivers
            subject: "OTP Verification for Your Email Account", // Subject line
            text: "This email is sent using nodemailer", // plain text body
            html: (0, otpEmail_1.default)(otp),
            attachments: [
                {
                    filename: "image-1.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-1.png"),
                    cid: "uniq-image-1.png",
                },
                {
                    filename: "image-2.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-2.png"),
                    cid: "uniq-image-2.png",
                },
                {
                    filename: "image-3.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-3.png"),
                    cid: "uniq-image-3.png",
                },
                {
                    filename: "image-4.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-4.png"),
                    cid: "uniq-image-4.png",
                },
                {
                    filename: "image-5.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-5.png"),
                    cid: "uniq-image-5.png",
                },
                {
                    filename: "image-6.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-6.png"),
                    cid: "uniq-image-6.png",
                },
                {
                    filename: "image-7.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-7.png"),
                    cid: "uniq-image-7.png",
                },
                {
                    filename: "image-8.png",
                    path: path_1.default.join(__dirname, "../Utils/images/image-8.png"),
                    cid: "uniq-image-8.png",
                },
            ],
        });
        res.send("OTP sent successfully!");
    }
    catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
}));
router.post('/sendsms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let otp = (0, mail_1.default)();
    var options = { authorization: "vjrGTVkDyezgnSQOo2WFA4IKph6clPCbUadiwuRMs5JEtf719B5p37hXiE2tebGvqmAgZJcSzd0Wk6BK",
        message: `Your OTP Code is ${otp}`,
        numbers: [`${req.body.number}`] };
    try {
        const data = yield fast_two_sms_1.default.sendMessage(options);
        console.log(data);
        res.send(data);
    }
    catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
}));
module.exports= router;
