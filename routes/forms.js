import express from "express";
import Form from "../models/Form.js";
import { sendEmail } from "../services/mail.js";
import { formattedFormKeyMap } from "../helpers/email.js";

export const formsRouter = express.Router();

formsRouter.post("/", async (req, res) => {
  const data = req.body;
  try {
    const response = await Form.create(data);
    const header = `Your Customized Statement of Purpose (SOP)`;
    const body = `
    Dear ${data.fullName},
    <br>
    Thank you for filling out the questionnaire for our Customized SOP Generator. We appreciate your interest in creating a Statement of Purpose tailored to your needs. 
    After reviewing your responses, we have generated a customized Statement of Purpose for you. You can find it attached to this email. Please feel free to use and modify it as per your requirements.
    If you require any further assistance, such as editing, reviewing, or drafting your SOP by our experts, please don't hesitate to get in touch with us. You can visit our website [here](https://effizient-immigration-inc.square.site/s/shop) to explore our services.`;
    const html = `
    <div>
     ${body}
     <br>
      ${Object.keys(data)
        .map((key) => `<p>${formattedFormKeyMap[key]}: ${data[key]}</p>`)
        .join("")}
      <br>
       Please let us know if you have any further questions or if you'd like to avail of our additional services.
     <br>
     <br>
      Best regards,
      <br>
      Sweta Patel
    </div>`;

    sendEmail(data.email, header, html);
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false });
  }
});
