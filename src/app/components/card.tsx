import React, { MutableRefObject } from 'react'

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  ref?: MutableRefObject<any>
}

export default function Card({ children = null, className = "", ref }: CardProps) {
  return (
    <div
      ref={ref}
      className={`
          flex 
          w-full
          h-full
        `}
    >
      <div className={`
            flex-grow
            flex
            justify-end

            border-y-[1px]
            border-[var(--foreground-light)]
          `}>
        <div style={{ background: "var(--grid-image)" }} className={`
            basis-16
            md:basis-32
            h-full
            border-x-[1px]
            border-[var(--foreground-light)]
          `}></div>
      </div>

      <div className={`
          min-w-[80%] 
          md:min-w-[0]

          basis-[50%]
          flex-grow   
          border-t-[1px]
          border-b-[1px]
          border-slate-500
        `}>
        <div className={className == "" ? "px-4 py-2" : className}>
          {children}
        </div>
      </div>

      <div className={`
            flex-grow
            flex
            justify-start

            border-y-[1px]
            border-[var(--foreground-light)]
          `}>
        <div style={{ background: "var(--grid-image)" }} className={`
            basis-16
            md:basis-32
            h-full
            border-x-[1px]
            border-[var(--foreground-light)]
          `}></div>
      </div>
    </div>
  )
}
