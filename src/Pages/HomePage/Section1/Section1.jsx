import './Section1.css'
export default function Section1(){
    return<>
    <div>
        <hr></hr>
        <div className='flex flex-col items-center flex-wrap gap-12 md:flex-row md:justify-between py-16'>
           <img className=' transition-transform duration-300 hover:translate-y-[-5px] 'src='./Images/Behance.svg' alt='Behance-icon'/>
           <img className='transition-transform duration-300 hover:translate-y-[-5px]' src='./Images/Google.svg' alt='google-icon'/>
           <img className='transition-transform duration-300 hover:translate-y-[-5px]' src='./Images/Apple.svg'alt='apple-icon'/>
           <img className='transition-transform duration-300 hover:translate-y-[-5px]' src='./Images/Dribbble.svg'alt='dribbble-icon'/>
           <img className='transition-transform duration-300 hover:translate-y-[-5px] ' src='./Images/Awwwards.svg'alt='Awwwards-icon'/>
        </div>
        <hr></hr>
    </div>
    
    </>
}