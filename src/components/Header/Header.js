import React, { useContext, useState } from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
// import { ConnectButton } from 'web3uikit';

function Header() {
    const [search, setSearch] = useState('');
    // async function handleConnectWallet() {
    //     try {
    //         // if(!ethereum) return alert("Please install Metamask!");
    //         const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    //         setCurrentAccount(accounts[0]);
    //     } catch(error) {
    //         console.log(error);
    //         throw new error("No ethereum connected!");
    //     }
    // }

    return (
        <div className='header'>
            <div><Link className = "home" to = "/">Header</Link></div>
            <div className='wallet'>
                <button>Connect Wallet</button>
            </div>
            <div className='inpt'>
                <input 
                    value = {search}
                    onChange = {(e) => setSearch(e.target.value)}
                    placeholder='Search Header..'
                />
                <button><SearchIcon /></button>
            </div>
            <div className='options'>
                <Link to = "/location">Location</Link>
                <Link to = "/accounts">Accounts</Link>
                <Link to = "/orders">Orders</Link>
                <Link to = "/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Header;