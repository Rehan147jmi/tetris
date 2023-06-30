import { GameData } from "../model/game.js";

export const addGameData = async (req, res) => {
  console.log(req.body);

  try {
    const newGameData = new GameData(req.body);
    await newGameData.save();
    return res.status(200).json("Data saved successfuly");
  } catch (error) {
    return res.status(500).json(error.messsage);
  }
};
