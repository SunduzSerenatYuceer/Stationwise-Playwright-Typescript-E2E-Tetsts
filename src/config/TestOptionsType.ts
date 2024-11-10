import { UserCredentials } from "./UserCredentials";

export type TestOptionsType = {

    webURL : string;
    password : string;
} & {
    [K in 'enduser' | 'officer' | 'admin'] : UserCredentials
}