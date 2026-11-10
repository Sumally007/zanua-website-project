import Button from "./Button"

import heroImage from '@/assets/images/hero-images.png'

const Hero = () => {
    return (
        <section id="about" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] mx-[2rem] md:mx-[2.5rem] xl:mx-[75px]">
            <h1 className="text-[36px] sm:text-[50px] md:text-[68px] lg:text-[78px] xl:text-[88px] text-center text-brand-dark leading-[50px] sm:leading-[70px] md:leading-[95px] mt-[80px]">Know your stock <br /> down to the <span className="text-brand-blue">last unit</span> </h1>
            <p className="text-brand-gray text-[1rem] md:text-[18px] lg:text-(length:--font-size-paragraph) text-center leading-[150%] mt-[47px] max-w-[1108px]">Zanua gives you real-time inventory control across every branch. Stop guessing and start knowing what you have, what you sold, and what you need.</p>
            <Button className="w-[221px] h-[63px] mt-[58px]">Request demo</Button>
            <img className="mt-[60px]" src={heroImage} alt="Hero Image" />
        </section>
    )
}

export default Hero;