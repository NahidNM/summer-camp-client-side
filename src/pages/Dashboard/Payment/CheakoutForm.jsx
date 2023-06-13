import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import './CheakoutForm.css'

const CheakoutForm = ({price, singlecart}) => {
console.log(singlecart);
    const stripe = useStripe();
    const elements = useElements()
    
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    
    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  // console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
  }, [price, axiosSecure])

    

    const handleSubmit = async (event) =>{
           event.preventDefault();

           if(!stripe || !elements){
            return
           }

           const card = elements.getElement(CardElement);
           if(card === null){
            return;
           }
           
           const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          
          if (error) {
            console.log('error', error);
            setCardError(error.message)
          } else {
            // console.log('PaymentMethod', paymentMethod);
            setCardError('')
          }
          
          setProcessing(true)

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
              clientSecret,
              {
                  payment_method: {
                      card: card,
                      billing_details: {
                          email: user?.email || 'unknown',
                          name: user?.displayName || 'anonymous'
                      },
                  },
              },
          );
  
          if (confirmError) {
              console.log(confirmError);
          }
  
          // console.log('payment intent', paymentIntent)
          setProcessing(false)
          if (paymentIntent.status === 'succeeded') {
              setTransactionId(paymentIntent.id);
              // console.log(paymentIntent);
              // save payment information to the server
              const userpayment = {
                  email: user?.email,
                  transactionId: paymentIntent.id,
                  price,
                  date: new Date(),
                  classId: singlecart._id,
                  userId: singlecart.classAddId,
                  status: 'pending',
                  name: singlecart.name,
                  image: singlecart.image,
                  instructor: singlecart.instructor,                     
              }
              
              
              fetch(` http://localhost:5000/classupdatedata/${singlecart.classAddId}`)
          .then(res => res.json())
          .then(data => {
            const newseat = data.available_seats-1;
            const newEnroll = data.enroll+1;
            
            const newUpdateClass ={newseat, newEnroll};
            
            fetch(` http://localhost:5000/classupdatedata/${singlecart.classAddId}`,{
              method: 'PUT',
              headers: {
                'content-type': 'application/json'
              },
            body: JSON.stringify(newUpdateClass)
            })
          })
             
             axiosSecure.post('/payment', userpayment)
                  .then(res => {
                      console.log('payment',res.data);
                      if (res.data.insertResult.insertedId) {
                        Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Payment successful',
                          showConfirmButton: false,
                          timer: 1500
                        })
                      }
                  })
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
        <button className="mt-4 btn btn-outline btn-primary btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="ml-8 text-red-600">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
  </>
    );
};

export default CheakoutForm;