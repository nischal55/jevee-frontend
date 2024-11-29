import React from "react";
import { CiWarning } from "react-icons/ci";

const Faqs = () => {
  return (
    <div className="w-full flex justify-center items-center text-center min-h-[300px]">
      <div className="flex flex-col items-center">
        <CiWarning size={40} />
        <p className="text-[16px] mt-2">There are no FAQs for this product.</p>
      </div>
    </div>
  );
};

export default Faqs;
