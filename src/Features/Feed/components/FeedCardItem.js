import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card, Button } from 'react-native-elements'

const FeedCardItem = (props) => {
    return (
        <Card
            fontFamily='HelveticaNeue'
            title={`Title ${props.item.key}`}
            image={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}>
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            
            <Button
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

const styles = StyleSheet.create({})

export { FeedCardItem }
