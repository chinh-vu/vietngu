import React from "react";
import { connect } from "react-redux";

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}
export default connect((state, props) => {
    console.log('About .............................................')
    console.log(state)
    console.log(props)
    console.log('=======================================================')
    return {
        loggedIn: state.loggedIn
    }
})(About)
