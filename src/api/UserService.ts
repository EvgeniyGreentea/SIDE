import { IProfile } from './../models/IProfile';
import axios, { AxiosResponse } from "axios";

export default class UserService {
   static async getProfile(): Promise<AxiosResponse<IProfile[]>> {
        return axios.get<IProfile[]>('./profile.json')
    }
}