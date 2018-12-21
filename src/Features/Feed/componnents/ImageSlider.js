import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'



const ImageSlider = ({ style, images }) => {

    const _renderItem = ({item}) => {
        <Avatar
            medium
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
        />
    }


    return (
        <View>
            <FlatList
hot

            />
        </View>
    )
}
export { ImageSlider }