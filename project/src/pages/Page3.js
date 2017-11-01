import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FormInfo from "./FormInfo";

export default class Page3 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                <Text style={styles.price}>{this.props.price}</Text>
                <View>
                    <FormInfo/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        color: '#333',
        width: 200,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        color: '#666',
        width: 200
    },
    price: {
        textAlign: 'center',
        marginTop: 10,
        color: '#999',
        width: 200
    },
});