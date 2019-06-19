import React, {Component} from 'react';
import './FeatureOption.css'

class FeatureOption extends Component {

    render() {

        return (
            <li key={this.props.feature_id} className="feature__item">
                <div className={this.props.feature}

                     onClick={e => this.props.updateFeature(this.props.feature_id, this.props.item)}>
                    {this.props.item.name}
                    ({new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
                    .format(this.props.item.cost)})
                </div>
            </li>
        )
    }
}

export default FeatureOption;