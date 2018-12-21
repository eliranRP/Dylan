import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ImageGallery } from '../../../Components/common/Image/ImageGallery';

export default class Gallery extends Component {

    render() {
        return (
            <View>
                <ImageGallery />
            </View>
        );
    }
}
