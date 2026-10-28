import FeatureCard, { features } from './FeatureCard';


const Features = () => {
    return (
        <section id="features" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] px-[106px]">
            <div className="flex items-center justify-between w-full mb-[97px]">
                <h2 className="text-[52px] text-brand-dark leading-[120%]">Everything you need <br></br> for your Business</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%] self-start">Powerful modules that work together to keep your <br></br> stock accurate</p>
            </div>
            <div className="flex flex-col gap-[80px] w-full">
                {features.map(({ id, ...feature }) => (
                    <FeatureCard key={id} {...feature} />
                ))}
                {/* <div className="card flex items-center justify-between py-[97px] px-[57px] bg-lightBlue rounded-tl-card-lg rounded-br-card-lg rounded-tr-card-sm rounded-bl-card-sm">
                    <div className="flex flex-col w-[490px]">
                        <h3 className='text-[42px] mb-[47px]'>Inventory management</h3>
                        <p className='text-brand-gray text-(length:--font-size-paragraph) mb-[40px] leading-[148%]'>Track your inventory in real time across <br></br> products, materials, and multiple locations. </p>
                        <p className='text-brand-gray text-(length:--font-size-paragraph) mb-[40px] leading-[148%]'>
                            Know exactly what’s in stock, what’s <br></br> committed, and what’s arriving — </p>
                        <p className='text-brand-gray text-(length:--font-size-paragraph) mb-[40px] leading-[148%]'>so you can make decisions with confidence <br></br> and avoid costly stockouts or overstock.</p>
                        <a
                            href={"#"}
                            className="inline-flex self-start group items-center gap-2 font-semibold text-[18px] text-black hover:underline pt-2"
                        >
                            Learn more <span>
                                <FaArrowRightLong className="w-[38.88px] h-[24px] transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                    </div>
                    <div>
                        <img src={featureImage} alt="feature image" />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Features