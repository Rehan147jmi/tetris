
// validate if user paid
  export const validateUserOrder =  (req,res) => {

      const data = req.body.data;
      const userPaymentStatus = data.timeline;
      const ourPrice = data.pricing;
      let isSuccessful = false;
    
      userPaymentStatus.forEach(timline => {
             
// Validate is user transaction is initiated
        
        if(timline.status==="PENDING" || timline.status==="COMPLETED") {

            const userValueData = data.payments[0].value;
            const userCrypto = userValueData.crypto.currency;
            const userpaidAmount = userValueData.crypto.amount;

            Object.keys(ourPrice).forEach((key,index)=> {
                if(ourPrice[key].currency===userCrypto) {
                 const PRICE = (95*ourPrice[key].amount)/100;
                 console.log(PRICE);
                   if(userpaidAmount>=PRICE) {
                    console.log("Validation Successful,amount paid");
                    isSuccessful = true
                   }
                   else{
                    console.log("Validation error,amount unpaid");
                    isSuccessful = false
                   }
                }
                })
           
        }
        else if(timline.status==="EXPIRED"){
            console.log("Payment not successful")
        }

      });

       return res.status(200).json(isSuccessful);   
    }
