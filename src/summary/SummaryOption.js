import React, {Component} from 'react';
import './SummaryOption.css'

class SummaryOption extends Component {

    render() {
        const summaryOption = Object.keys(this.props.selected)
            .map(key => <div className="summary__option" key={key}>
                <div className="summary__option__label">{key}  </div>
                <div className="summary__option__value">{this.props.selected[key].name}</div>
                <div className="summary__option__cost">
                    {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
                        .format(this.props.selected[key].cost)}
                </div>
            </div>)

        return (
            <div>
                {summaryOption}
            </div>
        );
    }
}

export default SummaryOption;