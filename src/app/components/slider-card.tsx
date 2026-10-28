"use client"

import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Card from "@/app/components/card"

type SliderCardProps = {
    speed?: number;
    fps?: number;
    height?: number;
    sliderWidth?: number;
    children: ReactNode[];
}

const SliderCard: FC<SliderCardProps> = ({
    speed = 0.05,
    fps = 60,
    height = 200,
    sliderWidth = 1000,
    children
}) => {
    const childrenReferences = useRef<(HTMLElement | null)[]>([]);
    const cardReference = useRef<HTMLElement>(null);

    const [x, setX] = useState(0);
    const [isMountedComponent, setIsMountedComponent] = useState(false);

    useEffect(() => {
        if (!isMountedComponent) setIsMountedComponent(true);

        const interval = setInterval(() => {

            childrenReferences.current.forEach((child, i) => {
                if (child != null) {
                    const appliedCardWidth = sliderWidth / children.length;
                    const position = (x + i * appliedCardWidth) % sliderWidth - appliedCardWidth / 2;
                    const translation = position - child.offsetLeft;
                    child.style.transform = `translateX(${translation}px)`;
                }
            });

            setX((x + speed * 1000 / fps) % sliderWidth);
        }, 1000 / fps);

        return () => {
            clearInterval(interval);
        }
    }, [x, speed, fps, isMountedComponent]);

    return (

        <Card ref={cardReference} className="text-nowrap overflow-x-hidden">

            {children.map((child, i) => {
                return <div style={{padding: `${height}px 0`, animation: "fadein 1s ease-in-out" }} className="h-full inline-block" key={i} ref={(e) => { childrenReferences.current[i] = e }}>{child}</div>
            })}

        </Card>

    );
}

export default SliderCard;