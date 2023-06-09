import React from 'react'

export default function Aboutus(props) {
  //const [myStyle, setMyStyle] = useState({
  //  color: 'black',
  //  backgroundColor: 'white'
  //})

  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
  }
 

  return (
    <div className='container' style={{ color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze  your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              TextModifier gives you a way to analyze your text quickly and efficiently.Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
              <div className="accordion-body">
              TextModifier is a free character counter tool that provides instant character count and word count statistics for a given text. TextModifier reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
            This word counter software works in any web browsers such as chrome,Firefox,Internet,Explorer,Safari,Opera.It suits to count character in facebook,blog,books exel documents,pdf documents,essay, etc.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
