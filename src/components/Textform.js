import React ,{useState} from 'react'
//import  propTypes from 'prop-types'


export default function Textform(props) {

  
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase","Succes");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","Succes");
    }

    const hanleOnclear=()=>{
        let newText=" ";
        setText(newText);
        props.showAlert("text is cleared","Succes");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }


    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
   
 
  
    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
           
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={hanleOnclear}>clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>copy</button>
            </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
    </>
  )
}
