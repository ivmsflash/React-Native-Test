import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { List, ListItem, Button, FormLabel, FormInput } from 'react-native-elements'
import Page1 from "./src/pages/Page1";
import Page2 from "./src/pages/Page2";


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
    if (!this.state)
    {
      return (
        <Page1/>
      );
    }
    else
    {
      return (
        <Page2/>
        //<Page4 title="Порлорплорплорп"/>
        //<Page3 title="Порлорплорплорп" subtitle="Порлорплор" price="$11"/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
