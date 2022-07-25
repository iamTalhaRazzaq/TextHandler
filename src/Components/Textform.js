import React , {useState}from "react";

export default function Textform(props) {  
  const handleUpperCaseClick =()=>{
    let temp = text.toUpperCase();
    setText(temp);
  }
  const handleClearClick =()=>{
    let temp = '';
    setText(temp);
  }
  const handleLowerCaseClick =()=>{
    let temp = text.toLowerCase();
    setText(temp);
  }
  const handleCaptEachLetterClick =()=>{
    const cap = text.split(" ");
    let str = "";
    cap.forEach((element) => {
      str += element.replace( element.charAt(0), element.charAt(0).toUpperCase()) + " ";
      setText(str);
    });
  setText(str);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }
  const handleSentenceSpaces = ()=>{
    setText(text.split('').reverse().join(''));
    }
    const onRemoveDuplicatesClick = (e) => {
      let newText = text.split(' ').filter(function(item,i,allItems){
          return i === allItems.indexOf(item);
      }).join(' ');

      setText(newText)
  }
  
  

  const handleOnChange =(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  return (
    <>
      <div className="container">
        <h1>{props.Boxheading}</h1>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} id="TextBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick} >Conver to Uppercase</button>
        <button className="mx-3 btn btn-dark" onClick={handleLowerCaseClick} >Conver to Lowercase</button>
        <button className=" btn btn-secondary" onClick={handleClearClick} >Clear Text</button>
        <button className="mx-3 btn btn-info" onClick={handleCaptEachLetterClick} >Capitalized Case</button>
        <button className=" btn btn-success" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        <button className="mx-3 btn btn-warning" onClick={handleSentenceSpaces} >Reverse Text</button>
        <button className="mx-3 btn btn-danger" onClick={onRemoveDuplicatesClick} >Remove Duplicate</button>
      </div>
      <div className="container my-3">
        <h2>Summary</h2>
        <p><b>{text.split(" ").length}</b> words <b>{text.length}</b> Characters</p>
        <p><b>{0.008*text.split(" ").length}</b> minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
