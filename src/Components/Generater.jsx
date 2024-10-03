import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Generater = () => {
  const [password, setPassword] = useState("");
  const [lenght, setLenght] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const password = characters
      .slice(0, lenght)
      .split("")
      .map((char) => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
      })
      .join("");
    setPassword(password);
    toast.success("Password Generated Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleLenghtChange = (e) => {
    setLenght(e.target.value);
  };

  const handleUppercaseChange = () => {
    setUppercase(!uppercase);
  };

  const handleLowercaseChange = () => {
    setLowercase(!lowercase);
  };

  const handleNumbersChange = () => {
    setNumbers(!numbers);
  };

  const handleSymbolsChange = () => {
    setSymbols(!symbols);
  };

  const copyPassword = () => {
    toast.success("Password Copied Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
    navigator.clipboard.writeText(password);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
      <div className="flex justify-center items-center h-[80vh] mt-10">
        <div className="bg-zinc-900 text-white p-10 rounded-lg">
          <h1 className="text-3xl font-bold">Password Generater</h1>
          <div className="flex justify-center items-center w-full mt-10 gap-3">
            <input
              className="border-violet-100 bg-transparent border-2 outline-none w-full text-white p-2 rounded-lg"
              type="text"
              value={password}
              readOnly
            />
            <button
              className="bg-green-700 text-white p-2 rounded-lg flex justify-center items-center  "
              onClick={copyPassword}
            >
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "3px",
                  paddingLeft: "3px",
                }}
                colors="primary:#ffffff"
                src="https://cdn.lordicon.com/iykgtsbt.json"
                trigger="hover"
              ></lord-icon>
            </button>
          </div>
          <div className="passLenght flex justify-between items-center mt-5">
            <label htmlFor="lenght">Password Lenght</label>
            <input
              type="range"
              min="8"
              max="32"
              value={lenght}
              onChange={handleLenghtChange}
            />
            <span>{lenght}</span>
          </div>
          <div className="passUppercase flex justify-between items-center mt-5">
            <label htmlFor="uppercase">Include Uppercase Letters</label>
            <input type="checkbox" onChange={handleUppercaseChange} />
          </div>
          <div className="passLowercase flex justify-between items-center mt-5">
            <label htmlFor="uppercase">Include Lowercase Letters</label>
            <input type="checkbox" onChange={handleLowercaseChange} />
          </div>
          <div className="passNumbers flex justify-between items-center mt-5">
            <label htmlFor="uppercase">Include Numbers</label>
            <input type="checkbox" onChange={handleNumbersChange} />
          </div>
          <div className="passSymbols flex justify-between items-center mt-5">
            <label htmlFor="uppercase">Include Symbols</label>
            <input type="checkbox" onChange={handleSymbolsChange} />
          </div>
          <div className="btn flex justify-center items-center mt-5 w-full">
            <button
              className="bg-green-700 text-white p-2 rounded-lg w-full flex justify-center items-center"
              onClick={generatePassword}
            >
              Generate Password
              <lord-icon
                style={{
                  width: "25px",
                  height: "25px",
                  paddingLeft: "3px",
                }}
                src="https://cdn.lordicon.com/pflszboa.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generater;
