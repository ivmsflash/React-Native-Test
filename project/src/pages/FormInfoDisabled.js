import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class FormInfoDisabled extends React.Component {
    render() {
        const onBackFunc = () => {
            Alert.alert("Назад!");
        }
        return (
            <View style={styles.container}>
                <FormInput style={styles.input} editable={false} placeholder={'Ваш E-mail'} keyboardType={'email-address'} />
                <FormInput style={styles.input} editable={false} placeholder={'Ваш номер телефона'} keyboardType={'phone' ? 'phone-pad' : 'default'}/>
                <FormInput style={styles.input} editable={false} placeholder={'Ваше сообщение'} />
                <View style={{ padding: 20}}>
                    <Button
                        raised
                        buttonStyle={styles.buttonBack}
                        textStyle={styles.buttonText}
                        title={`Назад`}
                        onPress={onBackFunc}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    button: {
        backgroundColor: '#00ccff'
    },
    buttonBack: {
        backgroundColor: '#ff3300'
    },
    buttonText: {
        textAlign: 'center'
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        marginBottom: 20
    }
});