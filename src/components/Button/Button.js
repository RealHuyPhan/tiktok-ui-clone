import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    small = false,
    large = false,
    primary = false,
    outline = false,
    underline = false,
    disable = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    ...passProps
}) {
    let Comp = "button";
    const props = { onClick, ...passProps };

    // Remove event listeer when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        underline,
        disable,
        small,
        large,
        rounded,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

Button.protoTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    large: PropTypes.string,
    underline: PropTypes.string,
    rightIcon: PropTypes.string.node,
    leftIcon: PropTypes.string.node,
    className: PropTypes.string,
};

export default Button;
