import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Alert,
  Image,
  Platform,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const HomeScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const logoutcheck = async (Variables, setGlobalVariableValue, isLogout) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if (Platform.OS == 'ios' || Platform.OS == 'android') {
      Alert.alert('提示', '确认登出？', [
        {
          text: '是',
          onPress: await function () {
            isLogout = true;
          },
        },
        {
          text: '否',
        },
      ]);
    } else {
      return confirm('确认登出？');
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const [isLogout, setIsLogout] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { marginLeft: 5, marginRight: 5 },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* Tittle Area */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'rgb(202, 236, 213)',
            flexDirection: 'row',
            height: 40,
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingRight: 5,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Tittle Box */}
        <View
          style={StyleSheet.applyWidth(
            { borderColor: theme.colors['Strong'] },
            dimensions.width
          )}
        >
          {/* txtTittle */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'auto',
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '700',
              }),
              dimensions.width
            )}
            ellipsizeMode={'head'}
          >
            {'欢迎登入系统！'}
          </Text>
        </View>
        {/* UserInfo Box */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
            dimensions.width
          )}
        >
          <Icon
            style={StyleSheet.applyWidth(
              { marginLeft: 10, marginRight: 5 },
              dimensions.width
            )}
            color={theme.colors['Primary']}
            name={'Entypo/user'}
            size={18}
          />
          {/* txtUserName */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'flex-end',
                fontSize: 16,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {props.route?.params?.name ?? 'XXXX'}
          </Text>
          {/* btnLogout */}
          <IconButton
            onPress={() => {
              const handler = async () => {
                try {
                  await logoutcheck(
                    Variables,
                    setGlobalVariableValue,
                    isLogout
                  );
                  if (isLogout === true) {
                    navigation.navigate('LoginScreen');
                  }
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            icon={'MaterialIcons/logout'}
            size={24}
          />
        </View>
      </View>
      <Divider
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            marginBottom: 10,
            marginTop: 10,
          }),
          dimensions.width
        )}
        color={theme.colors.divider}
      />
      {/* Main Area */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['home'], {
            alignContent: 'space-between',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }),
          dimensions.width
        )}
      >
        {/* ImgToto */}
        <Image
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: 200,
              position: 'relative',
              right: 85,
              width: [
                { minWidth: Breakpoints.Mobile, value: 200 },
                { minWidth: Breakpoints.BigScreen, value: 200 },
              ],
            }),
            dimensions.width
          )}
          resizeMode={'contain'}
          source={Images.ImgNewToto}
        />
        {/* ImgToko */}
        <Image
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              height: 200,
              left: [
                { minWidth: Breakpoints.BigScreen, value: '45%' },
                { minWidth: Breakpoints.Mobile, value: 85 },
              ],
              marginTop: -75,
              width: [
                { minWidth: Breakpoints.Mobile, value: 200 },
                { minWidth: Breakpoints.BigScreen, value: 200 },
              ],
            }),
            dimensions.width
          )}
          resizeMode={'contain'}
          source={Images.ImgNewTokow}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
