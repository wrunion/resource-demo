import React from 'react';

const Form = () => {
  return (
    <div className="Form ui container segment">
      {/* <h3>Request for resources</h3>
      <p>Enter the anonymous demographic data for your client:</p> */}

      {/* <p><em>All questions are optional, but the more information you provide, the more accurate your resource recommendations can be</em></p> */}
    <form className="ui form">
      <h3>The person looking for resources: </h3>
      <p><em>Note: All questions are optional</em></p>
      <div className="inline fields">
      <div className="field">
        <label>Lives in: </label>
        <input type="text" placeholder="City" />
      </div>
      <div>- OR -</div>
      <div className="field">
        <input type="text" placeholder="Zip Code" />
      </div>
    </div>

      <label>Zipcode:     
        <div className="ui input">
        <input type="text" />
      </div></label><br />
      <label>Zipcode:    
        <div className="ui input">
        <input type="text" />
      </div></label><br />    <label>Zipcode:    
        <div className="ui input">
        <input type="text" />
      </div></label><br />    <label>Zipcode:    
        <div className="ui input">
        <input type="text" />
      </div></label><br />    <label>Zipcode:    
        <div className="ui input">
        <input type="text" />
      </div></label><br />

      {/* Other input options here */}
      Contact Email: <div className="ui input">
        <input type="email" placeholder="Email" />
      </div><br />

      <button className="ui button">Submit</button>
    </form>

    <p className="FormFooter">Disclaimer: The information you submit is private, and will not be shared outside of our resource team. However, as this is an email exchange, HIPPA-compliant security measures are not feasible. As such, please only provide information that you are ethically able to share over email, due to your own HIPPA standards.</p>
    </div>
  )
};

export default Form;