
import TestimanialCard, { testimonialData } from './TestimanialCard';


const Testimonial = () => {
    return (
        <section id="testimonials" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] xl:px-[106px] px-[2.5rem]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between  w-full mb-[97px]">
                <h2 className="text-[1.875rem] pr-[10%] lg:text-[52px] md:text-[2.25rem] mb-[30px] lg:mb-0 text-brand-dark xl:leading-[120%] max-w-heading">Customer testimonials</h2>
                <p className="text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) max-w-paragraph leading-[150%]">Real stories from people who run their business on Zanua</p>
            </div>
            <div className="flex items-center justify-center gap-[80px] w-full">
                {
                    testimonialData.map((testimonialData, index) => (
                        <TestimanialCard key={index} {...testimonialData} />
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonial