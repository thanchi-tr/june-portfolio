import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Icon = ({ iconStr, href, className }: { iconStr: string, href?: string, className?: string }) => {

    const iconStyle = {
        fontSize: '24px', // Default size
        '@media (min-width: 600px)': {
            fontSize: '32px', // Medium screens
        },
        '@media (min-width: 1024px)': {
            fontSize: '40px', // Large screens
        },
    };
    let icon = null;
    switch (iconStr.toLowerCase()) {
        case 'github':
            icon = <FaGithub style={iconStyle} className={className} />;
            break;
        case 'linkedin':
            icon = <FaLinkedin style={iconStyle} className={className} />;
            break;
        case 'logo':
            icon = (
                <div className="logo">
                    <Image
                        src="/logo.png"
                        alt={iconStr}
                        fill
                        sizes="32px (min-width: 600px) 32px"
                        className={className}
                    />
                </div>

            );
            break;
        default:
            icon = <div>Icons not found!</div>;
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {iconStr && icon}
        </a>
    );
};

export default Icon;
