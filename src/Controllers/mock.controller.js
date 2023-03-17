import { createNFakeProducts } from "../Services/mock.services.js"

export const traerFakeProducts = (req, res) => {
  res.json(createNFakeProducts(5))
}