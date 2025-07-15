import React from "react";

/*
import styles from "./atom.module.css";
interface LogoProps {
    onClick?: () => void;
    label: string;
}
function Logo({onClick, label}: LogoProps) {
    const logoclass = `${styles.logop}`;
    return (
        <div className={logoclass} onClick={onClick}>
            <a href="#">{label}</a>
        </div>
    );
} 
export default Logo;
*/

interface LogoProps {
  text: string;
  variant?: "default" | "small";
  type?: "primary" | "secondary" | "image";
}

const Logo: React.FC<LogoProps> = ({ text }) => (
  <h1 className="text-5x1 font-bold text-yellow-500 whitespace-nowrap">{text}</h1>
);

export default Logo;

