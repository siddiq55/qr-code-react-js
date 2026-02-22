
import React, { useState } from "react";

const InputForm = ({ onGenerate }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onGenerate(text);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 bg-white p-6 rounded-xl border border-gray-200 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition-all p-3 rounded-lg text-lg outline-none text-black bg-white"
      />
      <button
        type="submit"
        className="bg-black text-white font-semibold py-2 rounded-lg border border-black hover:bg-white hover:text-black transition-all"
      >
        Generate QR Code
      </button>
    </form>
  );
};

export default InputForm;