import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheakoutForm = () => {

    const stripe = useStripe();
    const elements = useElements()
    
    
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const handleSubmit = async (event) =>{
           event.preventDefault();

           if(!stripe || !elements){
            return
           }

           const card = elements.getElement(CardElement);
           if(card === null){
            return;
           }
           const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('error', error);
            setCardError(error.message)
          } else {
            console.log('PaymentMethod', paymentMethod);
          }
        };
    

    return (
        
        <>
        <form onSubmit={handleSubmit} className="w-2/3 m-8">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="mt-4 btn btn-outline btn-primary btn-sm" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="ml-8 text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
  </>
    );
};

export default CheakoutForm;