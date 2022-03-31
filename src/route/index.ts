import React from "react";
import { Login } from "../pages/login/Login";
import { Logout } from "../pages/logout/Logout";
import Main from "../pages/main/Main";
import { Profile } from "../pages/profile/Profile";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    MAIN = '/',
    LOGIN = '/login',
    LOGOUT = '/logout',
    PROFILE = '/profile'
}

export const PublicRoutes: IRoute[] = [
    { path: RouteNames.MAIN, element: Main},
    { path: RouteNames.LOGIN, element: Login},
    { path: RouteNames.LOGOUT, element: Logout},
    { path: RouteNames.PROFILE, element: Profile},
]
