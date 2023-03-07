import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true)

    //seller route checking
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }

    }, [email])
    return [isSeller, sellerLoading]
}
export default useSeller;