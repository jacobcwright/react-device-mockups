import * as React from 'react';

import Device from '../Device';

export type Props = {
    orientation: 'portrait' | 'landscape',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class HuaweiP8 extends React.Component<Props> {
    render() {
        return (
            <Device orientation='portrait' { ...this.props } device='HuaweiP8' color='gold'/>
        )
    }
}
