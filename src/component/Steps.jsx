import React from 'react'

const Steps = ({steps}) => {
 {/*const steps = [
    {
      icon: inboxIcon1,
      title: "Select Car",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
    {
      icon: inboxIcon2,
      title: "Contact Operator",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
    {
      icon: inboxIcon3,
      title: "Let's Drive",
      text: "To contribute to positive change and achieve our sustainability goals with many extraordinary",
    },
];*/}
  return (
    <>
     <section className="how-container">
        <h4>How It Works</h4>
        <h2>Quick & easy car rental</h2>
  
          <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-icon">
                <img src={step.icon} alt={step.icon.name} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section> 
    </>
  )
}

export default Steps