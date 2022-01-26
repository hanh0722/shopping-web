import { CORE_API } from "../apis/base"
import request from "../AxiosConfig"
export const LoginApis = async (username: string, password: string) => {
    try{
        const response = await request.post({
            url: `${CORE_API}/api/auth/login`,
            data: {
                username: username,
                password: password
            }
        })
        return response;
    }catch(err) {
        console.log(err);
    }
}