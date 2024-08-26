import axios from "axios";
export default async function handleReq(code :string){
    try {
        const token = await axios.get(
            `http://localhost:3050/auth/github/callback?code=${code}`
        );
        localStorage.setItem("authToken",token.data);
        return true;

    } catch (error) {
        console.error("Error during Google login", error);
        return false;
    }
}  