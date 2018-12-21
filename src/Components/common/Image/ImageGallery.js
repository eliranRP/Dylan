import React from 'react';
import { FlatList, View } from 'react-native';
import { Avatar } from 'react-native-elements'


const data = []
const createData = () => {
    for (let i = 0; i < 15; i++) {
        data.push({ 'key': i })
    }
}

const ImageGallery = (props) => {
    createData()
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.image}>
                <Avatar
                    height={110}
                    width={110}
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                numColumns={3}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={_renderItem}

            />
        </View>
    );
}


const styles = {
    container: {
        padding: 20
    },
    image: {
        marginRight: 5,
        backgroundColor: 'black',
    }

}
export { ImageGallery }

