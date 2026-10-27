import Button from "./Button"

import heroImage from '@/assets/images/hero-images.png'

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center mb-[var(--space-bottom)]">
            <h1 className="text-[88px] w-[987px] text-center text-brand-dark leading-[95px] mt-[80px]">Know your stock down to the <span className="text-brand-blue">last unit</span> </h1>
            <p className="text-brand-gray text-(length:--font-size-paragraph) text-center leading-[150%] w-[1108px] mt-[47px]">Zanua gives you real-time inventory control across every branch. Stop guessing and start knowing what you have, what you sold, and what you need.</p>
            <Button className="w-[221px] h-[63px] mt-[58px]">Request demo</Button>
            <img className="mt-[60px]" src={heroImage} alt="Hero Image" />
        </section>
    )
}

export default Hero;