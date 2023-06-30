//Controller Function + Table
// 1. Function to check is a user is whitelisted on not ?
// - Table - "Wallets"
Address || WhitelistStatus
Addres1 || Whitelist
Addres3 || Free

/mint/validate_user_status
// - We will manually upload wallets to this table.
// WhitelistStatus - Whitelist or Free - based on this variale - validations will be done
// Read table

//Controller Function + Table
// 2. Check the status of mint -
Table - MintStatus: Whitelist/ Public/ Not Started
// Function that can return the MintStatus
/mint/return_mint_status

// Controller Funtion
// 3. Return coinbase URL based on "Wallets-WhitelistStatus"
If WhitelistStatus = Whitelist return (https://commerce.coinbase.com/checkout/54f8112b-58cd-4481-88ed-fb4264269e6a)
If WhitelistStatus = Public return (https://commerce.coinbase.com/checkout/xxxxxx)
/mint/return_coinbase_url

/mint/validate_order_status (change existing)
=======================
// Mint Page Logics
----Logic 1-----
Screen 1:
1. If MintStatus = Whitelist
Check
If Wallets-WhitelistStatus is NOT EQUAL to Whitelist or Free; show text error - This wallet is not whitelisted
2. If MintStatus = Public
User will enter wallet and proceed to next step
3. If Not Stadted
show text error - Mint not started

----Logic 2-----
If Wallets-WhitelistStatus = Free then redirect to Screen 3 directly


----Logic 3, screen 2-----

1. Redirect to the correct URL based on Wallets-WhitelistStatus
If Whitelist = URL1
If Public = URL2

----------------------------------------------

URL - Create a JSON with Different URLs and a function that can be called to return any URL from the JSON
- Implement this in tetris_game.html screen 1
Twitter_URL = ""
Tweet_URL =
Game_inscription_URL =
Mint_inscription_URL =
WLChecker_inscription_URL = ""


URLPicker (Tweet_URL)
{return - }

STeps for Inscription
- Inscribe this Tetris_WLchecker.html file on returnMintStatut
- Get the inscription no (URL)
- Comeback to backend and update this URL

2 - WL Checker - code
- Twitter text we are generating - this shouyld have " kjskdjlsjdljdskljdljsdljdls + BTC wallet + WLChecker_inscription_URL "
  
==========================

Whilisting = Marketing gimmick - collection of wallets
