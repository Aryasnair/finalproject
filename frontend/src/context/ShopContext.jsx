import { createContext } from "react";

import { prodoucts } from "../assets/assets";
export const ShopContext =createContext();

const ShopContextProvider = (props) =>{
    const currency = '$';
    const delivery_fee=10;
    // const [token, setToken] = useState('')
    // const [showSearch, setShowSearch] = useState(false);
    const value ={
        prodoucts,currency,delivery_fee

    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;