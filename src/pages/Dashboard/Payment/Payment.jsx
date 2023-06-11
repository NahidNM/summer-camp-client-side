import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutForm from "./CheakoutForm";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    
    const [cart] = useCart()
    // console.log(cart.price);
    
    return (
        <div className="w-full md:px-20 bg-slate-200">
          
         
             <SectionTitle title="Please Payment"></SectionTitle> 
            
            <Elements stripe={stripePromise}>
                <CheakoutForm ></CheakoutForm>
            </Elements>
        </div>
      
    );
};

export default Payment;