
 export function returnConstant(key) {
    const constants = {
        Whitelist_Pay_URL : "https://commerce.coinbase.com/checkout/54f8112b-58cd-4481-88ed-fb4264269e6a",
        Public_Pay_URL : "https://commerce.coinbase.com/checkout/54f8112b-58cd-4481-88ed-fb4264269e6a",
        Twitter_URL : "https://twitter.com/Ordinal_Tetris",
        Tweet_URL : "",
        Game_inscription_URL : "",
        Mint_inscription_URL : "",
        WLChecker_inscription_URL : "https://www.ord.io/yoyo",
        LOOTWLChecker_inscription_URL : "https://www.ord.io/Loot"
        
    };
    if (constants.hasOwnProperty(key)) {
      return constants[key];
    }
    else{
        return null;
    }

}
  
   
  
