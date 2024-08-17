import url from "../config/url";
export async function login(username:string, password:string){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(url + "/auth/login",{
        method:"Post",
        body:JSON.stringify({username, password}),
        headers:myHeaders,
    });
    if (response.ok ){
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("username", data.username);
        window.location.href = "/"
    }else{
        const errorData= await response.json();
        console.error("Login failed:", errorData);
        if (response.status === 401) {
            console.error("Unauthorized: Invalid username or password.");
            
        }else if (response.status === 500) {
            console.error("Server error, please try again later")
        }
    }
}
export async function register ( username: string, password: string){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(url + "/auth/register",{
        method:"Post",
        body:JSON.stringify({username, password}),
        headers:myHeaders,
    });
    if (response.ok ){
        const data = await response.json();
        console.log("Register successful:", data);
        window.location.href = "/#login"
    }else{
        const errorData= await response.json();
        console.error("Register failed:", errorData);
        if (response.status === 401) {
            console.error("Unauthorized: Invalid username or password.");
            
        }else if (response.status === 500) {
            console.error("Server error, please try again later")
        }
    }

}