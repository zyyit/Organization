import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as OrganizationApi from '../apis/OrganizationApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  Checkbox,
  DatePicker,
  Icon,
  Picker,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Switch,
  TextInput,
  Touchable,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const insertMessage = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (insertCode.code == '200') {
      Alert.alert(
        'Message',
        'Success！',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return false;
    } else {
      Alert.alert(
        'Message',
        'Error',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
      return false;
    }
  };

  const convertBoolToString = boolText => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if (typeof boolText === 'boolean' && boolText) {
      return '2';
    } else {
      return '1';
    }
  };

  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    console.log('====================');
    if (EmployID == '' || EmployID == null) {
      console.log('员工编号为空！');
      alert('员工编号为空！');
    } else if (EmployName == '' || EmployName == null) {
      console.log('员工姓名为空！');
      alert('员工姓名为空！');
    } else if (EmployPassWord == '' || EmployPassWord == null) {
      console.log('员工密码为空！');
      alert('员工密码为空！');
    } else if (Position == '' || Position == null) {
      console.log('员工职位为空！');
      alert('员工职位为空！');
    } else if (RoleID == '' || RoleID == null) {
      console.log('员工角色为空！');
      alert('员工角色为空！');
    }
    console.log(PositState);
    alert(PositState);
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const CheckInput = Variables => {
    if (Platform.OS == 'ios' || Platform.OS == 'android') {
      if (EmployID == '' || EmployID == null) {
        Alert.alert(
          '错误',
          '员工ID为空！',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
        return false;
      } else if (EmployName == '' || EmployName == null) {
        Alert.alert(
          '错误',
          '员工姓名为空！',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
        return false;
      } else if (EmployPassWord == '' || EmployPassWord == null) {
        Alert.alert(
          '错误',
          '密码为空！',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
        return false;
      } else if (RoleID == '' || RoleID == null) {
        Alert.alert(
          '错误',
          '请选择员工角色！',
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
    } else {
      if (EmployID == '') {
        alert('员工ID为空！');
        return false;
      } else if (EmployName == '') {
        alert('员工姓名为空！');
        return false;
      } else if (EmployPassWord == '') {
        alert('密码为空！');
        return false;
      } else if (RoleID == '') {
        alert('请选择员工角色！');
        return false;
      }
      return true;
    }
  };

  const { theme } = props;

  const organizationInsertInfoPOST = OrganizationApi.useInsertInfoPOST();

  const [Birthday, setBirthday] = React.useState(new Date());
  const [Email, setEmail] = React.useState('');
  const [EmgContact, setEmgContact] = React.useState('');
  const [EmgCttPhone, setEmgCttPhone] = React.useState('');
  const [EmployID, setEmployID] = React.useState('');
  const [EmployName, setEmployName] = React.useState('');
  const [EmployPassWord, setEmployPassWord] = React.useState('');
  const [EntryDate, setEntryDate] = React.useState(new Date());
  const [Graduate, setGraduate] = React.useState('');
  const [IDCard, setIDCard] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [PicArray, setPicArray] = React.useState([]);
  const [PositState, setPositState] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [PositionTime, setPositionTime] = React.useState(new Date());
  const [RoleID, setRoleID] = React.useState('');
  const [StaffDept, setStaffDept] = React.useState('');
  const [StaffEducation, setStaffEducation] = React.useState('');
  const [StaffState, setStaffState] = React.useState('');
  const [UserPicture, setUserPicture] = React.useState(false);
  const [checkbox2Value, setCheckbox2Value] = React.useState(false);
  const [checkboxRow2Value, setCheckboxRow2Value] = React.useState('');
  const [checkboxRow3Value, setCheckboxRow3Value] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [insertCode, setInsertCode] = React.useState({});
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [returnsImageData, setReturnsImageData] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', borderRadius: 16, width: '100%' },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    const result = await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });

                    const pictu = (() => {
                      if (Constants['UserPic']) {
                        return setGlobalVariableValue({
                          key: 'UserPic',
                          value: result,
                        });
                      }
                    })();
                    setUserPicture(pictu);
                    setPicArray(result);
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              {/* View 2 */}
              <View>
                <Image
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      {
                        borderRadius: 55,
                        height: 110,
                        left: 5,
                        position: 'relative',
                        top: 5,
                        width: 110,
                      }
                    ),
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={Images.Ellipse21}
                />
                {/* Image 2 */}
                <Image
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      {
                        borderRadius: 55,
                        height: 110,
                        left: 5,
                        position: 'absolute',
                        top: 5,
                        width: 110,
                      }
                    ),
                    dimensions.width
                  )}
                  resizeMode={'cover'}
                  source={{ uri: `${Constants['UserPic']}` }}
                />
                {/* Image3 */}
                <>
                  {UserPicture ? null : (
                    <Image
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { height: 137, position: 'absolute', width: 120 }
                        ),
                        dimensions.width
                      )}
                      resizeMode={'cover'}
                      source={Images.EditProfile}
                    />
                  )}
                </>
              </View>
            </Pressable>
          </View>
          {/* StaffID */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 35,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmployID(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={EmployID}
                placeholder={'员工ID'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* StaffName */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmployName(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={EmployName}
                placeholder={'员工姓名'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* StaffPassWord */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmployPassWord(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={EmployPassWord}
                placeholder={'员工密码'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
                secureTextEntry={true}
              />
            </View>
          </View>
          {/* EntryDate */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setEntryDate(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { fontFamily: 'System', fontWeight: '400' },
                  dimensions.width
                )}
                label={'入职时间'}
                date={EntryDate}
                autoDismissKeyboard={true}
                format={'yyyy/mm/dd'}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'underline'}
              />
            </View>
          </View>
          {/* StaffDept */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            />
            <Picker
              onValueChange={newPickerValue => {
                try {
                  setStaffDept(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={StaffDept}
              options={Constants['StaffDept']}
              autoDismissKeyboard={true}
              iconSize={24}
              leftIconMode={'inset'}
              placeholder={'所属部门'}
              placeholderTextColor={theme.colors['Custom Color_9']}
              rightIconName={'AntDesign/downcircleo'}
              type={'underline'}
            />
          </View>
          {/* WorkStatus */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 90,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '110%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'stretch',
                  flex: 1,
                  flexDirection: 'column',
                  height: 60,
                  justifyContent: 'flex-start',
                  paddingLeft: 0,
                  paddingRight: 2,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    alignSelf: 'auto',
                    color: theme.colors['Medium'],
                    fontSize: 12,
                    marginLeft: 28,
                  }),
                  dimensions.width
                )}
              >
                {'工作状态'}
              </Text>

              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  try {
                    setRadioButtonGroupValue(newRadioButtonGroupValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginLeft: 10, marginTop: 10 },
                  dimensions.width
                )}
                value={radioButtonGroupValue}
                direction={'horizontal'}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      color: theme.colors['Strong'],
                      marginLeft: 15,
                    }),
                    dimensions.width
                  )}
                >
                  {'正式员工'}
                </Text>
                <RadioButton
                  style={StyleSheet.applyWidth({ left: 3 }, dimensions.width)}
                  value={0}
                  color={theme.colors.primary}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  size={24}
                  unselectedColor={theme.colors.primary}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                />
                {/* Text 2 */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      marginLeft: 20,
                    }),
                    dimensions.width
                  )}
                >
                  {'实习员工'}
                </Text>
                {/* Radio Button 2 */}
                <RadioButton
                  style={StyleSheet.applyWidth({ left: 3 }, dimensions.width)}
                  value={1}
                  color={theme.colors.primary}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  size={24}
                  unselectedColor={theme.colors.primary}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                />
                {/* Text 3 */}
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      marginLeft: 20,
                    }),
                    dimensions.width
                  )}
                >
                  {'离职人员'}
                </Text>
                {/* Radio Button 3 */}
                <RadioButton
                  style={StyleSheet.applyWidth({ left: 3 }, dimensions.width)}
                  value={2}
                  color={theme.colors.primary}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  size={24}
                  unselectedColor={theme.colors.primary}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                />
              </RadioButtonGroup>
            </View>
          </View>
          {/* Probation Time */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setPositionTime(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                label={'转正时间'}
                date={PositionTime}
                autoDismissKeyboard={true}
                format={'yyyy/mm/dd'}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'underline'}
              />
            </View>
          </View>
          {/* StaffEducat */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, flexDirection: 'column', paddingRight: 5 },
                dimensions.width
              )}
            >
              <Picker
                onValueChange={newPickerValue => {
                  try {
                    setStaffEducation(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={StaffEducation}
                options={Constants['StaffEducat']}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'学历'}
                rightIconName={'AntDesign/downcircleo'}
                type={'underline'}
              />
            </View>
          </View>
          {/* School */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setGraduate(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={Graduate}
                placeholder={'毕业院校'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* Birthday */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setBirthday(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                label={'出生日期'}
                date={Birthday}
                autoDismissKeyboard={true}
                format={'yyyy/mm/dd'}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'underline'}
              />
            </View>
          </View>
          {/* IDCard */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setIDCard(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={IDCard}
                placeholder={'身份证号'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmail(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={Email}
                placeholder={'邮箱'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
            <Icon
              name={'MaterialCommunityIcons/email-edit-outline'}
              size={24}
            />
          </View>
          {/* Position */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  flexDirection: 'column',
                  height: 50,
                  paddingRight: 5,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    alignSelf: 'flex-start',
                    color: theme.colors['Medium'],
                    fontSize: 12,
                    marginLeft: 20,
                    textAlign: 'left',
                  }),
                  dimensions.width
                )}
              >
                {'职位'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    width: 300,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      marginRight: -20,
                    }),
                    dimensions.width
                  )}
                >
                  {'部长'}
                </Text>
                <Checkbox
                  onPress={newCheckboxValue => {
                    try {
                      setPosition(12);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  status={Position}
                />
                {/* Text 2 */}
                <Text
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'课长'}
                </Text>
                {/* Checkbox 1 */}
                <Checkbox
                  style={StyleSheet.applyWidth(
                    { left: -10, marginLeft: -10 },
                    dimensions.width
                  )}
                />
                {/* Text 3 */}
                <Text
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'组长'}
                </Text>
                {/* Checkbox 3 */}
                <Checkbox
                  style={StyleSheet.applyWidth(
                    { marginLeft: -20 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </View>
          {/* Role */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: 16,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 15,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, flexDirection: 'column', paddingRight: 5 },
                dimensions.width
              )}
            >
              <Picker
                onValueChange={newPickerValue => {
                  try {
                    setRoleID(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={RoleID}
                options={Constants['StaffRole']}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'角色'}
                rightIconName={'AntDesign/downcircleo'}
                type={'underline'}
              />
            </View>
          </View>
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setPhone(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={Phone}
                placeholder={'联系电话'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* Emergency Contact */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmgContact(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={EmgContact}
                placeholder={'紧急联络人'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* Emergency Contact Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setEmgCttPhone(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextInputStyles(theme)['Text Input'],
                  dimensions.width
                )}
                value={EmgCttPhone}
                placeholder={'紧急联络人电话'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Custom Color_20']}
              />
            </View>
          </View>
          {/* Position State */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(250, 245, 245)',
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-around',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: '2%',
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: theme.colors['Strong'],
                  }),
                  dimensions.width
                )}
              >
                {'本职/兼职'}
              </Text>
              <Switch
                onValueChange={newSwitchValue => {
                  try {
                    setPositState(newSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={PositState}
              />
            </View>
          </View>
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  CheckInput(Variables);
                  const insertCode = (
                    await organizationInsertInfoPOST.mutateAsync({
                      address: '西安市',
                      appTantouCd: 'admin',
                      birthday: Birthday,
                      college: Graduate,
                      department_id: StaffDept,
                      department_name: StaffDept,
                      email: Email,
                      employee_code: EmployID,
                      icon_path: [],
                      identity_no: IDCard,
                      linkman: EmgContact,
                      linkman_tel: EmgCttPhone,
                      name: EmployName,
                      parentDeptName: '自测部',
                      parttime_kb: convertBoolToString(PositState),
                      password: EmployPassWord,
                      position_id: Position,
                      qualification_id: StaffEducation,
                      retirement_date: '2099-12-31',
                      role_id: RoleID,
                      start_time: EntryDate,
                      tel: Phone,
                      trun_date: PositionTime,
                      version_id: '',
                      work_status: radioButtonGroupValue,
                    })
                  )?.json;
                  insertMessage();
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                borderRadius: 100,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 15,
                height: 58,
                marginBottom: 20,
                marginTop: 40,
                width: '50%',
              }),
              dimensions.width
            )}
            title={'保存'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateScreen);
