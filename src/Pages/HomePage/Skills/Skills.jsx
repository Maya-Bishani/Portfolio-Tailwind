import React from 'react';
import AOS from 'aos';
import './Skills.css'

const cardDataSkills = [
    {
      imgSrc: "./Images/Imageplaceholder1.svg",
      title: 'Product design',
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
    },
    {
      imgSrc: "./Images/Imageplaceholder2.svg",
      title: "Art direction",
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
    },
    {
      imgSrc: "./Images/Imageplaceholder3.svg",
      title: "Visual design",
      text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
    }
  ];
export default function Skills(){
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
    return<>
    <div className="pt-16">
    <h1 className="text-center font-semibold text-4xl mb-14 heading  " data-aos="zoom-in" >My skills</h1>
  
    <div className="flex flex-col  gap-8 mb-16 md:justify-between md:flex-row  ">
            {cardDataSkills.map((cardDataSkills, index) => (
                <div className="flex flex-col " data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"  key={index}>
                    <img className="w-32 mx-auto mb-14" src={cardDataSkills.imgSrc} alt="photo" />
                    <p className="text-center mb-5 font-semibold text-2xl ">{cardDataSkills.title}</p>
                    <p className="text-center font-normal text-2xl">{cardDataSkills.text}</p>
                </div>
            ))}
        </div>

    </div>
    </>
}