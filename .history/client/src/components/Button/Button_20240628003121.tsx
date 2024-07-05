import React, {memo} from "react";

const Button = ({text, onClick, className, icon, bgColor, textColor,px, fullWidth}) => {
    return(
        <button
            type="button"
            className={`py-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && 'w-full'}  ${className} flex justify-center items-center outline-none rounded-md hover:underline `}
            onClick={onClick}
        >
            <span className="pr-[5px] text-[19px]">{icon}</span>
            {text}
        </button>
    )
}

export default memo(Button)