import React, {useContext} from 'react';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import {CustomText} from '../../CommonComponent';
import {ButtonComponent} from '../../SubComponents';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Users = (props) => {
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
        <CustomText xlarge style={{color: appTheme.text, marginVertical: 10}}>
          Button Component
        </CustomText>

        {/* <ButtonComponent title={'Button'} />

        <ButtonComponent title={'Button'} isProcessing />

        <ButtonComponent
          title={'Border Button'}
          border={appTheme.themeColor}
          textColor={appTheme.themeColor}
          backColor={appTheme.background}
        />
        <ButtonComponent
          title={'Danger Button'}
          border={appTheme.red}
          textColor={appTheme.red}
          backColor={appTheme.background}
          style={{borderRadius: 0}}
        />
        <ButtonComponent
          title={'Disabled Button'}
          border={appTheme.lightText}
          textColor={appTheme.lightText}
          backColor={appTheme.background}
        />
        <ButtonComponent title={'Rounded Button'} style={{borderRadius: 40}} /> */}
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

export default Users;
