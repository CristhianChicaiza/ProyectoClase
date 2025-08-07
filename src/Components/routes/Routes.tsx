import type { JSX } from "react";
import type { Role } from "../../types/auth";

import Shop from "../Pages/Shop";
import ShopDetail from "../Pages/ShopDetail";
import HomePage from "../Pages/HomePage copy";
import Contact from "../Pages/Contact";



// type Role = 'guest' | 'admin';

export type AppRoute = {
    path: string;
    element: JSX.Element;
    role: Role;
};

export const appRoutes: AppRoute[] = [
   { path: "/contact", element: <Contact />, role: 'guest' },  
   { path: "/homepages", element: <HomePage />, role: 'guest' },
    { path: "/Shop", element: <Shop />, role: 'guest' },
     { path: "/shopdetail", element: <ShopDetail />, role: 'guest' }
];
