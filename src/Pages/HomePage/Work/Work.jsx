const cardWork = [
    {
      imgSrc: "./Images/Image.svg",
      title: 'Free Bird',
      text: "Lynyrd Skynyrd"
    },
    {
      imgSrc: "./Images/Image2.svg",
      title: "Purple Haze",
      text: "Jimi Hendrix"
    },
    {
      imgSrc: "./Images/Image3.svg",
      title: "You Really Got Me",
      text: "The Kinks"
    } 
];
    const cardWork2=[

   
    {
      imgSrc: "./Images/Image4.svg",
      title: "American Girl",
      text: "Tom Petty"
    } ,
    {
      imgSrc: "./Images/Image5.svg",
      title: "Whole Lotta Love",
      text: "Led Zeppelin"
    } ,
    {
      imgSrc: "./Images/Image6.svg",
      title: "Under Pressure ",
      text: "Queen"
    }
  ];
export default function Work(){
    return<>
    <div id="Work" className="mb-16 pt-5">
        <p className="font-semibold text-4xl text-center mb-14 heading">My latest work</p>
        <div className="flex flex-col items-center gap-8  mb-14 md:justify-between md:gap-0 md:flex-row">
        {cardWork.map((cardWork, index) => (
                <div className="flex flex-col hover:scale-105 transition" key={index}>
                    <img className="w-72  mb-6" src={cardWork.imgSrc} alt="photo" />
                    <p className="  font-semibold text-2xl mb-3 ">{cardWork.title}</p>
                    <p className=" font-normal text-xl">{cardWork.text}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-col items-center  gap-8 mb-14 md:justify-between  md:flex-row md:gap-0">
        {cardWork2.map((cardWork2, index) => (
                <div className="flex flex-col hover:scale-105 transition " key={index}>
                    <img className="w-72  mb-6 " src={cardWork2.imgSrc} alt="photo" />
                    <p className="  font-semibold text-2xl mb-3">{cardWork2.title}</p>
                    <p className=" font-normal text-xl">{cardWork2.text}</p>
                </div>
            ))}
        </div>
    </div>
    
    </>
}