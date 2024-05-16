const generateOTP: () => string = () => {
    let otp: string = "";
    for (let i: number = 0; i <= 3; i++) {
      const randVal: number = Math.round(Math.random() * 9);
      otp = otp + randVal;
    }
    return otp;
  };
  
  // console.log(generateOTP());
  export default generateOTP;
  