import axios from "axios";

export default axios.create({
    headers:{
        "Access-Control-Allow-Origin" : "*",
    },
    baseURL: "https://mdn98k0alc.execute-api.us-east-1.amazonaws.com/"
});