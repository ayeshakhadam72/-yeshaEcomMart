import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { CartDataProvider } from "../../context/cart";

export default function App({ Component, pageProps }) {


    return (
        <>
            <CartDataProvider >
                <Navbar />
                <Component  {...pageProps} />
            </CartDataProvider>
        </>)
}
