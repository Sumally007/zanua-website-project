import stepImage from '@/assets/images/step-image.png';
import StepCard, { steps } from './StepCard';

const Steps = () => {
    const leftSteps = steps.slice(0, 2);
    const rightSteps = steps.slice(2);

    return (
        <section id="how it works" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] px-[106px] 
        bg-[var(--color-lightBlue)] rounded-tl-containerCard rounded-br-containerCard">
            <div className="flex items-center justify-between w-full mt-[120px] mb-[97px]">
                <h2 className="text-[52px] text-brand-dark leading-[120%]">Steps to Control Your <br></br> Stock Effortless</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%] self-start">Running Zanua ERP is a seamless, guided experience <br></br> designed to streamline your business operations and <br></br> maximize profitability.</p>
            </div>

            <div className="flex justify-between items-center gap-[40px] w-full mb-[120px]">
                <div className="flex flex-col justify-between items-center gap-6">
                    {leftSteps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>

                <div className="overflow-hidden rounded-[40px]">
                    <img src={stepImage} alt="step-image" className='h-[724.25px] w-[438.57px]' />
                </div>

                <div className="flex flex-col justify-between items-center gap-6">
                    {rightSteps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Steps