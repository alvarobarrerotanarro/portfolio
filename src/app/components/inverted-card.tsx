import { FC, MutableRefObject } from "react";


type InvertedCardProps = {
    children?: React.ReactNode;
    className?: string;
    ref?: MutableRefObject<any>;
}

const InvertedCard: FC<InvertedCardProps> = ({ children, className, ref }) => {
    return (
        <div
            ref={ref}
            className={`
        bg-[--foreground] 
        text-[--background]
          flex 
          w-full
          h-full
        `}
        >
            <div className={`
            flex-grow
            flex
            justify-end
          `}>
                <div className={`
            basis-16
            md:basis-32
            h-full
          `}></div>
            </div>

            <div className={`
          min-w-[80%] 
          md:min-w-[0]
          basis-[50%]
          flex-grow   
        `}>
                <div className={className == "" ? "px-4 py-2" : className}>
                    {children}
                </div>
            </div>

            <div className={`
            flex-grow
            flex
            justify-start
          `}>
                <div className={`
            basis-16
            md:basis-32
            h-full
          `}></div>
            </div>
        </div>
    );
}

export default InvertedCard;