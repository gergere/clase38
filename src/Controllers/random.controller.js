import { calcrdm } from "../Services/random.services.js"

export const getRandom = async (req, res) => {
  // const result = await execChild(req.query.cant || 100000);
  const result = calcrdm(req.query.cant || 100000);
  res.json(result);
}