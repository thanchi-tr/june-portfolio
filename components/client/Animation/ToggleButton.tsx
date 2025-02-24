interface ToggleButtonProps {
    onClick: () => void;
    isOn: boolean;
    onText?: string;
    offText?: string;
}

/// <reference types="react-scripts" />
/// <summary>
///     A toggle button that can be used to switch between two states.
/// </summary>
/// <param name="onClick">The function to be called when the button is clicked.</param>
/// <param name="isOn">The state of the button.</param>
/// <returns>A toggle button that can be used to switch between two states.</returns>
let ToggleButton = ({ onClick, isOn, onText = "light", offText = "dark" }: ToggleButtonProps) => {
    return (
        <div onClick={onClick} className={`cursor-pointer group`}>
            {/* Container */}
            <div className={`
                flex relative 
                transition-all duration-[750ms] delay-75
                h-20 w-52  items-center
                 ${isOn
                    ? 'border-highlight border-8 shadow-lg shadow-highlight/30 hover:shadow-2xl hover:shadow-highlight'
                    : 'border-black border-4 hover:shadow-2xl hover:shadow-black/50'}
                
                rounded-full`}>
                {/* Button */}
                <div className={`
                    transition-all duration-[520ms] delay-75 
                     aspect-video 
                    ${isOn ? 'bg-highlight mr-2 translate-x-[90%] h-14' : 'bg-black ml-1 h-16'}
                    rounded-full 
                    `}>
                </div>
            </div>
            <div className={` text-center pointer-events-none
                -translate-y-14 w-52  uppercase
                text-3xl font-bold transition-all delay-[180ms] duration-150
                ${isOn ? 'text-secondary' : "text-white/70 opacity-30 group-hover:opacity-100"}
                `}
            >
                {isOn ? onText : offText}
            </div>
        </div>
    )
}

export default
    ToggleButton;