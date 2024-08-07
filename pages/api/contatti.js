import { Email2 } from "@/components/sections/Section5/email2";
import { Thanks } from "@/components/sections/Section5/thanks";
import nodemailer from "nodemailer";

export default async function mailer(req, res) {
  const { name, surname, email, phone, message, reason, nation } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: {
      user: "info@lescretes.it",
      pass: "MvSX1q4Bxn89!",
    },
  });

  const emailHtml = render(
    <Email2
      name={name}
      surname={surname}
      email={email}
      phone={phone}
      message={message}
      reason={reason}
      nation={nation}
    />
  );

  const thankHtml = render(
    <Thanks
      name={name}
      surname={surname}
      email={email}
      phone={phone}
      message={message}
    />
  );

  try {
    await transporter.sendMail({
      from: `Les Crêtes degustazioni `,
      to: ["thalliondev@gmail.com", "info@thallion-dev.it"],
      subject: `Info: ${reason}`,
      replyTo: `${email}`,
      html: emailHtml,
    });

    // Invio della mail di ringraziamento
    await transporter.sendMail({
      from: `Les Crêtes info `,
      to: email,
      subject: "Grazie per averci contattato",
      html: thankHtml,
    });

    return res.status(200).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
