import { forwardRef, useState } from "react";
import images from "~/asset/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

const Image = forwardRef(({ src, className, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
