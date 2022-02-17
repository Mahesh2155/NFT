import React, {useContext, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import LineGraph from '@chartiful/react-native-line-graph';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import SearchBar from 'react-native-dynamic-search-bar';

const Search = (props) => {
  const {appTheme} = useContext(AppContext);
  const [spinnerVisibility, setspinnerVisibility] = useState(false);

  const [list2, setList2] = useState([]);
  useEffect(() => {
    setList2(list);
  }, []);

  const filterList = (text) => {
    if (text === '') {
      setspinnerVisibility(false);
      setList2(list);
    } else {
      setspinnerVisibility(true);
      setList2(list2.filter((item) => item.name.includes(text)));
    }
  };

  const list = [
    {
      name: 'Bitcoin',
      shortName: 'BTC',
      value: '$ 4081,95',
      change: '+ 1,48 ↑',
      fillColor: 'rgba(163, 224, 97, 0.2)',
      strokeColor: 'rgba(163, 224, 97, 1.0)',
      image: require('../../../assets/BitConnect.png'),
    },
    {
      name: 'Ethereum',
      shortName: 'ETH',
      value: '$ 141.39',
      change: '+ 0,59 ↓',
      fillColor: 'rgba(234, 53, 53, 0.2)',
      strokeColor: 'rgba(234, 53, 53, 1.0)',
      image: require('../../../assets/Ethereum.png'),
    },
    {
      name: 'Litecoin',
      shortName: 'BCH',
      value: '$ 1535.39',
      change: '+ 1,51 ↓',
      fillColor: 'rgba(234, 53, 53, 0.2)',
      strokeColor: 'rgba(234, 53, 53, 1.0)',
      image: require('../../../assets/Litecoin.png'),
    },
    {
      name: 'Ripple',
      shortName: 'XRP',
      value: '$ 4081,95',
      change: '+ 1,48 ↑',
      fillColor: 'rgba(163, 224, 97, 0.2)',
      strokeColor: 'rgba(163, 224, 97, 1.0)',
      image: require('../../../assets/Ripple.png'),
    },
    {
      name: 'Dash',
      shortName: 'DSH',
      value: '$ 141.39',
      change: '+ 0,59 ↓',
      fillColor: 'rgba(234, 53, 53, 0.2)',
      strokeColor: 'rgba(234, 53, 53, 1.0)',
      image: require('../../../assets/Dash.png'),
    },
    {
      name: 'Iota',
      shortName: 'MIOTA',
      value: '$ 141.39',
      change: '+ 0,59 ↓',
      fillColor: 'rgba(234, 53, 53, 0.2)',
      strokeColor: 'rgba(234, 53, 53, 1.0)',
      image: require('../../../assets/IOTA.png'),
    },
    {
      name: 'Eos',
      shortName: 'EOS',
      value: '$ 4081,95',
      change: '+ 1,48 ↑',
      fillColor: 'rgba(163, 224, 97, 0.2)',
      strokeColor: 'rgba(163, 224, 97, 1.0)',
      image: require('../../../assets/EOS.png'),
    },
    {
      name: 'Neo',
      shortName: 'NEO',
      value: '$ 141.39',
      change: '+ 0,59 ↓',
      fillColor: 'rgba(234, 53, 53, 0.2)',
      strokeColor: 'rgba(234, 53, 53, 1.0)',
      image: require('../../../assets/Netko-coin.png'),
    },
  ];

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <ImageBackground
        source={require('../../../../Images/appscreen.jpg')}
        style={styles.background}>
        <CustomText xlarge style={{color: appTheme.text}}></CustomText>

        <View style={styles.SafeAreaViewContent}>
          <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            placeholder="Search here"
            onChangeText={(text) => filterList(text)}
            spinnerVisibility={spinnerVisibility}
            onClearPress={() => filterList('')}
          />

          <FlatList
            style={styles.card}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            showsHorizontalScrollIndicator={false}
            data={list2}
            vertical
            // horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.viewStyle}>
                  <Image
                    source={item.image}
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: '#8cbed6',
                    }}
                  />
                  <View style={styles.startStyle}>
                    <Text style={styles.textStyle}> {item.name} </Text>
                    <Text style={styles.textStyle}> {item.shortName} </Text>
                  </View>
                  <View style={styles.changeStyle}>
                    <Text style={styles.textStyle}> {item.value} </Text>
                    <Text style={styles.textStyle}> {item.change} </Text>
                  </View>
                  <View style={styles.lineGraphStyle}>
                    <LineGraph
                      data={[10, 15, 7, 20, 14, 12, 10, 20]}
                      width={120}
                      height={100}
                      isBezier
                      // hasShadow
                      baseConfig={{
                        startAtZero: false,
                        hasXAxisBackgroundLines: false,
                        hasXAxisLabels: false,
                        hasYAxisLabels: false,
                      }}
                      style={{
                        marginTop: -10,
                        paddingTop: 10,
                        // lineColor: '#008000',
                        // dotColor: '#8cbed6',
                      }}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  SafeAreaViewContent: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  card: {
    textAlign: 'center',
    marginBottom: 10,
    padding: 10,
  },
  viewStyle: {
    backgroundColor: '#8cbed6',
    marginBottom: 10,
    padding: 8,
    overflow: 'hidden',
    borderRadius: 12,
    alignItems: 'center',

    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  changeStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  startStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default Search;
