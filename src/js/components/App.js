import React from "react";
import Counter from "./Counter";
import ButtonChange from "./ButtonChange";

export default class App extends React.Component {
    constructor() {
        super();
        // The State
        this.state = {
           count: 0,
        };
    }

    /**
     * This will set the countery
     * @param {string} direction 'ACS or DEC'
     */
    toggleCounter(direction) {
        // Get the current count.
        let count = this.state.count;

        if (direction==='ACS') {
            // Add
            count+=1;

        } else if (direction==='DEC') {
            // Subtract
            count-=1;
        }

        // Update the count in the state
        this.setState({count});
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                        <Counter countValue={this.state.count}/>
                    </div>
                    <div class="col-sm-4">
                        <ButtonChange clickHandler={this.toggleCounter.bind(this, 'ACS')} buttonText="ADD" />
                        <ButtonChange clickHandler={this.toggleCounter.bind(this, 'DEC')} buttonText="DEC" />
                    </div>
                    <div class="col-sm-6">
                    </div>

                </div>
            </div>);
    }
};
