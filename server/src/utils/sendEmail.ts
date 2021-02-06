import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  //let testAccount = await nodemailer.createTestAccount();
  //console.log("testAccount: ", testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "vwdvn72dsg5wwkdb@ethereal.email",
      pass: "UsZHreQuMPzj5cxut1",
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
