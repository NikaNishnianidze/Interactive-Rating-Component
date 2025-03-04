import "./rate.css";
import starImage from "../../../public/icon-star.svg";

export default function Rate() {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="card">
        <img src={starImage} alt="star image" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate">
          {buttons.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
        <button className="last-button">SUBMIT</button>
      </div>
    </>
  );
}
