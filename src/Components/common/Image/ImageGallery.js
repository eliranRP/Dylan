import React from 'react';
import ImageBrowser from 'react-native-interactive-image-gallery'


const data = []
const createData = () => {
    for (let i = 0; i < 100; i++) {
        data.push({ 'key': i })
    }
}

class ImageGallery extends React.PureComponent {

    constructor(props) {
        super(props)
        createData()
    }

    _getItem(index) {
        if (index  == 2) {
            return {
                URI: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",
                thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
                id: String(index),
                title: 'Title',
                description: 'This is a description'
            }
        }
        else if (index % 3 == 0) {
            return {
                URI: "https://i1.wp.com/www.wagpets.com/wp-content/uploads/2017/12/gold-golden-retriever.jpeg?fit=1920%2C1080&ssl=1",
                thumbnail: 'https://i1.wp.com/www.wagpets.com/wp-content/uploads/2017/12/gold-golden-retriever.jpeg?fit=1920%2C1080&ssl=1',
                id: String(index),
                title: 'Title',
                description: 'This is a description'
            }
        } 
        else if (index % 4 == 0) {
            return {
                URI: "https://vetstreet-brightspot.s3.amazonaws.com/51/3d/7a22f69c46f587a6730c36b2c2b1/golden-retriever-ap-zfje1k-645.jpg",
                thumbnail: 'https://vetstreet-brightspot.s3.amazonaws.com/51/3d/7a22f69c46f587a6730c36b2c2b1/golden-retriever-ap-zfje1k-645.jpg',
                id: String(index),
                title: 'Title',
                description: 'This is a description'
            }
        } 
        else {
            return {
                URI: "https://firebasestorage.googleapis.com/v0/b/dylan-aa036.appspot.com/o/dylan.jpg?alt=media&token=3f489fb8-7c1c-46ab-b569-afe6e7995a4b",
                thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dylan-aa036.appspot.com/o/dylan.jpg?alt=media&token=3f489fb8-7c1c-46ab-b569-afe6e7995a4b',
                id: String(index),
                title: 'Title',
                description: 'This is a description'
            }
        }


    }

    render() {
        const imageURLs = data.map(
            (img, index) => (
                this._getItem(index)
            )
        )
        return <ImageBrowser style={{ backgroundColor: 'red' }} images={imageURLs} />

    }
}
export { ImageGallery }

