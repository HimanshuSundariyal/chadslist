import React, { useState } from 'react';
import { useLocation, NavLink, withRouter } from 'react-router-dom';

import Web3 from 'web3';

import SideMenu from './SideMenu';

import TabItem from '../components/tabs/TabItem';
import Button from '../components/forms/Button';
import Modal from 'react-modal';

import { TwitterIcon } from '../components/icons';

import logo from '../assets/images/logo.png';
import homeImage from '../assets/images/icons/home.png';
import basketImage from '../assets/images/icons/basket.png';
import dotsImage from '../assets/images/icons/dots.png';
// import SideMenu from "../components/sidemenu/SideMenu";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: ('Permanent Marker')
    },
  };


const displayWalletAddress = (str) => {
    return str.substring(0, 4) + '...' + str.slice(-4);
}

const Toolbar = (props) => {
    
    const location = useLocation();

    const [isPendingConnection, setPendingConnection] = useState(false);
    const [walletAddress, setWalletAddress] = useState(localStorage.getItem("walletAddress"));

    const _isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        let {ethereum} = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    // const getCurrentChainId = async () => {
    //     const {ethereum} = window;
    //     const web3 = new Web3(ethereum);
    //     //Have to check the ethereum binding on the window object to see if it's installed
    //     const chainID = await web3.eth.net.getId();
    //     return chainID;
    // }

    const getDefaultAddres = async () => {
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        let defaultAccount = await web3.eth.getAccounts();
        return defaultAccount[0];
    };

    const connectMetamaks = async () => {
        if (!isPendingConnection) {
            if (_isMetaMaskInstalled()) {
                // Acccounts now exposed
                const {ethereum} = window;
                try {
                    // Will open the MetaMask UI
                    // You should disable this button while the request is pending!
                    setPendingConnection(true);
                    await ethereum.request({method: 'eth_requestAccounts'});
                    // const _chainId = await getCurrentChainId();
                    let userAccount = await getDefaultAddres();
                    setWalletAddress(userAccount);
                    localStorage.setItem("walletAddress", userAccount);
                    if (!walletAddress) {
                        setIsOpen(true);
                    }
                    setPendingConnection(false);
                } catch (error) {
                    alert('User Rejected to connect metamask');
                    console.error(error);
                }
            } else {
                alert('Please install Metamask extension');
                return;
            }
        }
    };



  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [claimModalIsOpen, setClaimModalIsOpen] = React.useState(false);


  function closeModal() {
    setIsOpen(false);
    setClaimModalIsOpen(false);
  }
  
  function claimOpenModal() {
    setIsOpen(false);
    setClaimModalIsOpen(true);
  }
  
    return (
        <div className="page-header">
            <div className="top-nav">
                <div className="toggle-btn">
                    <SideMenu click={props.drawerToggleClickHandler} />
                </div>
                <div className="navbar-left menus">
                    <TabItem active={location.pathname === '/' ? true : false} image={homeImage}><NavLink to={'/'}>Home / Mint</NavLink></TabItem>
                    <TabItem active={location.pathname === '/list' ? true : false} image={basketImage}><NavLink to={'/list'}>Marketplace</NavLink></TabItem>
                    <TabItem image={dotsImage}><NavLink to={'/about'}>About</NavLink></TabItem>
                </div>
                <div className="navbar-right d-md-none d-lg-flex">
                    <span className="mr-4">do you even chad, bro?</span>
                    <div className="twitter-icons d-flex align-items-center mr-4">
                        <a href="/#"><TwitterIcon /></a>
                        <a href="/#"><TwitterIcon /></a>
                    </div>
                    <div className="connect-button">
                        <Button onClick={connectMetamaks}>
                        {
                            walletAddress ? (
                            <>{displayWalletAddress(walletAddress)}</>
                            ) : (<>connect</>)
                        }
                        </Button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>click here to claim your rewards</h2>
                <div className="d-flex justify-content-center">
                    <Button onClick={claimOpenModal} className="mr-2">Claim</Button>
                    <Button onClick={closeModal}>close</Button>
                </div>
            </Modal>

            <Modal
                isOpen={claimModalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Claim Modal"
            >
                <h3>Congratulations! you claim your rewards.</h3>
                <div className="d-flex justify-content-center">
                    
                    <Button onClick={closeModal}>close</Button>
                </div>
            </Modal>

            <div className="navbar-right d-none d-lg-none d-md-flex justify-content-end">
                    <span className="mr-4">do you even chad, bro?</span>
                    <div className="twitter-icons d-flex align-items-center mr-4">
                        <TwitterIcon />
                        <TwitterIcon />
                    </div>
                    <div className="connect-button">
                        <Button onClick={connectMetamaks}>
                        {
                            walletAddress ? (
                            <>{displayWalletAddress(walletAddress)}</>
                            ) : (<>connect</>)
                        }
                        </Button>
                    </div>
                </div>

            <div className="top-logo">
                <div className="container-fluid">
                <img src={logo} width="400" height="auto" alt="Top Logo" />
                </div>
            </div>
        </div>
    );
}

export default withRouter(Toolbar);
