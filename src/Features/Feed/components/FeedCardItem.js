import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

const FeedCardItem = (props) => {
    return (
        <Card
            fontFamily='HelveticaNeue'
            title={`Title ${props.item.key}`}
            image={{ uri: "https://firebasestorage.googleapis.com/v0/b/dylan-aa036.appspot.com/o/dylan.jpg?alt=media&token=3f489fb8-7c1c-46ab-b569-afe6e7995a4b" }}>
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Icon
                 raised
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />
            <Button
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

const styles = StyleSheet.create({})

export { FeedCardItem }
