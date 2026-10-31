export interface Step {
    number: string
    title: string
    description: string
}

export const steps: Step[] = [
    {
        number: '01',
        title: 'Registration & Account',
        description:
            'Create your business profile in minutes. Set up user roles, permissions, and security controls for your entire team seamlessly.',
    },
    {
        number: '02',
        title: 'Onboarding',
        description:
            'Import your existing stock, set up warehouses, and connect your sales channels with automated data migration support.',
    },
    {
        number: '03',
        title: 'Daily Operations',
        description:
            'Manage sales orders, automate purchase requests, and monitor stock levels across branches with real-time barcode scanning.',
    },
    {
        number: '04',
        title: 'Reports & Insights',
        description:
            'Generate instant financial summaries, track fast-moving items, and receive smart stockout predictions to scale faster.',
    },
]

const StepCard: React.FC<Step> = ({ number, title, description }) => {
    return (
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-[19px] max-w-[350.12px]">
            <h4 className="text-[24px] text-brand-blue mb-[36px]">{number}</h4>
            <h4 className="text-[24px] mb-[24px] text-brand-dark">{title}</h4>
            <p className="text-(length:--font-size-paragraph) text-brand-gray leading-[138%]">{description}</p>
        </div>
    )
}

export default StepCard;