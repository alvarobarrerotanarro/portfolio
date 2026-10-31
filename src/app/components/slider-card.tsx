"use client"

import type { FC, ReactNode } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "@/app/components/card"
import { ClientContext } from "@/app/contexts/client-ctx";
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

type SliderCardProps = {
    speed?: number;
    fps?: number;
    height?: number;
    minimalSliderWidth?: number;
    children: ReactNode[];
}

const SliderCard: FC<SliderCardProps> = ({
    speed = 0.05,
    fps = 60,
    height = 200,
    minimalSliderWidth = 0,
    children
}) => {
    const childrenReferences = useRef<(HTMLElement | null)[]>([]);
    const cardReference = useRef<HTMLElement>(null);

    const [x, setX] = useState(0);
    const clientContext = useContext(ClientContext);

    useEffect(() => {
        if (!clientContext.isClient) return;

        const interval = setInterval(() => {
            const sliderWidth = Math.max(window.innerWidth, minimalSliderWidth);

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
    }, [x, speed, fps, clientContext.isClient]);

    return (

        <Card ref={cardReference} className="text-nowrap overflow-x-hidden">

            {children.map((child, i) => {
                return <div style={{padding: `${height}px 0`, animation: "fadein 1s ease-in-out" }} className="h-full inline-block" key={i} ref={(e) => { childrenReferences.current[i] = e }}>{child}</div>
            })}

        </Card>

    );
}

export default SliderCard;