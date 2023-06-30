import cors from "cors"
import express,{ Router } from 'express';
import bodyParser from 'body-parser';
import path from "path"
import DBConnection from './Database/db.js';
import serverless from 'serverless-http';
import { addGameData } from './controller/GameData-controller.js';
import { saveMintData } from './controller/mintData-controller.js';
import { validateUserOrder } from './controller/validateUserOrder-controller.js';
import { returnMintStatus } from './controller/mintStatus-controller.js';
import { returnUserWalletStatus } from './controller/userWalletStatus-controller.js';
import { returnCoinbaseURL } from './controller/coinbaseURL-controller.js';
import { returnWLinscriptionURL } from './controller/inscriptionURL-controller.js';
import { returnLOOTWLinscriptionURL } from './controller/inscriptionURL-controller.js';
import { returnHTMLFile } from "./controller/htmlFile-controller.js";



const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
const __dirname = path.resolve();

// Calling the Data base connection function

DBConnection();

// serve the homepage

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname ,'index.html'))

});

app.get('/WL', (req, res) => {
  res.sendFile(path.join(__dirname ,'TetrisWLApplication.html'))
});
app.get('/mint', (req, res) => {
  res.sendFile(path.join(__dirname ,'Tetris_Mint.html'))
});
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname ,'Tetris_Game.html'))
}); 
 
// ============== TETRIS Routes ====================//
// save the score and level to DB
app.post("/game/add",addGameData);

//validate the mint order and mint price
app.post("/mint/validateUserOrder",validateUserOrder);

//validate mint status
app.get("/mint/mintstatus",returnMintStatus);

//return user wallet status
app.post("/mint/userwalletstatus",returnUserWalletStatus);

//return coinbase URL
app.post("/mint/paymenturl",returnCoinbaseURL);

//return wl checker inscription URL
app.get("/WL/WLCheckerinscriptionURL",returnWLinscriptionURL);

// return html file to client
app.get("/mint/htmlfile",returnHTMLFile);

// save user mint data to DB
app.post("/mint/savemintdata",saveMintData);





// ============== LOOT ORDINALS ROUTE will come here  ====================//
//return wl checker inscription URL
// app.get("/WL/LOOTWLCheckerinscriptionURL",returnLOOTWLinscriptionURL);


//start the express web server listening on 8080
 app.listen(8080, () => {
 console.log('listening on 8080');
   });
