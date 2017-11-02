import React from 'react';
import { Alert, StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem, Button, FormLabel, FormInput } from 'react-native-elements'
import Page3 from './Page3';
import Page4 from './Page4';

const list = [];
for(let i=1;i<=15;i++)
{
  list.push({
    title: "Элемент "+i,
    subtitle: "Краткое описание "+i,
    price: "$"+i
  });
};

export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPage2: true,
            showPage3: false,
            showPage4: false,
            data: null
        }
    }
    render() {
        const onSelectItem = (itm) => {
            this.setState({
                data: itm,
                showPage2: false,
                showPage3: true,
                showPage4: false
            });
        };

        const toPage2 = () => {
            this.setState({
                showPage2: true,
                showPage3: false,
                showPage4: false
            });
        };

        const toPage3 = () => {
            this.setState({
                showPage2: false,
                showPage3: true,
                showPage4: false
            });
        };

        const toPage4 = () => {
            this.setState({
                showPage2: false,
                showPage3: false,
                showPage4: true
            });
        };
        
        if (this.state.showPage3) {
            //global.Object(this.state.itm);
            //Alert.alert(global.Object());
            return (
                <Page3
                    title={this.state.data.title} 
                    subtitle={this.state.data.subtitle}
                    price={this.state.data.price}
                    toPage2={toPage2}
                    toPage4={toPage4} />
            );
        }
        else if (this.state.showPage4)
        {
            return (
                <Page4
                    title={this.state.data.title} 
                    toPage3={toPage3} />
            );
        }
        else if (this.state.showPage2)
        {
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});