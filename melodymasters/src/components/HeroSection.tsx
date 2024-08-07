"user client";
import React, { Component } from 'react';
import Link from "next/link";

export default class HeroSection extends Component {
  render() {
    return (
      <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center item-center mx-auto overflow-hidden
      py-10 md:py-0 text-white'>
        
        <div className='p-4 relative z-10 w-full text-center' >
            
            <h1 className='mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'> Master the art of music </h1>
            
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'> Dive into our comprehensive music courses and transform your musical journey today. Whether you're a
                 beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                Explore Courses
                </Link>
            </div>
        </div>
      </div>
    )
  }
}
