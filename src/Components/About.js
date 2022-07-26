import React from "react";

export default function About(props) {
  // const handleChangeMode = () => {
  //   if (myColor.color === "black" && myColor.backgroundColor === "white") {
  //     setMyColor({
  //       color: "white",
  //       backgroundColor: "Black",
  //       border: "1px solid white",
  //     });
  //     setBtn("Enable Light Mode");
  //   } else {
  //     setMyColor({
  //       backgroundColor: "white",
  //       color: "black",
  //     });

  //     setBtn("Enable Dark Mode");
  //   }
  // };

  // const [btn, setBtn] = useState("Enable Dark Mode");
  // const [myColor, setMyColor] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // style={{
  //   background: props.mode === "light" ? "white" : "black",
  //   color: props.mode === "light" ? "black" : "white",
  // }}

  const myColor = {background: props.mode === "light" ? "white" : "black",
  color: props.mode === "light" ? "black" : "white"

}

  return (
    <>
      <div
        className="container "
        style={myColor}
      >
        <h1 className="my-3">About TextHandler</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myColor}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                Analyze
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              style={myColor}
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count, Capitalized Case, Removing Extra Spaces,
                Copy Text etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myColor}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Ease to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              style={myColor}
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextHandler is a free character counter tool that provides
                instant character count and word count statistics for a given
                text. TextHandler reports the number of words and characters.
                Thus it is suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myColor}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              style={myColor}
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  This word counter software works in any web browsers such as
                  Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                  count characters in facebook, blog, books, excel document, pdf
                  document, essays, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="my-3 btn btn-primary" onClick={handleChangeMode}>
          {btn}
        </button> */}
      </div>
    </>
  );
}
