import React, {Component} from "react";
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import { Input } from "antd";

import "../App.css";

// function About() {
class About extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
        this.submit = this.submit.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });

        console.log(picture)
    }

    submit() {
        console.log("Submit get clicked!!!")
        console.log(this.state.pictures)
    }

    render() {
        return (
            <div>
                <h1>React Images Upload Demo</h1>
                <form>
                <div
                    style={{ display: "flex",border: "1px solid red" }}>
                    <div style={{ marginRight: "15px" }}>
                        <ImageUploader
                            withIcon={false}
                            withPreview={true}
                            label=""
                            buttonText="Upload Images"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif", ".svg"]}
                            maxFileSize={1048576}
                            fileSizeError=" file size is too big"/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left",marginBottom: "10px"}}>
                            <label>Start Date</label>
                            <input type="date" />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left"}} >
                            <label>Start Date</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div>
                        <Input autoComplete="off" />
                    </div>
                    <div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.submit}>Submit</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
export default About
// export default connect((state, props) => {
//     console.log('About .............................................')
//     console.log(state)
//     console.log(props)
//     console.log('=======================================================')


//     return {
//         loggedIn: state.loggedIn
//     }
// })(About)
