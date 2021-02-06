import nodemailer from "nodemailer";
import accessEnv from "./accesEnv";

export async function sendEmail(to: string, html: string) {
  //let testAccount = await nodemailer.createTestAccount();
  //console.log("testAccount: ", testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: accessEnv("MAILER_USER"),
      pass: accessEnv("MAILER_PASS"),
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo" <foo@example.com>',
    to: to,
    subject: "Change password",
    html,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
