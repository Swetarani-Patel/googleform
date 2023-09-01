import express from "express";
import { Connection } from "./database/db.js";
import cors from "cors";
import { formsRouter } from "./routes/forms.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/forms", formsRouter);

const PORT = 8000;
Connection();
app.listen(PORT, () => {
  console.log(`Server is successfully running on PORT ${PORT}`);
});
