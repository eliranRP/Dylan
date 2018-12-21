import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'


const data = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }]
const ImageSlider = ({ style, images }) => {

    const _renderItem = ({ item }) => {
        return (
            <View style={styles.image}>
                <Avatar
                    xlarge
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>
        )
    }


    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.key}
            renderItem={_renderItem}
        />
    )
}

const styles = {
    image: {
        marginRight: 5
    }
}
export { ImageSlider }