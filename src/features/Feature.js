import React, {Component} from 'react';
import FeatureOption from "./FeatureOption";
import './Feature.css'

class Feature extends Component {

    render() {
        const options = this.props.feature.map((item, index) => {

            const selectedClass = item.name === this.props.selected[this.props.featureName].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;

            return <FeatureOption feature_id={this.props.featureName}
                                  key={Math.random()}
                                  item={item}
                                  selected={selectedClass}
                                  feature={featureClass}
                                  updateFeature={(index, item) => this.props.updateFeature(index, item)}
            />
        });

        return (

             <div className="feature" key={this.props.featureName}>
                <div className="feature__name">{this.props.featureName}</div>
                <ul className="feature__list">
                    { options }
                </ul>
            </div>
        )
    }
}

export default Feature;