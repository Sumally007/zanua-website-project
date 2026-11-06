import FeatureCard, { features } from './FeatureCard';


const Features = () => {
    return (
        <section id="features" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] xl:px-[106px] px-[2rem] md:px-[2.5rem]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between  w-full mb-[97px]">
                <h2 className="text-[1.875rem] pr-[10%] lg:text-[52px] md:text-[2.25rem] mb-[30px] lg:mb-0 text-brand-dark xl:leading-[120%] max-w-heading">Everything you need for your Business</h2>
                <p className="text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) max-w-paragraph leading-[150%] self-start">Powerful modules that work together to keep your stock accurate</p>
            </div>
            <div className="flex flex-col gap-[80px] w-full">
                {features.map((features, index) => (
                    <FeatureCard key={index} {...features} />
                ))}
            </div>
        </section>
    )
}

export default Features