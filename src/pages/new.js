import { useState } from "react";

const message = ["Learn React", "Apply job", " invest your new income"];

const StepPage = () => {
  const [step, setStep] = useState(0);
  const [isHideSteps, setIsHideSteps] = useState(true);
  const incrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const toggleSteps = () => {
    setIsHideSteps(!isHideSteps);
  };
  return (
    <div className="w-[500px] mx-auto border border-solid">
      <div className="flex justify-end ">
        <div
          onClick={toggleSteps}
          className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full cursor-pointer"
        >
          X
        </div>
      </div>

      {isHideSteps && (
        <div>
          <div className="flex justify-between mb-10">
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer"
              style={{ backgroundColor: step >= 1 ? "purple" : "gray" }}
            >
              1
            </div>
            <div
              style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
              className="flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer"
            >
              2
            </div>
            <div
              style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
              className="flex items-center justify-center w-10 h-10 text-white rounded-full cursor-pointer"
            >
              3
            </div>
          </div>

          <p className="mb-10 text-center">{message[step - 1]}</p>

          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className="border border-solid background-color bg-green-500 hover:bg-none w-20"
            >
              prev
            </button>
            <button
              onClick={incrementStep}
              className="border border-solid  bg-green-500 hover:bg-none w-20"
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default StepPage;
