import React from 'react'

const Map = () => {
  return (
    <>
      <div className='mt-10 text-center'>
        <div className=' overflow-hidden h-0  relative '>
          <iframe className=' border-0 h-full w-full absolute top-0 left-0 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7058097.347850063!2d63.69634038929546!3d30.255989360263893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1733911873187!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default Map
