import React from 'react';

const Form = () => {
  return (
    <div className="Form ui container segment">
      <h3>Request for resources</h3>
      <p>Enter the anonymous demographic data for your client:</p>
      <p><em>All questions are optional</em></p>
    <form>
      {/* Other input options here */}
      Your email: <div className="ui input">
        <input type="email" />
      </div><br />

      <button className="ui button">Submit</button>
    </form>

    <p className="FormFooter">Disclaimer: The information you submit is private, and will not be shared outside of our resource team. However, as this is an email exchange, HIPPA-compliant security measures are not feasible. As such, please only provide information that you are ethically able to share over email, due to your own HIPPA standards.</p>
    </div>
  )
};

export default Form;