const sendPostData = async ({rawEmail, tone}) => {
    try {
        // console.log("Sending POST data:", { rawEmail, tone });        
        if(!rawEmail){
            throw new Error("Raw email content is required.");
        }
        const selectedTone = tone || "default";

        const response = await fetch(`${import.meta.env.VITE_SERVER_APP_URL}/generate`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailContent: rawEmail, tone: selectedTone }),
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log("Response: ", response);
        // return response
        
        const data = await response.text();
        console.log("Response from server:", data);
        return data;       

    } catch (error) {
        console.error("Error sending POST data:", error);
    }
}



export default sendPostData;