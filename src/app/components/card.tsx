import React from 'react'

type CardProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
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
          p-4
        `}>
        <div className={className}>
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
