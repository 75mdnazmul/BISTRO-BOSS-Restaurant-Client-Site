import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-site-e9rnwul5z.vercel.app/Foods', {
            headers: {
                'Authorization': 'Bearer YOUR_API_TOKEN'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);

                setMenu(data)
                setLoading(false)
            })
            .catch(err => {
                console.error('Fetch error: ', err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
return [menu, loading]
}
export default useMenu;