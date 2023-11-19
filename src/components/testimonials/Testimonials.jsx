"use client";
import React, { useRef, useState } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import StarRating from "../starRating/StarRating";

const Testimonials = () => {
    const testimonials = [
        {
            text: "Cillum sit tempor non culpa id proident aliqua sint.",
            author: "John Doe",
            rating: 4.0,
        },
        {
            text: "Nisi veniam qui aliquip sunt in nisi commodo fugiat do est ipsum commodo.",
            author: "Jane Smith",
            rating: 2.0,
        },
        {
            text: "Nulla aute cupidatat ut cupidatat deserunt non elit culpa proident officia ea sit.",
            author: "Bob Johnson",
            rating: 3.0,
        },
        {
            text: "Incididunt laborum adipisicing cupidatat occaecat aliquip pariatur sint amet nostrud.",
            author: "Bob Moe",
            rating: 4.5,
        },
        {
            text: "Nulla aute cupidatat ut cupidatat deserunt non elit culpa proident officia ea sit.",
            author: "Bob Johnson",
            rating: 3.0,
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const slides = slider.querySelectorAll(".testimonial-slide");
            if (index >= 0 && index < slides.length) {
                const slide = slides[index];
                slide.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const goToNextSlide = () => {
        const nextIndex = currentSlideIndex + 1;
        if (nextIndex < testimonials.length) {
            setCurrentSlideIndex(nextIndex);
            goToSlide(nextIndex);
        }
    };

    const goToPreviousSlide = () => {
        const previousIndex = currentSlideIndex - 1;
        if (previousIndex >= 0) {
            setCurrentSlideIndex(previousIndex);
            goToSlide(previousIndex);
        }
    };

    return (
        <div className='w-full md:w-3/4 flex flex-col items-center font-lato tracking-wide pt-10'>
            <div className='w-full flex items-center'>
                <BsChevronLeft
                    onClick={goToPreviousSlide}
                    className={`mb-2 text-5xl ${
                        currentSlideIndex === 0
                            ? "text-gray-500 pointer-events-none"
                            : "text-accent cursor-pointer"
                    }`}
                />
                <div
                    ref={sliderRef}
                    className='w-full flex flex-row overflow-x-scroll snap-x snap-mandatory mx-12'
                    style={{
                        paddingBottom: "15px",
                        clipPath: "inset(0 0 15px 0)",
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className='testimonial-slide w-full flex flex-col flex-shrink-0 justify-center items-center snap-start'
                        >
                            <BiSolidQuoteRight className='text-accent2 h-24 w-24' />

                            <p className='text-xl text-center  mb-8'>
                                {testimonial.text}
                            </p>

                            <StarRating rating={testimonial.rating} />
                            <p className='text-title uppercase tracking-widest text-xs mt-2 font-bold'>
                                {testimonial.author}
                            </p>
                        </div>
                    ))}
                </div>
                <BsChevronRight
                    onClick={goToNextSlide}
                    className={`mt-2 text-5xl ${
                        currentSlideIndex === testimonials.length - 1
                            ? "text-gray-500 pointer-events-none"
                            : "text-accent cursor-pointer"
                    }`}
                />
            </div>
        </div>
    );
};

export default Testimonials;
