import Button from "./Button"

const CallToAciton = () => {
    return (
        <section>
            <div className="mb-[var(--space-bottom)] py-[100px] flex max-w-[var(--max-width)] flex-col items-center justify-center gap-[30px] text-center mx-[2.5rem] xl:mx-[75px]">
                <h2 className="text-[1.875rem] lg:text-(length:--font-size-heading2) md:text-[2.25rem] leading-[120%] text-brand-dark">Run Your Business with a clear view</h2>
                <p className="text-brand-gray text-[1rem] md:text-[18px] lg:text-(length:--font-size-paragraph) text-center leading-[150%] max-w-[564px]">
                    start free for 30 days. Add your shops and stock, then invite your team when you’re ready
                </p>
                <div className="flex flex-col sm:flex-row gap-[20px]">
                    <Button variant="primary" className="mr-[10px] w-[191px]">
                        Get Started
                    </Button>
                    <Button variant="light" className="border-[1px] border-brand-blue w-[191px]">
                        Request demo
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CallToAciton