import React, { useState } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from './Slide'
import Arrow from "./Arrows";
import { act } from "react-dom/test-utils";

const sliderData = [
  {
    id: 1,
    title: "Above The Surface",
    routeName: "AboveTheSurface",
    linkUrl: "/AboveTheSurface",
    imageUrl: "/images/collages/SuperDuperHam/AboveTheSurface.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 2,
    title: "From Globe To Globe",
    routeName: "FromGlobeToGlobe",
    linkUrl: "/FromGlobeToGlobe",
    imageUrl: "/images/collages/SuperDuperHam/FromGlobeToGlobe.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 3,
    title: "Not Gentle Enough",
    routeName: "NotGentleEnough",
    linkUrl: "/NotGentleEnough",
    imageUrl: "/images/collages/SuperDuperHam/NotGentleEnough.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 4,
    title: "At The Blue Automotive School",
    routeName: "AtTheBlueAutomotiveSchool",
    linkUrl: "/AtTheBlueAutomotiveSchool",
    imageUrl: "/images/collages/SuperDuperHam/AtTheBlueAutomotiveSchool.jpg ",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 5,
    title: "In The Blue Park",
    routeName: "InTheBluePark",
    linkUrl: "/InTheBluePark",
    imageUrl: "/images/collages/SuperDuperHam/InTheBluePark.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 6,
    title: "Strike A Pose",
    routeName: "StrikeAPose",
    linkUrl: "/StrikeAPose",
    imageUrl: "/images/collages/SuperDuperHam/StrikeAPose.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 7,
    title: "Big Pig Little Red Walrus Monster",
    routeName: "BigPigLittleRedWalrusMonster",
    linkUrl: "/BigPigLittleRedWalrusMonster",
    imageUrl: "/images/collages/SuperDuperHam/BigPigLittleRedWalrusMonster.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 8,
    title: "Leaving The City",
    routeName: "LeavingTheCity",
    linkUrl: "/LeavingTheCity",
    imageUrl: "/images/collages/SuperDuperHam/LeavingTheCity.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
  {
    id: 9,
    title: "With The Ion",
    routeName: "WithTheIon",
    linkUrl: "/WithTheIon",
    imageUrl: "/images/collages/SuperDuperHam/WithTheIon.jpg",
    price: 25,
    year: 2020,
    size: "",
    width: 400,
    height: 309,
  },
];

const SliderCSS = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 0;
  background-color: grey;
  overflow: hidden;
`;

const Slider = () => {

    const getWidth = () => window.innerWidth

    const [content, setContent] = useState({
        activeIndex:0,
        translate:0,
        transition:0.45
    });

    const {activeIndex,translate,transition} = content

    const nextSlide = () => {
        if(activeIndex === sliderData.length -1) {
            return setContent({
                ...content,
                translate:0,
                activeIndex:0,  
            })
        }

        setContent({
            ...content,
                translate:(activeIndex+1) * getWidth(),
                activeIndex:activeIndex+1,  
        })
    }

    const prevSlide = () => {
        if(activeIndex === 0) {
            return setContent({
                ...content,
                translate:(sliderData.length -1) * getWidth(),
                activeIndex:sliderData.length -1,  
            })
        }

        setContent({
            ...content,
                translate:(activeIndex-1) * getWidth(),
                activeIndex:activeIndex-1,  
        })
    }

  return (
    <SliderCSS>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * sliderData.length}
      >
       {sliderData.map((slide) => (
        <Slide key={slide.id} content={slide} />
       ))}
      </SliderContent>
      <Arrow direction='left' handleClick={prevSlide}/>
      <Arrow direction='right' handleClick={nextSlide}/>
    </SliderCSS>
  );
};

export default Slider;
