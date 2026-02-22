import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import QRCodeDisplay from "./components/QRCodeDisplay";


const App = () => {
  const [value, setValue] = useState("");

  const handleGenerate = (text) => {
    setValue(text);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <Header />
      <div className="w-full max-w-md mt-6">
        <InputForm onGenerate={handleGenerate} />
        <QRCodeDisplay value={value} />
      </div>
     
    </div>
  );
};

export default App;