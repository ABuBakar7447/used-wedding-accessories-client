import { useEffect, useState } from "react";



const useToken = email => {
    const [token, setToken] = useState(null);

    //token sending
    
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.tokenForAccess) {
                        localStorage.setItem('tokenForAccess', data.tokenForAccess);
                        setToken(data.tokenForAccess);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;
