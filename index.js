import express from "express";
import { Connection } from "./database/db.js";
import cors from "cors";
import { formsRouter } from "./routes/forms.js";
import axios from "axios";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get-ip', async (req, res) => {
  const response = await axios.get('https://api64.ipify.org?format=json');
    const externalIP = response.data.ip;
    res.send(`External IP address: ${externalIP}`);
});

app.use("/api/forms", formsRouter);

const PORT = 8000;
Connection();

app.listen(PORT, () => {
  console.log(`Server is successfully running on PORT ${PORT}`);
});
