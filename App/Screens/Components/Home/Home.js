import React, {useContext} from 'react';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Home = (props) => {
  const {appTheme} = useContext(AppContext);

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
        <CustomText xlarge style={{color: appTheme.text}}>
          Home Page
        </CustomText>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
});
export default Home;
