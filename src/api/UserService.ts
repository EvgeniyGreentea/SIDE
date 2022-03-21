import { IProfile } from './../models/IProfile';
import axios, { AxiosResponse } from "axios";
import { IUser } from '../models/IUser';

export default class UserService {
   static async getProfile(): Promise<AxiosResponse<IProfile[]>> {
        return axios.get<IProfile[]>('./profile.json')
    }

    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json')
    }
}