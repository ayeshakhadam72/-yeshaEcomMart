import Form from '@/components/Form'
import Formheading from '@/components/formheading'
import Headerafterabout from '@/components/headerafterabout'
import Map from '@/components/map'
import Marketo from '@/components/marketo'
import Navbar from '@/components/navbar'
import React from 'react'

const Contact = () => {
  return (
   <>

   <Headerafterabout Aboutus= {'Contact us'} givespace = {'mt-5'} />
   <Formheading/>
   <Form />
   <Map/>
   <Marketo/>
   </>
  )
}

export default Contact
