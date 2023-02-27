import config from "~/config";

// Layouts
import { HeaderOnly } from "~/layouts";

import Following from "~/pages/Following/Following";
import Home from "~/pages/Home/Home";
import Profile from "~/pages/Profile/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
