import { useEffect, useState } from "react";
import { connectWallet } from "../../utils/interact.js";
import ProgressBar from 'react-bootstrap/ProgressBar'

import './mint_button.css'

const MintButton = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
 
  useEffect(async () => { //TODO: implement
    
  }, []);

  const connectWalletPressed = async () => { 
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { //TODO: implement
    
  };

  return (
    <div className="MintButton center">
      <button className="button-mint" id="mintButton">MINT!</button>
      <div>
        <ProgressBar animated now={10} />
      </div>
    </div>

  );
};

export default MintButton;
