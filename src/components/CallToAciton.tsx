import Button from "./Button"

const CallToAciton = () => {
    return (
        <section>
            <div className="mb-[var(--space-bottom)] py-[100px] flex max-w-[var(--max-width)] flex-col items-center justify-center gap-[30px] text-center">
                <h2 className="text-(length:--font-size-heading2) leading-[120%] text-brand-dark">Run Your Business with a clear view</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%]">
                    start free for 30 days. Add your shops and stock, then <br /> invite your team when you’re ready
                </p>
                <div className="flex gap-[20px]">
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