import React, { useState } from "react";

function Prescription() {
  const [showInstructions, setShowInstructions] = useState(true); // Dropdown open by default

  const handleIconClick = () => {
    document.getElementById("fileUpload").click();
  };

  const toggleInstructions = () => {
    setShowInstructions((prevState) => !prevState);
  };

  return (
    <section className="bg-[#F2F2F2] md:p-6 p-4">
      <div className="mx-auto bg-white shadow-md rounded-md p-4 md:p-6">
        {/* Upload Section */}
        <div className="mb-4">
          <h2 className="text-3xl font-normal mb-4">Upload Prescription</h2>
          <div
            className="border-2 border-dashed border-black rounded-lg p-12 flex flex-col items-center justify-center"
            onClick={handleIconClick}
          >
            <i className="bi bi-cloud-upload h-12 w-12 text-[#7263E6] mb-2 cursor-pointer text-5xl" />
            <p className="text-gray-500 md:text-lg text-lg text-center">
              Drag files to upload or browse
            </p>
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              onChange={(e) => console.log(e.target.files)}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl">Instruction</h3>
            <button
              onClick={toggleInstructions}
              className="focus:outline-none text-gray-600 text-lg"
            >
              {showInstructions ? (
                <i className="bi bi-chevron-up"></i>
              ) : (
                <i className="bi bi-chevron-down"></i>
              )}
            </button>
          </div>
          {/* Reserve consistent height */}
          <div
            className="overflow-hidden transition-all duration-300 "
            style={{
              height: showInstructions ? "auto" : "0",
            }}
          >
            {showInstructions && (
              <ul className="text-gray-600 text-base font- space-y-6 mt-2">
              <li>
                <strong>Step 1</strong>
                <span className="block mt-1">Click to upload an image of the prescription or desired product.</span>
              </li>
              <li>
                <strong>Step 2</strong>
                <span className="block mt-1">Request for the quotation.</span>
              </li>
              <li>
                <strong>Step 3</strong>
                <span className="block mt-1">You will receive a notification to confirm billing.</span>
              </li>
              <li>
                <strong>Step 4</strong>
                <span className="block mt-1">Confirm order and billing in the Orders section.</span>
              </li>
            </ul>
            
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prescription; 