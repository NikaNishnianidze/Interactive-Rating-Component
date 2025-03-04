import "./rate.css";
import starImage from "../../../public/icon-star.svg";

export default function Rate({ rate, setRate, setSubmit }) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="container">
        <div className="image">
          <img src={starImage} alt="star image" />
        </div>

        <h1>How did we do?</h1>
        <p className="paragraph">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="rate">
          {buttons.map((item) => (
            <button
              key={item}
              onClick={() => setRate(item)}
              style={{
                backgroundColor: rate == item ? "#7C8798" : "",
                color: rate == item ? "#fff" : "",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="last-button" onClick={() => rate && setSubmit(true)}>
          SUBMIT
        </button>
      </div>
    </>
  );
}
