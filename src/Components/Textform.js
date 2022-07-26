import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperCaseClick = () => {
    let temp = text.toUpperCase();
    setText(temp);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleClearClick = () => {
    let temp = "";
    setText(temp);
    props.showAlert("Cleared", "success");
  };
  const handleLowerCaseClick = () => {
    let temp = text.toLowerCase();
    setText(temp);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCaptEachLetterClick = () => {
    const cap = text.split(" ");
    let str = "";
    cap.forEach((element) => {
      str +=
        element.replace(element.charAt(0), element.charAt(0).toUpperCase()) +
        " ";
      setText(str);
    });
    setText(str);
    props.showAlert("Each word is Capitalized", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Removed Extra Spaces", "success");
  };
  const handleReverseSpaces = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text Reversed", "success");
  };
  const onRemoveDuplicatesClick = (e) => {
    let newText = text
      .split(" ")
      .filter(function (item, i, allItems) {
        return i === allItems.indexOf(item);
      })
      .join(" ");

    setText(newText);

    props.showAlert("Removed Duplicated", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("TextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <div className="container">
          <h1>{props.Boxheading}</h1>
          <div className="mb-3">
            <textarea
              style={{
                background: props.mode === "light" ? "white" : "black",
                color: props.mode === "light" ? "black" : "white",
              }}
              className="form-control"
              placeholder="Enter text here"
              value={text}
              onChange={handleOnChange}
              id="TextBox"
              rows="8"
            ></textarea>
          </div>
          <button disabled={text.length===0}
            className="btn btn-primary my-1"
            onClick={handleUpperCaseClick}
          >
            Conver to Uppercase
          </button>
          <button disabled={text.length===0}
            className="mx-3 btn btn-dark my-1"
            onClick={handleLowerCaseClick}
          >
            Conver to Lowercase
          </button>
          <button disabled={text.length===0}
            className=" btn btn-secondary my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button disabled={text.length===0}
            className="mx-3 btn btn-info my-1"
            onClick={handleCaptEachLetterClick}
          >
            Capitalized Case
          </button>
          <button disabled={text.length===0} className=" btn btn-success my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0}
            className="mx-3 btn btn-warning my-1"
            onClick={handleReverseSpaces}
          >
            Reverse Text
          </button>
          <button disabled={text.length===0}
            className=" btn btn-danger my-1"
            onClick={onRemoveDuplicatesClick}
          >
            Remove Duplicate
          </button>
          <button disabled={text.length===0} className="mx-3 btn btn-secondary my-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
        <div className="container my-3">
          <h2>Summary</h2>
          <p>
            {/* <b>{text.length === 0 ? 0 : text.split(" ").length}</b> words{" "} */}
            <b>
              {
                text.split(/\s+/).filter((e) => {
                  return e.length !== 0;
                }).length
              }
            </b>{" "}
            words <b>{text.length}</b> Characters
          </p>
          <p>
            <b>
              {0.712 *
                text.split(/\s+/).filter((e) => {
                  return e.length !== 0;
                }).length}
            </b>{" "}
            Seconds to read this text.
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
