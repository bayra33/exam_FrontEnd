const url = "//localhost:3500"
export async function checkAccessToken(accessToken: string) {
    try {
        const myHeaders = new Headers(); 
        myHeaders.append("Content-Type", "application/json");
        const response = await fetch(url + "/auth/check", {
            method: "POST",
            body: JSON.stringify({accessToken}),
            headers:myHeaders,
         });
         if (response.ok) {
            console.log(response)
            
         }
    
    } catch (error) {
        console.log(error);
    }
    
}