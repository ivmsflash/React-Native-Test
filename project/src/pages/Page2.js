import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem, Button, FormLabel, FormInput } from 'react-native-elements'
import Page3 from './Page3';

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
            showPage3: false,
            data: null
        }
    }
    render() {
        const onSelectItem = (itm) => {
            this.setState({data: itm, showPage3: true});
        };
        
        if (this.state.showPage3) {
            return (
                <Page3 />
            );
        }
        else
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