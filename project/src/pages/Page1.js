import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Page1 extends React.Component {
    render() {
        //let pic = {
        //    uri: '../../images/logo.png'
        //};
        return (
            <View style={styles.container}>
                <Image source={require('../../images/logo.png')} style={{width: 100, height: 100, alignItems: 'center'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});