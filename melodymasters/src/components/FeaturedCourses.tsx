"use client";
import React, { Component } from 'react'
import courseData from '../data/music_courses.json';
import Link from 'next/link';

export class FeaturedCourses extends Component {
    render() {
        return (
            <div className='py-12 bg-gray-900 text-white'>
                <div>
                    <div className='text-center'>
                        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase    '> Featured Courses </h2>
                        <p className='mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl'> Learn With the best </p>
                    </div>
                </div>
                <div>


                </div>
                <div className='mt-20 text-center'>
                    <Link href={"/courses"}> View All Courses  </Link>
                </div>

            </div>
        )
    }
}

export default FeaturedCourses
