import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import images from "~/asset/images";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMessage,
    faPaperPlane,
    faSignIn,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import routesConfig from "~/config/routes";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "eng",
                    title: "English",
                },
                {
                    type: "language",
                    code: "viet",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "thai",
                    title: "ThaiLand",
                },
                {
                    type: "language",
                    code: "cam",
                    title: "Campuchia",
                },
                {
                    type: "language",
                    code: "lao",
                    title: "Lao",
                },
                {
                    type: "language",
                    code: "chinna",
                    title: "Chinna",
                },
                {
                    type: "language",
                    code: "indo",
                    title: "Indonesia",
                },
                {
                    type: "language",
                    code: "sing",
                    title: "Singapore",
                },
                {
                    type: "language",
                    code: "korea",
                    title: "Korea",
                },
                {
                    type: "language",
                    code: "usa",
                    title: "USA",
                },
                {
                    type: "language",
                    code: "canada",
                    title: "Canada",
                },
                {
                    type: "language",
                    code: "hongkong",
                    title: "HongKong",
                },
                {
                    type: "language",
                    code: "rusia",
                    title: "Rusia",
                },
                {
                    type: "language",
                    code: "dongitmo",
                    title: "Dong Ti Mo",
                },
                {
                    type: "language",
                    code: "myanmar",
                    title: "Myanmar",
                },
                {
                    type: "language",
                    code: "brunei",
                    title: "Brunei",
                },
                {
                    type: "language",
                    code: "philipines",
                    title: "Philipines",
                },
                {
                    type: "language",
                    code: "qatar",
                    title: "Qatar",
                },
                {
                    type: "language",
                    code: "hungary",
                    title: "Hungary",
                },
                {
                    type: "language",
                    code: "iran",
                    title: "Iran",
                },
                {
                    type: "language",
                    code: "peru",
                    title: "Peru",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and helps",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcut",
    },
];

function Header() {
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "ViewProfile",
            to: "/@huyy",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get Coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={routesConfig.home} className={cx("logo-link")}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* Search */}
                <Search />

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notifications" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button underline>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src="https://bom.so/iT7gwV" className={cx("user-avatar")} alt="Nguyen van a" />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
