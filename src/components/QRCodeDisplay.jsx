
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeDisplay = ({ value }) => {
  if (!value) return null;

  // Download function
  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas"); // grab the QR code canvas
    const url = canvas.toDataURL("image/png");       // convert to image URL
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";                      // file name
    a.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6 bg-white p-6 rounded-xl border border-gray-200 max-w-md mx-auto">
      <div className="bg-white p-4 rounded-lg border border-gray-300">
        <QRCodeCanvas value={value} size={220} className="mx-auto" />
      </div>
      <p className="text-black break-words text-center text-lg font-medium mt-2 px-2">{value}</p>
      <button
        onClick={downloadQRCode}
        className="bg-black text-white font-semibold py-2 px-6 rounded-lg border border-black hover:bg-white hover:text-black transition-all"
      >
        Download QR
      </button>
    </div>
  );
};

export default QRCodeDisplay;