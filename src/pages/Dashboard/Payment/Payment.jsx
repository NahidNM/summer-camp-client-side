import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutForm from "./CheakoutForm";

import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    
    const singlecart = useLoaderData();
    console.log('single cart data', singlecart);
    
    const total = singlecart.price;
    const price = parseFloat(total.toFixed(2))
    
    
    return (
        <div className="w-full md:px-20 bg-slate-200">
          
         
             <SectionTitle title="Please Payment"></SectionTitle> 
            
            <Elements stripe={stripePromise}>
                <CheakoutForm price={price} singlecart={singlecart}></CheakoutForm>
            </Elements>
        </div>
      
    );
};

export default Payment;