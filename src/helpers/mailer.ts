import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'


export const sendEmail = async({email, emailType, userId}: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    
    await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000}, {new: true, runValidators: true})
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3fd364695517df",
        pass: "7383d58fd399cf"
        // add these credentials to .env file
      }
    })

    const mailOptions = {
      from: 'manav@gmail.com',
      to: email,
      subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`

    }

    const mailresponse = await transport.sendMail(mailOptions)
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
}