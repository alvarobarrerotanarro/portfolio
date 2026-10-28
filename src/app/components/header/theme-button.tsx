"use client"

import { useEffect, useState, type FC } from "react"
import SunSvg from "@/app/images/svgs/sun.svg";
import MoonSvg from "@/app/images/svgs/moon.svg"

type ThemeButtonProps = {}

enum ThemeVariants {
    DARK,
    LIGHT
};

function updateThemeAtLocalStorage(theme: ThemeVariants) {
    const colorThemeStorage = theme == ThemeVariants.DARK ? "dark" : "light";
    localStorage.setItem("color-theme", colorThemeStorage);
}

function queryThemeAtLocalStorage() {
    const colorThemeStorage = localStorage.getItem("color-theme");
    const colorTheme = colorThemeStorage == null || colorThemeStorage == "dark" ? ThemeVariants.DARK : ThemeVariants.LIGHT;
    return colorTheme;
}

const ThemeButton: FC<ThemeButtonProps> = () => {
    const [isMountedComponent, setIsMountedComponent] = useState(false);
    const [theme, setTheme] = useState<ThemeVariants>(ThemeVariants.DARK);

    const switchTheme = () => {
        const newTheme = theme == ThemeVariants.DARK ? ThemeVariants.LIGHT : ThemeVariants.DARK;
        setTheme(newTheme);
    }

    const updateCSSVariables = () => {
        if (theme == ThemeVariants.DARK) {
            document.documentElement.style.setProperty("--background-heavy", "#151d29");
            document.documentElement.style.setProperty("--background", "#1e293b");
            document.documentElement.style.setProperty("--foreground", "#fffe");
            document.documentElement.style.setProperty("--foreground-light", "#fff5");
        } else { // Light
            document.documentElement.style.setProperty("--background-heavy", "#fff");
            document.documentElement.style.setProperty("--background", "#f1f1f1");
            document.documentElement.style.setProperty("--foreground", "#000");
            document.documentElement.style.setProperty("--foreground-light", "#494949");
        }
    }

    const onClick = () => {
        if (!isMountedComponent) return;
        switchTheme();
    }

    useEffect(() => {
        if (!isMountedComponent) {
            setTheme(queryThemeAtLocalStorage());
            setIsMountedComponent(true);
        } else {
            updateCSSVariables();
            updateThemeAtLocalStorage(theme);
        }
    }, [isMountedComponent, theme]);

    return <button onClick={onClick}>
        {theme == ThemeVariants.DARK ? <MoonSvg className="w-8 h-8" /> : <SunSvg className="w-8 h-8" />}
    </button>;
}

export default ThemeButton;