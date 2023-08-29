import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Alert, Text, View, useWindowDimensions } from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const inputcheck = Variables => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (userId == '') {
      Alert.alert(
        '错误',
        '请输入账号',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return false;
    } else if (password == '') {
      Alert.alert(
        '错误',
        '请输入密码',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return false;
    }
    return true;
  };

  const { theme } = props;
  const { navigation } = props;

  const [name, setName] = React.useState('管理员');
  const [password, setPassword] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [userId, setUserId] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { alignItems: 'center', justifyContent: 'center' },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* InfoBox */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgb(202, 236, 213)',
            borderRadius: 10,
            padding: 20,
            width: '70%',
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'Aldrich_400Regular',
              fontSize: 35,
              marginBottom: 20,
            }),
            dimensions.width
          )}
        >
          {'Welcome'}
        </Text>
        {/* userId */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10,
              marginRight: 10,
            },
            dimensions.width
          )}
        >
          <Icon name={'AntDesign/user'} size={24} />
          {/* userId */}
          <TextInput
            onChangeText={newUserIdValue => {
              const textInputValue = newUserIdValue;
              try {
                setUserId(newUserIdValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderColor: 'rgb(16, 0, 0)',
                  borderWidth: 1,
                  marginLeft: 10,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            value={userId}
            placeholder={'Please enter UID'}
            autoCapitalize={'none'}
            changeTextDelay={500}
          />
        </View>
        {/* passWord */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          <Icon name={'AntDesign/key'} size={24} />
          {/* passWord */}
          <TextInput
            onChangeText={newPassWordValue => {
              const textInputValue = newPassWordValue;
              try {
                setPassword(newPassWordValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderColor: 'rgb(0, 0, 10)',
                  borderWidth: 1,
                  marginLeft: 10,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            value={password}
            placeholder={'Please enter keyword'}
            autoCapitalize={'none'}
            changeTextDelay={500}
            secureTextEntry={true}
          />
        </View>
        <Button
          onPress={() => {
            try {
              const checkFlag = inputcheck(Variables);
              if (checkFlag === false) {
                return;
              }
              navigation.navigate('MainScreen', { name: name });
              console.log(name);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              marginBottom: 25,
              marginTop: 20,
              width: '40%',
            }),
            dimensions.width
          )}
          title={'LOG IN'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
