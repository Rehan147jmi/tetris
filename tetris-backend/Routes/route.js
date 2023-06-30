// // YOUR_BASE_DIRECTORY/netlify/functions/api.js

// import express, { Router } from 'express';
// import serverless from 'serverless-http';
// import path from "path"
// import { addGameData } from '../controller/GameData-controller.js';
// import { saveMintData } from '../controller/mintData-controller.js';
// import { validateUserOrder } from '../controller/validateUserOrder-controller.js';
// import { returnMintStatus } from '../controller/mintStatus-controller.js';
// import { returnUserWalletStatus } from '../controller/userWalletStatus-controller.js';
// import { returnCoinbaseURL } from '../controller/coinbaseURL-controller.js';
// import { returnWLinscriptionURL } from '../controller/inscriptionURL-controller.js';
// import { returnLOOTWLinscriptionURL } from '../controller/inscriptionURL-controller.js';
// import { returnHTMLFile } from "../controller/htmlFile-controller.js";


// const api = express();
// const route = Router();
// const __dirname = path.resolve();



// // serve the homepage

// route.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname ,'index.html'))
//   });
  
//   route.get('/WL', (req, res) => {
//     res.sendFile(path.join(__dirname ,'TetrisWLApplication.html'))
//   });
//   route.get('/mint', (req, res) => {
//     res.sendFile(path.join(__dirname ,'Tetris_Mint.html'))
//   });
//   route.get('/game', (req, res) => {
//     res.sendFile(path.join(__dirname ,'Tetris_Game.html'))
//   }); 
   
//   // ============== TETRIS Routes ====================//
//   // save the score and level to DB
//   route.post("/game/add",addGameData);
  
//   //validate the mint order and mint price
//   route.post("/mint/validateUserOrder",validateUserOrder);
  
//   //validate mint status
//   route.get("/mint/mintstatus",returnMintStatus);
  
//   //return user wallet status
//   route.post("/mint/userwalletstatus",returnUserWalletStatus);
  
//   //return coinbase URL
//   route.post("/mint/paymenturl",returnCoinbaseURL);
  
//   //return wl checker inscription URL
//   route.get("/WL/WLCheckerinscriptionURL",returnWLinscriptionURL);
  
//   // return html file to client
//   route.get("/mint/htmlfile",returnHTMLFile);
  
//   // save user mint data to DB
//   route.post("/mint/savemintdata",saveMintData);

//   api.use('/',route)
  

// export const handler = serverless(api);

// export default route;