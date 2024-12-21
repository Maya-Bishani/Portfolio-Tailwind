import './Hero.css'
export default function Hero(){
    return<>
    <div id='About' className="  flex flex-col text-center items-center md:flex-row md:text-start justify-between  pt-24 
     hero md:mb-24"> 
      <div className='  flex  flex-col   text-[#2D2D2D] pt-40'>
       <p className='font-semibold text-3xl heading '>Branding | Image making </p>
     <p className='font-semibold text-5xl py-10 leading-relaxed '>My awesome portfolio</p>
     <p className='font-normal text-2xl'>And I made it myself! Yes. In Figma with Anima</p>
     </div>
     <img className='w-80 pt-20 mb-10 ' src='./Images/hero.svg' alt='hero-img'/>
     
   
    </div>
    </>
}