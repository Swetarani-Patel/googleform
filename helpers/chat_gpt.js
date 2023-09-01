import axios from "axios";

async function generateSOP(formData) {
  const apiKey = process.env.OPEN_AI_API_KEY; // Replace with your actual API key

  const response = await axios.post(
    "https://api.openai.com/v1/engines/text-davinci-002/completions",
    {
      prompt: `Generate a Statement of Purpose for ${formData.fullName}. ${formData}`, // Customize the prompt as needed
      max_tokens: 150, // Adjust the maximum length of the generated SOP
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].text;
}

export { generateSOP };
