
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Button from './Button';
import TestimanialCard, { testimonialData } from './TestimanialCard';
import { useState } from 'react';


const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const total = testimonialData.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    return (
        <section id="testimonials" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] xl:px-[106px] px-[2rem]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between  w-full mb-[97px]">
                <h2 className="text-[1.875rem] pr-[8%] lg:text-[52px] md:text-[2.25rem] mb-[30px] lg:mb-0 text-brand-dark xl:leading-[120%] max-w-heading">Customer testimonials</h2>
                <p className="text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) max-w-paragraph leading-[150%]">Real stories from people who run their business on Zanua</p>
            </div>
            {/* <div className="flex items-center justify-center gap-[80px] w-full">
                {
                    testimonialData.map((testimonialData, index) => (
                        <TestimanialCard key={index} {...testimonialData} />
                    ))
                }
            </div> */}

            <div className="flex items-center justify-center gap-[80px] w-full">
                <TestimanialCard key={index} {...testimonialData[index]} />
            </div>

            <div className="mt-16 flex w-full items-center gap-4">
                <Button
                    variant="outline"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="flex h-[50px] w-[52px] items-center justify-center"
                >
                    <LuChevronLeft className="h-[16px] w-[16px]" />
                </Button>
                <Button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-[50px] w-[52px] items-center justify-center"
                >
                    <LuChevronRight className="h-[16px] w-[16px]" />
                </Button>
            </div>
        </section>
    )
}

export default Testimonial