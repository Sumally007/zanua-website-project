
import TestimanialCard, { testimonialData } from './TestimanialCard';


const Testimonial = () => {
    return (
        <section id="testimonials" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] px-[106px]">
            <div className="flex items-center justify-between gap-10 w-full mb-[74px]">
                <h2 className="text-[52px] text-brand-dark leading-[120%]">Customer testimonials</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%]">Real stories from people who run their business on Zanua</p>
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