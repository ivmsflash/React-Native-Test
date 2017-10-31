import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import TimerMixin from 'react-timer-mixin';

export default class App extends React.Component {
  componentDidMount() {
    this.state = {
      page2: false
    };
    setTimeout(() => {
        this.setState({ page2: true});
    }, 5000);
  }

  render() {
    if (!this.state){
      return (
        <View style={styles.container}>
          <Page1/>
        </View>
      );
    }else{
      return (
        <View style={styles.page2}>
          <Page2/>
        </View>
      );
    }
  }
}

class Page1 extends React.Component {
  render() {
    let pic = {
      uri: 'https://avatars1.githubusercontent.com/u/9402725?s=400&u=32892caa0c777b48247e5156883ba92bf4f938f4&v=4'
    };
    return (
      <Image source={pic} style={{width: 100, height: 100, alignItems: 'center'}}/>
    );
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <View>
        <Page2Item title="Заголовок 1" subtitle="Подзаголовок 1" price="1$"/>
        <Page2Item title="Заголовок 2" subtitle="Подзаголовок 2" price="1$"/>
        <Page2Item title="Заголовок 3" subtitle="Подзаголовок 3" price="1$"/>
      </View>
    );
  }
}

class Page2Item extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.page2itemTitle}>{this.props.title}</Text>
        <Text style={styles.page2itemSubTitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

class Page3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  page2itemTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  page2itemSubTitle: {
    color: 'red',
    fontSize: 20,
  },
});
