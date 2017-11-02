import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            phone: "",
            message: ""
        }
    }
    render() {
        const onBackFunc = () => {
            this.props.backFunc();
        }
        const onSendFunc = () => {
            this.props.sendFunc(this.state.email, this.state.phone, this.state.message);
        }
        return (
            <View style={styles.container}>
                <FormInput
                    style={styles.input}
                    editable={Boolean(this.props.edit)}
                    placeholder={this.props.data?String(this.props.data[0]):'Ваш E-mail'}
                    keyboardType={'email-address'}
                    onChangeText={(value) => this.setState({email: value})}/>
                <FormInput
                    style={styles.input}
                    editable={Boolean(this.props.edit)}
                    placeholder={this.props.data?String(this.props.data[1]):'Ваш номер телефона'}
                    keyboardType={'phone' ? 'phone-pad' : 'default'}
                    onChangeText={(value) => this.setState({phone: value})}/>
                <FormInput
                    style={styles.input}
                    editable={Boolean(this.props.edit)}
                    placeholder={this.props.data?String(this.props.data[2]):'Ваше сообщение'}
                    onChangeText={(value) => this.setState({message: value})}/>
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