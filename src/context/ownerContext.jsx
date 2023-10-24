import { useContext, createContext, useState, useEffect } from 'react';
import { fetchData } from './../components/helpers/fetchHelper';
const OwnerContext = createContext();

export const useOwnerContext = () => {
    return useContext(OwnerContext);
}


export const OwnerProvider = ({ children }) => {
    const [bannerData, setBannerData] = useState();

    const handleBannerData = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/banners`, 'GET', null);
            if (response.status === "success") {
               const data = await response.banners;
               setBannerData(data);
            }
            else {
                console.error("There was an error fetching the data");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    useEffect(() => {
        handleBannerData();
    }, [])

    return (
        <OwnerContext.Provider value={{ bannerData, setBannerData }}>
            {children}
        </OwnerContext.Provider>
    )
}