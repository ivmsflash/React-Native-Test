import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            back: false
        }
    }
    render() {
        const onBackFunc = () => {
            Alert.alert(this.props.page3);
            
        }
        const onSendFunc = () => {
            Alert.alert("Отправить!");
        }
        return (
            <View style={styles.container}>
                <FormInput style={styles.input} editable={Boolean(this.props.edit)} placeholder={'Ваш E-mail'} keyboardType={'email-address'} />
                <FormInput style={styles.input} editable={Boolean(this.props.edit)} placeholder={'Ваш номер телефона'} keyboardType={'phone' ? 'phone-pad' : 'default'}/>
                <FormInput style={styles.input} editable={Boolean(this.props.edit)} placeholder={'Ваше сообщение'} />
                {this.props.edit &&
                    <View style={{ padding: 20}}>
                        <Button
                            raised
                            buttonStyle={styles.button}
                            textStyle={styles.buttonText}
                            title={`Отправить`}
                            onPress={onSendFunc}
                        />
                    </View>
                }
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