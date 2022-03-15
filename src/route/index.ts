import React from "react";
import { Login } from "../pages/login/Login";
import { Profile } from "../pages/profile/Profile";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    MAIN = '/',
    PROFILE = 'profile'
}

export const PublicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, element: Login },
    { path: RouteNames.PROFILE, element: Profile },

]
