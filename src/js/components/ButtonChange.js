import React from "react";

export default class ButtonChange extends React.Component {

    render() {
        //return <button className="btn btn-primary" onClick={e => this.props.clickHandler}>{this.props.buttonText}</button>
        return <button className="btn btn-primary" onClick={e => this.props.clickHandler()}>{this.props.buttonText}</button>
    }
};
