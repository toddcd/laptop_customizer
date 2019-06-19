import React, { Component } from 'react';
import './Summary.css'
import SummaryTotal from "./SummaryTotal";
import SummaryOption from "./SummaryOption";

class Summary extends Component {

    render() {
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                <SummaryOption selected={this.props.selected} />
                <SummaryTotal selected={this.props.selected} />
            </section>
        );
    }
}

export default Summary;