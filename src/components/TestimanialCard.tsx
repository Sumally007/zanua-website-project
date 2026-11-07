import React from 'react';
import profilePicture from '@/assets/images/userProfilePicture.png';
import logoImage from '@/assets/images/userLogoImage.png';
import displayImage from '@/assets/images/displayImage.png'


interface TestimonialCardProps {
    logoSrc: string;
    comments: string;
    userName: string;
    userRole: string;
    profilePicture: string;
    displayImage: string;
}

// data of the card
export const testimonialData: TestimonialCardProps[] = [
    {
        logoSrc: logoImage,
        comments: '"We cut our stockouts by half in the first quarter. The alerts alone paid for the platform."',
        userName: "Sarah Jenkins",
        userRole: "Owner, Jenkins Hardware",
        profilePicture: profilePicture,
        displayImage: displayImage,
    },
];


// card component
const TestimanialCard: React.FC<TestimonialCardProps> = ({ logoSrc, comments, userName, userRole, profilePicture, displayImage }) => {
    return (
        <div className={`card flex flex-col items-stretch justify-between gap-8 lg:gap-10 md:flex-row rounded-rounded-sm md:rounded-rounded-md lg:rounded-tl-card-lg lg:rounded-br-card-lg lg:rounded-tr-card-sm lg:rounded-bl-card-sm bg-[#E8EEFA] overflow-hidden`}>
            <div className="flex-1 flex-col px-6 py-10 md:py-[67px] md:pl-[50px]">
                <img src={logoSrc} alt="" className='w-[130px] h-[72px] mb-[62px]' />
                <p className='mb-[62px] text-[30px] lg:text-[36px] mx-w-[466px]'>{comments}</p>
                <div className='flex items-center gap-[28px]'>
                    <img src={profilePicture} alt="" className=' w-[110px] h-[110px]' />
                    <div className='flex flex-col justify-between items-start gap-[18px]'>
                        <p className='text-[18px]'>{userName}</p>
                        <p className='text-[16px] text-brand-gray'>{userRole}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden self-stretch">
                <img src={displayImage} alt="" className=' w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default TestimanialCard