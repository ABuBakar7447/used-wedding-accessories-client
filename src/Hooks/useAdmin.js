import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true)

    //admin route checking
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.isAdmin)
                    setAdminLoading(false)
                })
        }

    }, [email])
    return [isAdmin, adminLoading]
}
export default useAdmin;