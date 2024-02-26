// rafce  code template of nextjs
import React from 'react'

const Home  = () => {

  const siteTitle='vaibhav';
  const num1=10;
  const num2=30;



  const addnums =(a,b)=> {
      return a+b ;
  }
  return (
    <div>
    {siteTitle}
    <h2 className='my-btn'>{num1+num2}</h2>

    
    <p> {addnums(987,987)}</p>
       <h1  style={{color :'red', fontSize:'3rem'}}> heloo world!</h1>
       <img src= "https://images.squarespace-cdn.com/content/v1/51a8f870e4b02509ec24213a/1575352696924-HEUAOA7R8DN15EMFFS2V/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/CBDD97EF-651F-4148-A917-2F53223BB01F.jpeg" />
       <p> lorem34</p>
    </div>
  )
}

export default Home ;
