import { TestOptionsType } from "./TestOptionsType";
import { getEnv } from "./getEnv";

const testOptions : TestOptionsType =  {
    
    webURL: getEnv('WEBURL'),
    password: getEnv('PASSWORD'),
    enduser: {mail: getEnv('ENDUSER_MAIL'), role:'enduser', profil:'A'},
    officer: {mail: getEnv('OFFICER_MAIL'), role: 'officer', profil:'j'},
    admin: {mail: getEnv('ADMIN_MAIL'), role: 'admin', profil:'D'}

}

export default testOptions;
