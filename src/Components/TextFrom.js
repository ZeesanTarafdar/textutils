import React, {useState} from 'react';  


export default function TextFrom(props) {
    const handelUpClick = ()=>{
        console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase ✅", "success")
    } 
    const handelLowClick = ()=>{
        console.log("Lowercase was clicked " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase ✅", "success")
    }
    const handelClearClick = ()=>{
        console.log("Clear was clicked " + text);
        let newtext = ' ';
        setText(newtext);
        props.showAlert("Your text is Clear ✅", "success")
    }
    const handelCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text is Copy to Clipboard ✅", "success")
    }
    const handelExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extara-Spaces are alse Removed ✅", "success")
    }
    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text , setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10"  value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} placeholder="Enter Your Text"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handelExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-primary mx-2" onClick={handelCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handelClearClick} >Clear Text</button>
 </div>
 <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read </p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Somethings in this Above to Preview it here"}</p>
 </div>
 </>
  )
}
