import React from 'react'
import { View } from 'react-native'

const Col = ({ children, style }) => {

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'column',
        position: 'relative',
    }
}

export { Col }
