import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { List, ListItem, Button, FormLabel, FormInput } from 'react-native-elements'

const list = [];
for(let i=1;i<=15;i++)
{
  list.push({
    title: "Элемент "+i,
    subtitle: "Краткое описание "+i,
    price: "$"+i
  });
};

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
      let pic = {
        uri: 'https://avatars1.githubusercontent.com/u/9402725?s=400&u=32892caa0c777b48247e5156883ba92bf4f938f4&v=4'
      };
      return (
        <View style={styles.container}>
          <Image source={pic} style={{width: 100, height: 100, alignItems: 'center'}}/>
        </View>
      );
    }
    else
    {
      return (
        <Page2/>
      );
    }
  }
}

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage3: false,
      data: null
    }
  }
  render() {
    const onSelectItem = (itm) => {
      this.state.showPage3 = true;
      this.state.data = itm;
    };

    if (this.state.showPage3) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <Page3 />
        </View>
      );
    }

    return (
      <ScrollView>
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l, i) => (
              <ListItem
                title={l.title}
                key={i}
                subtitle={l.subtitle}
                rightTitle={l.price}
                onPress={() => {onSelectItem(l)}}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

class Page3 extends React.Component {
  render() {
    return (
      <View>
        <FormLabel>Ваш E-mail</FormLabel>
        <FormInput/>
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
  }
});
