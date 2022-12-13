import React from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState(
  //   {
  //     color: "black",
  //     backgroundColor: 'white'
  //   }
  // )

  // const [btntext, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle(
  //       {
  //         color: "white",
  //         backgroundColor: 'black'
  //       }
  //     )
  //     setBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: 'white'

  //     })
  //     setBtnText("Enable Dark  Mode")

  //   }

  // }

  let myStyle = {
    color: props.mode === "dark" ? "white" : '#042743',
    backgroundColor: props.mode === "dark" ? 'rgb(36 74 104)' : 'white',
  }

  return (
    <div className='container' style={{ color: props.mode === "dark" ? "white" : '#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
              It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browser Compatibilty</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={myStyle}>
              It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the  though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
