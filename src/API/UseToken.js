import { useEffect } from "react";
import { useState } from "react";

export const UseToken = (email) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://e-commerce-project-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("get token");
                    if (data.accessToken) {
                        localStorage.setItem('commerceToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }

    }, [email]);

    return [token];
};