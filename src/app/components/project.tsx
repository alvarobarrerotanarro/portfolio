"use client"

import { FC } from "react";
import Link from "next/link";
import Card from "@/app/components/card";
import { spaceGrotesk } from "@/app/fonts";

import ArrowSvg from "@/app/images/svgs/arrow.svg"

type ProjectProps = {
    name: string;
    description: string;
    tags: string[];
    githubURL: string;
    index: number;
};

const Project: FC<ProjectProps> = ({ name, description, tags, githubURL, index }) => {
    return (

        <Card className="min-h-60 flex flex-wrap gap-8 p-4 justify-between items-center">
            <div className="flex-grow">
                <span className={`${spaceGrotesk.className} text-xl`}>{index < 10 ? "0" + index : index}</span>
            </div>

            <div className="md:max-w-[33%] flex-grow">
                <h4>{name}</h4>
            </div>

            <div className="md:max-w-[33%] flex-grow flex flex-col gap-4">
                <p className="text-[--foreground-light]">{description}</p>
                <div className="flex flex-wrap gap-1">
                    {tags.map((tag, i) => {
                        return <span key={i} className="text-sm text-[--foreground] px-3 py-1 border border-[--foreground-light] select-none hover:text-[--background] hover:bg-[--foreground]">{tag}</span>
                    })}
                </div>
            </div>

            <div className="flex justify-end flex-grow">
                <Link target="_blank" href={githubURL} className="inline-flex w-16 h-16 items-center justify-center bg-transparent text-[--foreground] hover:text-[--background] hover:bg-[--foreground] border border-[--foreground] rounded-full bg-slate-200"><ArrowSvg className="text-inherit w-8 h-8 rotate-[130deg]" /></Link>
            </div>
        </Card>

    );
}

export default Project;