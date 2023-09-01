import nodemailer from "nodemailer";

// Function to send email
export async function sendEmail(to, subject, html) {
  return await new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info.response);
      }
    });
  });
}
