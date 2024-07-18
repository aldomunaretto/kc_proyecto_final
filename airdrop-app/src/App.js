import React, { useState } from "react";
import Papa from "papaparse";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const App = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddresses, setSelectedAddresses] = useState([]);
  const [network, setNetwork] = useState("mainnet");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        const data = result.data;
        setAddresses(data.map(row => row[0]));
      }
    });
  };

  const handleSelectAddress = (address) => {
    setSelectedAddresses((prev) => 
      prev.includes(address) ? prev.filter(addr => addr !== address) : [...prev, address]
    );
  };

  const handleAirdrop = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const tokenAddress = ""; // Coloca aquí la dirección del token
    const airdropAddress = ""; // Coloca aquí la dirección del contrato Airdrop
    const amount = ethers.utils.parseUnits("10", 18); // Ajusta la cantidad a enviar

    const airdropContract = new ethers.Contract(airdropAddress, [
      "function airdrop(address[] calldata recipients, uint256 amount) external"
    ], signer);

    await airdropContract.airdrop(selectedAddresses, amount);
  };

  return (
    <div>
      <h1>Airdrop App</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <select onChange={(e) => setNetwork(e.target.value)} value={network}>
        <option value="mainnet">Mainnet</option>
        <option value="ropsten">Ropsten</option>
        <option value="rinkeby">Rinkeby</option>
        <option value="kovan">Kovan</option>
        <option value="goerli">Goerli</option>
      </select>
      <div>
        <h2>Addresses</h2>
        {addresses.map((address, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => handleSelectAddress(address)}
              checked={selectedAddresses.includes(address)}
            />
            {address}
          </div>
        ))}
      </div>
      <button onClick={handleAirdrop}>Execute Airdrop</button>
    </div>
  );
};

export default App;
