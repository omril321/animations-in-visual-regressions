import React, {Component} from 'react';
import "./AnimatedComponent.css";

class AnimatedComponent extends Component {
    render() {
        const classname = this.props.speed === 'slow' ? 'slow' : 'fast';

        return <div className={'animated ' + classname}>-----   Bouncy  -----</div>
    }
}

export default AnimatedComponent;