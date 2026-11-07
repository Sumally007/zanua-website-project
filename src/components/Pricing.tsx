import PricingCard, { pricingData } from './PricingCard';

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="mb-[var(--space-bottom)] bg-lightBlue xl:px-[106px] px-[2rem] py-[100px]"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between  w-full mb-[97px]">
                <h2 className="text-[1.875rem] pr-[8%] lg:text-[52px] md:text-[2.25rem] mb-[30px] lg:mb-0 text-brand-dark xl:leading-[120%] max-w-heading">Simple pricing</h2>
                <p className="text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) max-w-paragraph leading-[150%]">
                    Choose a plan that fits your business size and scale
                </p>
            </div>

            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
                {pricingData.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;