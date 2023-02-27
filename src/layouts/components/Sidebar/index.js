import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRecordVinyl, faUser } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon className={cx("icon")} icon={faHome} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon className={cx("icon")} icon={faUser} />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon className={cx("icon")} icon={faRecordVinyl} />}
                />
            </Menu>
        </aside>
    );
}

export default SideBar;
