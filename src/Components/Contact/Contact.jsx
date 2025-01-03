import './Contact.css'
import React from 'react';
import AOS from 'aos';
export default function Contact (){
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
    return<> 
    <hr></hr>
    <div id='Contact' className="flex  justify-between md:space-x-16 container-contact my-16">
      <div className="  flex flex-col  text-[#2D2D2D] pl-0" >
        <p className="font-semibold text-4xl heading" data-aos="zoom-in"
                 data-aos-duration="1000" data-aos-delay="500">Let’s work together</p>
        <p className="font-normal text-2xl mt-10 mb-14 " data-aos="fade-up"
     data-aos-duration="3000">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <div className='flex  pl-0 mb-8 ' data-aos="fade-up"
     data-aos-duration="3000" >
           <a href='#'> <img className='transition-transform duration-300 hover:translate-y-[-5px] ' src='./Images/Footer-img/Vector1.svg'  alt='icon'/></a>
           <a href='#'>   <img className='transition-transform duration-300 hover:translate-y-[-5px]'  src='./Images/Footer-img/facebook.svg 'alt='facebook-icon'/></a>
           <a href='#'>  <img className='transition-transform duration-300 hover:translate-y-[-5px]'  src='./Images/Footer-img/Vector2.svg' alt='icon'/></a>
           <a href='#'>  <img className='transition-transform duration-300 hover:translate-y-[-5px]'  src='./Images/Footer-img/Vector3.svg' alt='icon' /></a>
            <a href='#'>  <img className='transition-transform duration-300 hover:translate-y-[-5px]'  src='./Images/Footer-img/Vector4.svg' alt='icon'/></a>
            
        </div>
       
      </div>

     
      <div>
        <form data-aos="fade-up"
     data-aos-duration="3000" data-aos-delay="500">
          <div className="mb-4" >
            <input
              type="text"
             
              className="mt-1 block  bg-[#F3F3F3]  p-3 h-16"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
             
              className="mt-1 block  bg-[#F3F3F3]  p-3  h-16  "
              placeholder="Email"
            />
          </div>
          <div className="mb-4 ">
            <textarea placeholder='Type your message here  ' className='bg-[#F3F3F3] h-56 p-3'></textarea>
          </div>
          <button type="submit" className="  bg-[#2D2D2D] text-white  py-6 px-20  font-semibold text-2xl btn-form transition hover:bg-[#009379] " >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
}