import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

// TODO: enter the pk(publishable key)
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-4/5 my-5">
            <Helmet>
                <title>Happy Grill | Payment</title>
            </Helmet>
            <SectionTitle subHeading={"Please Process"} heading={"Payment"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;