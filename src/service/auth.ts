const url ="http://localhost:3500";
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
        console.log("Login successful:", data)
    }else{
        const errorData= await response.json();
        console.error("Login failed:", errorDatas);
        if (response.status === 401) {
            console.error("Unauthorized: Invalid username or password.");
            
        }else if (response.status === 500) {
            console.error("Server error, please try again later")
        }
    }
}