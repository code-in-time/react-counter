import React from "react";

export default class Counter extends React.Component {

    render() {
        return <div className="well">{this.props.countValue}</div>
    }
};
