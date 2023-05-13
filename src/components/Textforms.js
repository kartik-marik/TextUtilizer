import React, {useState} from 'react'

export default function Textforms(props) {
  const hanldeUpClick = ()=>{
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success")
  }

  const hanldeLoClick = ()=>{
    //console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to Lowercase!","success")

  }

  const hanldeClearClick = ()=>{
    //console.log("uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("text cleared!","success")

  }

  const handleCopy =() => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!","success")

  }
  const handleOnChange = (event)=>{
    //console.log("onchange");
    setText(event.target.value)
  }

  const handleExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success")

  }
  
  const [text, setText] = useState('');
  
  return (
      <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color: props.mode ==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hanldeUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hanldeLoClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hanldeClearClick} >Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >remove extra spaces</button>


        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
          <h2>Your text summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcaters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </>
  )
}
