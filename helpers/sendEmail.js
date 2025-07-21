const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * 
 * @param {Object} data - Obiekt z polami: to, subject, html
 */
const sendEmail = async (data) => {
  const email = { ...data, from: process.env.EMAIL_FROM };

  try {
    await sgMail.send(email);
    console.log("✅ Email sent to:", data.to);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
  }
};

module.exports = sendEmail;
