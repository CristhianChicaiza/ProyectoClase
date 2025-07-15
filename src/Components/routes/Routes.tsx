import type { JSX } from "react";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import type { Role } from "../../types/auth";

// type Role = 'guest' | 'admin';

export type AppRoute = {
    path: string;
    element: JSX.Element;
    role: Role;
};

export const appRoutes: AppRoute[] = [
   { path: "/Login", element: <Login />, role: 'guest' },  
   { path: "/Gallery", element: <Gallery />, role: 'guest' }
];
