import styles from "./atom.module.css";

interface LogoProps {
    onClick?: () => void;
    label: string;
}

function Logo({onClick, label}: LogoProps) {
    const logoclass = `${styles.logo}`;
    return (
        <div className={logoclass} onClick={onClick}>
            <a href="#">{label}</a>
        </div>
    );
}
    
export default Logo;