import { useState } from "react";
import BillInput from "./BillInput.jsx";
import BillPrice from "./BillPrice.jsx";
import ResetBtn from "./ResetBtn.jsx";

const TipCounter = () => {
  const [bill, setBill] = useState(0); // Initialize bill as a number
  const [percentage1, setPercentage1] = useState(0); // Initialize percentage1 as a number
  const [percentage2, setPercentage2] = useState(0); // Initialize percentage2 as a number

  const avgPrice = (percentage1 + percentage2) / 2;
  // Calculate total tip based on the bill and average of percentages
  const totaldis = (bill * avgPrice) / 100;

  const totalTip = bill - totaldis;

  const onReset = () => {
    const confirm = window.confirm("Do you want to reset your bill");
    if (confirm) {
      setBill(0);
      setPercentage1(0);
      setPercentage2(0);
    }
  };

  return (
    <div className="bill-list">
      <h1>My Bill App</h1>
      <div className="bill">
        <h2>Your Bill</h2>
        <BillInput
          per={percentage1}
          onPer={setPercentage1}
          per2={percentage2}
          onPer2={setPercentage2}
          onPrice={setBill}
          bill={bill}
        />
        {bill > 0 && (
          <>
            {" "}
            <BillPrice totalTip={totalTip} bill={bill} />{" "}
            {/* Format totalTip to two decimal places */}
            <ResetBtn onReset={onReset} />
          </>
        )}
        {/* Reset functionality */}
      </div>
    </div>
  );
};

export default TipCounter;
