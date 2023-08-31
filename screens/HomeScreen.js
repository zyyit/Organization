import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  BottomSheet,
  Button,
  IconButton,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { H2 } from '@expo/html-elements';
import { useIsFocused } from '@react-navigation/native';
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

  const logoutcheck = () => {
    console.log('version:1.92');

    // var isLogout=false;

    // if(Platform.OS=="ios"||Platform.OS=="android"){
    //   await Alert.alert(
    //   '提示',
    //   '确认登出？',
    //   [
    //     {
    //       text: "是",
    //       onPress: async ()=>{isLogout=true},
    //     },
    //     {
    //       text: "否",
    //       onPress: async ()=>{isLogout=false},
    //     }
    //   ],
    //   { cancelable: false }
    //   );
    //   console.log("fun:"+isLogout);
    //   return isLogout;
    // }else{
    //   return confirm("确认登出？");
    // }
    function check(callback) {
      if (Platform.OS == 'ios' || Platform.OS == 'android') {
        Alert.alert(
          '提示',
          '确认登出？',
          [
            {
              text: '是',
              onPress: () => callback(true),
            },
            {
              text: '否',
              onPress: () => callback(false),
            },
          ],
          { cancelable: false }
        );
      } else {
        callback(confirm('确认登出？'));
      }
    }

    return check(isLogout => {
      console.log('fun:' + isLogout);
      return isLogout;
    });
  };

  const getToday = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    // 创建一个Date对象
    const now = new Date();

    // 获取年、月、日和星期
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekDays[now.getDay()];

    return '今天是' + year + '年' + month + '月' + day + '日，星期' + weekday;
  };

  const { theme } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const result = getToday();
      setToady(result);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [Toady, setToady] = React.useState('');
  const [isLogout, setIsLogout] = React.useState(false);
  const [isShowButtomSheet, setIsShowButtomSheet] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { marginLeft: 10, marginRight: 10 },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* Top Area */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(233, 233, 233)',
            borderColor: theme.colors['Surface'],
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            paddingBottom: 10,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        {/* UserInfo Box */}
        <View
          style={StyleSheet.applyWidth(
            { alignSelf: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* avater */}
          <View
            style={StyleSheet.applyWidth(
              { borderColor: theme.colors['Strong'] },
              dimensions.width
            )}
          >
            {/* avater */}
            <Image
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  borderColor: theme.colors['Primary'],
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  borderWidth: 1,
                  height: 60,
                  width: 60,
                }),
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.ImgNewToto}
            />
          </View>
          {/* userInfo */}
          <View
            style={StyleSheet.applyWidth(
              { justifyContent: 'center', marginLeft: 10 },
              dimensions.width
            )}
          >
            {/* txtUserName */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'System',
                  fontSize: 16,
                  fontWeight: '700',
                  marginBottom: 5,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              {'Hello '}
              {props.route?.params?.name ?? 'XXXX'}
              {','}
            </Text>
            {/* txtTip */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Strong'],
                }),
                dimensions.width
              )}
            >
              {Toady}
            </Text>
          </View>
        </View>
        {/* Notice Box */}
        <View
          style={StyleSheet.applyWidth(
            { alignSelf: 'center' },
            dimensions.width
          )}
        >
          <IconButton
            onPress={() => {
              try {
                if (isShowButtomSheet === false) {
                  setIsShowButtomSheet(true);
                }
                if (isShowButtomSheet === true) {
                  setIsShowButtomSheet(false);
                }
              } catch (err) {
                console.error(err);
              }
            }}
            color={theme.colors['Primary']}
            icon={'FontAwesome/bell-o'}
            size={26}
          />
        </View>
      </View>
      {/* Mid Area */}
      <View
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['home'], {
            backgroundColor: 'rgb(230, 230, 230)',
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 5,
            marginTop: 5,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingTop: 10,
          }),
          dimensions.width
        )}
      >
        {/* title */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '700',
            }),
            dimensions.width
          )}
        >
          {"Let's Make an appointment"}
        </Text>
        {/* context */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Light'],
              marginBottom: 20,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {'This is a new start. You can try anything in this APP.'}
        </Text>
        <Button
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Primary'],
              borderColor: theme.colors['Custom Color_3'],
              width: '40%',
            }),
            dimensions.width
          )}
          title={'Get Started'}
        />
      </View>
      {/* Bottom Area */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Surface'],
            paddingBottom: 20,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* footTitle */}
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Medium'],
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              letterSpacing: 2,
            }),
            dimensions.width
          )}
        >
          {'PLAYING'}
        </Text>
        <Image
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: 200,
              marginTop: 10,
              width: '100%',
            }),
            dimensions.width
          )}
          resizeMode={'cover'}
          source={{
            uri: 'https://ts1.cn.mm.bing.net/th?id=ORMS.e9327791388dc9d10e952bb78394a1ab&pid=Wdp&w=300&h=225&qlt=90&c=1&rs=1',
          }}
        />
        {/* text */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(222, 222, 222)',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* mainTitle */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                alignSelf: 'flex-start',
                color: theme.colors['Primary'],
                fontFamily: 'System',
                fontWeight: '900',
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Android Development'}
          </Text>
          {/* secTitle */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '700',
                marginBottom: 10,
                marginTop: 20,
              }),
              dimensions.width
            )}
          >
            {'Android & Android Development'}
          </Text>
          {/* progess */}
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Medium'],
              }),
              dimensions.width
            )}
          >
            {'4 of all lessons'}
          </Text>
        </View>
      </View>
      <>
        {!(isShowButtomSheet === true) ? null : (
          <BottomSheet
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
            borderColor={theme.colors.divider}
            borderWidth={1}
            bottomSnapPosition={'80%'}
            bounces={true}
            friction={0.95}
            handleColor={theme.colors.divider}
            initialSnapPosition={'middle'}
            middleSnapPosition={'50%'}
            showHandle={true}
            showsVerticalScrollIndicator={true}
            topBorderRadius={20}
            topSnapPosition={'10%'}
          >
            {/* Message View */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <H2
                style={StyleSheet.applyWidth(
                  GlobalStyles.H2Styles(theme)['H2'],
                  dimensions.width
                )}
              >
                {'震惊！某XXX竟然XXX...'}
              </H2>
            </View>
            {/* exit */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: 'rgb(231, 231, 231)',
                  borderTopWidth: 1,
                  paddingBottom: 5,
                  paddingTop: 5,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <IconButton
                onPress={() => {
                  try {
                    const result = logoutcheck();
                    console.log(result);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                icon={'Ionicons/exit-outline'}
                size={32}
              />
            </View>
          </BottomSheet>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
