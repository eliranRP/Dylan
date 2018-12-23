import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { FeedCardItem } from '../components';
import { Footer } from '../../../Components/common';
import { Icon } from 'react-native-elements';
import Colors from '../../../res/values/colors'
import { connect } from 'react-redux';
import { addPost } from '../actions/FeedActions'



const data = []
const createData = () => {
    for (let i = 0; i < 10; i++) {
        data.push({ 'key': i })
    }
}


class Feed extends Component {


    constructor(props) {
        super(props)
        createData()
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
                <Footer>
                    <TouchableOpacity
                        onPress={this.props.addPost}
                    >
                        <Icon
                            size={35}
                            raised
                            reverse
                            name='plus'
                            type='feather'
                            color={Colors.colorPrimary} />
                    </TouchableOpacity>
                </Footer>
            </View>
        )
    }
}
const mapStateToProps = ({ feed }) => {
    const { posts } = feed;

    return { posts };
};

export default connect(mapStateToProps, { addPost })(Feed);