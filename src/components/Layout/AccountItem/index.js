import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src="https://bom.so/iT7gwV" alt="Huy" />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Phan Sy Huy</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </h4>
                <span className={cx("username")}>realhuyp</span>
            </div>
        </div>
    );
}
export default AccountItem;
