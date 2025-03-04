import "./result.css";
import resultImage from "../../../public/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <>
      <div className="card">
        <img src={resultImage} alt="result image" />
        <div className="result-info">
          <h2>You selected {rate} out of 5</h2>
        </div>
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
