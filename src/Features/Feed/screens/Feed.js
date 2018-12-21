import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ImageSlider } from '../components/ImageSlider';
import { FeedCardItem } from '../components';
import TimerMixin from 'react-timer-mixin';



const data = []
const createData = () => {
    for (let i = 0; i < 10; i++) {
        data.push({ 'key': i })
    }
}


export default class Feed extends Component {
    constructor(props) {
        super(props)
        createData()
        // TimerMixin.setTimeout(() => {
        //     this._flatlist.scrollToEnd({ animate: true})
        // }, 2000)
    }
    _renderFeedItem({ item }) {
        return <FeedCardItem item={item} />
    }

    render() {
        return (
            <View>
                <FlatList
                    ref={(ref) => this._flatlist = ref}
                    data={data}
                    keyExtractor={(item) => item.key + ''}
                    renderItem={this._renderFeedItem}
                />
            </View>
        )
    }
}
