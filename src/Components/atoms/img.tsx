
import styles from "./atom.module.css";

interface ImagesProps{
    src: string;
    alt?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
}
function Image ({ src, alt, className, width, height }: ImagesProps){
 const picture = className ? `${styles.img} ${className}` : styles.img;

    return (
        <img
            src={src}
            alt={alt}
            className={picture}
            width={width}
            height={height}
        />
    );
}
export default Image;