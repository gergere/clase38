import { processData } from "../Services/info.services.js";

export const getInfo = (req, res) => {
  res.json(processData);
}