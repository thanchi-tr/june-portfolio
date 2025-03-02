
import { ReactNode } from 'react';
interface ExternalLinkCircularButtonProps {
    link: string;
    children: ReactNode;
}
const ExternalLinkCircularButton = ({ link, children }: ExternalLinkCircularButtonProps) => {
    return (

        <a href={link} target="_blank" rel="noopener noreferrer" >
            <div className="
                        relative overflow-hidden
                        h-full w-full shadow-sm
                        rounded-full
                        hover:shadow-lg hover:shadow-black/30
            ">
                {children}
            </div>
        </a>
    )
}

export default ExternalLinkCircularButton;