"use client";
import React, { Component } from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export class TestimonialCads extends Component {
    render() {
        return (
            <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b
                 from-neutral-200 to-neutral-500 py-8"> Harmony : Voices of Success </h2>
                <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                    <div  className="w-full max-w-6xl">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const testimonials = [
    {
        quote:
          'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
        name: 'Alex Johnson',
        title: 'Guitar Student',
      },
      {
        quote:
          "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
        name: 'Samantha Lee',
        title: 'Piano Student',
      },
      {
        quote:
          "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
        name: 'Michael Chen',
        title: 'Vocal Student',
      },
      {
        quote:
          'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
        name: 'Emily Taylor',
        title: 'Violin Student',
      },
      {
        quote:
          'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
        name: 'Chris Morales',
        title: 'Music Production Student',
      },
];
export default TestimonialCads
