import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    const [loader , setLoader ] = useState(false)
    const [componentreload , setComponentreload] = useState(0)
   const [basket, setBasket] = useState([])
       // hum ny basket name ki state li ha jis ko ak by defult khali array pas krwai ha 
  
      // const [componentreload, setComponentreload] = useState(0)
      // const [productcount , setProductcount] = useState(0)
  const ali = 8
      const Addproduct = (data) => {

          console.log(basket,'ya initial (suro vali ) basket ha ya  ')
          setLoader(true)
          basket.push(data) // yha pr hum state ki khali array ko data pass kr rhy ha (data wo ho ga jo hum add to  cart py click kr k jo object ka data lia ha )
           console.log(basket,'push vali basket ha ya ')
          //hum ny ab data ko save krwana ha aisis jhga jha sy data ly shky 
           setBasket(basket) //state k andr save ho jaye set es liaye kiya data dlte na ho
           console.log(basket,'setstate vali basket ha ya ')
          // setComponentreload(Math.random())

          setComponentreload(Math.random())
      }

  return(
    <>
    <div key={componentreload}>
   <Navbar basket={basket} />
   </div>
<Component  {...pageProps}
   basket={basket} Addproduct={Addproduct} setBasket={setBasket} ali={ali} loader={loader} setLoader={setLoader} />;


</> ) 
}
