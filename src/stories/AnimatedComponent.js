import { storiesOf } from '@storybook/react';
import React from "react";
import AnimatedComponent from "../AnimatedComponent";

storiesOf('AnimatedComponent', module)
    .add('slow', () => <AnimatedComponent speed={'slow'}/>)
    .add('fast', () => <AnimatedComponent speed={'fast'}/>);
