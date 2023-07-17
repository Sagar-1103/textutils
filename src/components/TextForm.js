import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = ()=>{
  //  console.log("Uppercase was clicked " + text);
   let newText = text.toUpperCase();
   setText(newText); 
   props.showAlert("Converted to uppercase","success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change"); 
   setText(event.target.value);
   let word = event.target.value; 
   const words = ()=>{
    if (word.length === 0) {
      return 0;
    } else {
      word = word.replace(/(^\s*)|(\s*$)/gi,"");
      word = word.replace(/[ ]{2,}/gi," ");
      word = word.replace(/\n /,"\n");
      return word.split(' ').length; 
    }
   }
   setWordCount(words(word));
   }
   const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
   props.showAlert("Converted to lowercase","success");
   }
   const handleShortString = ()=>{
   const newText = text.slice(0,100);
    setText(newText);
   props.showAlert("Shortened to 100 characters","success");
  }
   const removeExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   props.showAlert("Extra spaces removed","success");
  }
   const handleClearClick = ()=>{
    setText("");
   props.showAlert("Text cleared","success");
  }
   const Vowels = () => {
    let count=0;
   for (const i of text) {
    if (i==="a"||i==="e"||i==="i"||i==="o"||i==="u"||i==="A"||i==="E"||i==="I"||i==="O"||i==="U") {
      count+=1;
    }
   }
   return count;
   }
  const [text,setText] = useState("");
  const [wordCount,setWordCount] = useState(0);

  return (
    <>
    <div className="container" style={{ color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter Text Here"
          style={{backgroundColor:props.mode==="dark"?"grey":"white" , color:props.mode==="dark"?"white":"black"}}
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleShortString}>Shorten to 100 words</button>
        <button className="btn btn-primary my-2 mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container my-2" style={{ color:props.mode==="dark"?"white":"black"}}>
      <h2>Your text summary</h2>
      <p>{wordCount} words and {text.length} characters {Vowels()} vowels</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
