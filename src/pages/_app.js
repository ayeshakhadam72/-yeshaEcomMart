import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    const [ProductLoad, setProductLoad] = useState(false)
    const [componentreload, setComponentreload] = useState(0)
    const [basket, setBasket] = useState([])


    const Addproduct = (data) => {

        console.log(basket, 'ya initial (suro vali ) basket ha ya  ')
        basket.push(data)
        console.log(basket, 'push vali basket ha ya ')
        setBasket(basket)
        console.log(basket, 'setstate vali basket ha ya ')
        setProductLoad(true)
        console.log(ProductLoad, 'Loader===========')

        setComponentreload(Math.random())
        if (ProductLoad) {
           
        }
        setTimeout(() => {
            setProductLoad(false)
        }, 2000);
    }

    return (
        <>
            <div key={componentreload}>
                <Navbar basket={basket} ProductLoad={ProductLoad}/>
            </div>
            <Component  {...pageProps}
                basket={basket} Addproduct={Addproduct} setBasket={setBasket} ProductLoad={ProductLoad} />
        </>)
}
