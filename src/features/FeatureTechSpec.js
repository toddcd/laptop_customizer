import React, { Component } from 'react';
import './FeatureTechSpec.css'
import Feature from "./Feature";

class FeatureTechSpec extends Component {

    render() {
        const features = Object.keys(this.props.features).map(featureName => {
                const feature = this.props.features[featureName]

                return <Feature key={Math.random()}
                                featureName={featureName}
                                feature={feature}
                                selected={this.props.selected}
                                updateFeature={(index, item) => this.props.updateFeature(index, item)}
                />
            });

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        );
    }
}

export default FeatureTechSpec;