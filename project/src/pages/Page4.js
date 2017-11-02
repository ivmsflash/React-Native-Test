import React from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import FormInfoDisabled from "./form/FormInfo";

export default class Page4 extends React.Component {
    render() {
        //Alert.alert(this.props.title);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View>
                    <FormInfo edit="false"/>
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
});