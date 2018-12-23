import React from 'react';
import { Row } from './Row';

const Footer = ({ style, children }) => (
    <Row style={[styles.footer, style]} pointerEvents='none'>
        {children}
    </Row>
);
const styles = {
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'space-between',
        marginBottom: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
}
export { Footer };
