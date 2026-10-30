
import TestimanialCard, { testimonialData } from './TestimanialCard';


const Testimonial = () => {
    return (
        <section id="testimonials" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] px-[106px]">
            <div>
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