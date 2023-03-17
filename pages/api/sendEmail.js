import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'oalktan@gmail.com',
      pass: 'oa6842148635',
    },
  });

  // Construct the email message
  const messageBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const messageOptions = {
    from: 'your-gmail-address@gmail.com',
    to: 'recipient-email-address@example.com',
    subject: 'New message from your website',
    text: messageBody,
  };

  // Send the email
  try {
    await transporter.sendMail(messageOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
