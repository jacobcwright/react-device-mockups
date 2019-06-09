import * as React from 'react';

import Device from '../Device';

export type Props = {
    color: 'black' | 'white',
    buttonProps: React.HTMLProps<HTMLDivElement>,
    screenProps: React.HTMLProps<HTMLDivElement>,
    width?: number,
    height?: number
};

export default class GalaxyTab4 extends React.Component<Props> {
    render() {
        return (
            <Device color='black' { ...this.props } device='galaxyTab4' orientation='portrait'/>
        )
    }
}
