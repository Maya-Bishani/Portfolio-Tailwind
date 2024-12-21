const cardClients = [
    {
        title: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
        
        imgSrc: "./Images/profile1.svg",
        img2Src: "./Images/Ratestars.svg",
        text :'Gemma Nolen, Google'
      },
      {
       
        title: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
        imgSrc: "./Images/profile2.svg",
        img2Src: "./Images/Ratestars.svg",
        text :'Gemma Nolen, Google'
      },
      {
        title:  'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
        imgSrc: "./Images/profile3.svg",
        img2Src: "./Images/Ratestars.svg",
        text :'Gemma Nolen, Google'
      }
];
export default function Clients(){
    return<>
    <div className="my-20">
        <p className="text-center font-semibold text-4xl mb-14 heading">Clients</p>
        <div className="flex flex-col items-center flex-wrap  md:flex-row md:justify-between    ">

        {cardClients.map((cardClients, index) => (
                <div className="flex flex-col bg-[#FFFCF5] border border-[#FFD285] p-7 w-80 mb-8 hover:scale-110 transition" key={index}>
                    <p className="  font-semibold text-xl mb-20 ">{cardClients.title}</p>
                    <div className="flex">
                        <div>
                        <img className="w-14" src={cardClients.imgSrc} alt="profile" />
                        </div>
                        <div className="flex flex-col ml-5 ">
                            <img className="mb-3" src={cardClients.img2Src} alt="stars"/>
                    <p className=" font-normal text-xl">{cardClients.text}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
}