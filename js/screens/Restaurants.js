
import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, TouchableHighlight, ListView } from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Restaurants extends React.Component {


	goToProfile = () => {
		console.log('hi');
	}

	goToHome = () => {
		this.props.navigation.navigate('Home');
		console.log('hi');
	}

	goToWine = () => {
		console.log('hi');
	}

	goToGifts = () => {
		console.log('hi');
	}

	render() {
        let dataArray = [
            {
                id: 1,
                name: 'French Laundry',
                recommended: 97,
                type: 'American Cusine',
                distance: 14.1,
                address: 'Tustin, CA 92618',
                image: ''
            },
            {
                id: 2,
                name: 'Nobo Nobo',
                recommended: 94,
                type: 'Japanese Cusine',
                distance: 11.2,
                address: 'Tustin, CA 92618',
                image: ''
            },{
                id: 3,
                name: 'Corleone',
                recommended: 87,
                type: 'Italian Cusine',
                distance: 7.2,
                address: 'Irvine, CA 92620',
                image: ''
            },{
                id: 4,
                name: 'Vertana\'s',
                recommended: 82,
                type: 'Italian Cusine',
                distance: 6.7,
                address: 'Irvine, CA 92618',
                image: ''
            }
        ];
        this.state = { dataSource: ds.cloneWithRows(dataArray)};
		return (
			<ScrollView style={styles.container}>
				<View style={styles.avatarContainer}>
                    <Text>Restaurants</Text>
                    <TouchableHighlight onPress={this.goToHome}>
                        <Text>Back</Text>
                    </TouchableHighlight>
				</View>
				<View style={styles.topNav}>
                    <TextInput style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}></TextInput>
				</View>
				<View>
                    <ListView dataSource={this.state.dataSource}
                              renderRow={
                                  (rowData) => 
                                    <View style={styles.restaurantListItem}>
                                        <View style={styles.restaurantListColumnContainer}>
                                            <Text>{rowData.name}</Text>
                                            <Text>{rowData.recommended}% Recommended</Text>
                                            <Text>{rowData.type}</Text>
                                            <Text>{rowData.distance}</Text>
                                            <Text>{rowData.address}</Text>
                                        </View>
                                    </View>
                              }
                    />
				</View>

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	marginTop: 20,
  	paddingLeft: 20,
  	paddingRight: 20
  },
  avatarContainer: {
	alignItems: 'center'
  },
  avatarImage: {
  	width: 100,
  	height:100
  },
  topNav: {
  	marginTop: 20,
  	flexDirection: 'row',
  	paddingBottom: 20,
  	borderBottomWidth: 2,
  },
  topNavButton: {
  	width: 111,
  	height: 100
  },
  jumbotron: {
  	marginTop: 20,
  	marginLeft: -20
  },
  subTitle: {
  	alignItems: 'flex-start'
  },
  subTitleText: {
  	textAlign: 'left',
  	color: '#848484',
  	fontSize: 16,
  	fontWeight: 'bold',
  	marginTop:20
  },
  restaurantListItem: {
    paddingBottom: 20,
    borderBottomWidth: 1
  },
  restaurantListItemContainer: {
      flexDirection: 'row'
  }

});