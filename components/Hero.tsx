'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import  MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const words = "Transforming Ideas into Seamless & Interactive User Realities"

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'  fill='white' />
            <Spotlight className='-top-10 -left-4 h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className="absolute flex h-screen w-full items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black[0.2] top-0 left-0">
      
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
    </div>
    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
            <h2 className='uppercase tracking-wideset text-xs text-center text-blue-100 max-w-80'>
                Dynamic Web Magic with <span>Next Js</span>
            </h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={words}
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Hi I'm Mohsin
            </p>
           <a href='#about'>
                <MagicButton 
                tittle='Show My Work'
                position="right" 
                handleClick={()=>{}}
                icon={<FaLocationArrow />}
                otherClasses=''
                />
           </a>
        </div>
    </div>
    </div>
  )
} 

export default Hero