import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  DatePicker,
  Icon,
  Picker,
  ScreenContainer,
  Switch,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PersoninfoinputScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const { theme } = props;

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
  const [PositState, setPositState] = React.useState(false);
  const [Position, setPosition] = React.useState('');
  const [PositionTime, setPositionTime] = React.useState(new Date());
  const [RoleID, setRoleID] = React.useState('');
  const [StaffDept, setStaffDept] = React.useState('');
  const [StaffEducation, setStaffEducation] = React.useState('');
  const [StaffState, setStaffState] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'flex-start',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable>
            <Icon
              color={theme.colors['Medium']}
              name={'AntDesign/arrowleft'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'space-around' },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View />
          {/* StaffID */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工编号'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* StaffName */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工姓名'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* StaffPassWord */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工密码'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
              />
            </View>
          </View>
          {/* EntryDate */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
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
                    setEntryDate(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={EntryDate}
                label={'入职时间'}
                autoDismissKeyboard={true}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'solid'}
              />
            </View>
          </View>
          {/* StaffState */}
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
            >
              <Picker
                onValueChange={newPickerValue => {
                  try {
                    setStaffState(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                options={Constants['Staffstater']}
                value={StaffState}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'请选择员工状态'}
                rightIconName={'AntDesign/down'}
                type={'solid'}
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
            >
              <Picker
                onValueChange={newPickerValue => {
                  try {
                    setStaffDept(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                options={Constants['StaffDept']}
                value={StaffDept}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'请选择员工所属部门'}
                rightIconName={'AntDesign/down'}
                type={'solid'}
              />
            </View>
          </View>
          {/* Probation Time */}
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
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setPositionTime(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={PositionTime}
                label={'转正时间'}
                autoDismissKeyboard={true}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'solid'}
              />
            </View>
          </View>
          {/* Staff Education */}
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
                options={Constants['StaffEducat']}
                value={StaffEducation}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'请选择员工学历'}
                rightIconName={'AntDesign/down'}
                type={'solid'}
              />
            </View>
          </View>
          {/* School */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入毕业院校'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* Birthday */}
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
            >
              <DatePicker
                onDateChange={newDatePickerValue => {
                  try {
                    setBirthday(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={Birthday}
                label={'出生日期'}
                autoDismissKeyboard={true}
                leftIconMode={'inset'}
                mode={'date'}
                rightIconName={'AntDesign/calendar'}
                type={'solid'}
              />
            </View>
          </View>
          {/* IDCard */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工身份证号'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工邮箱'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
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
                    setPosition(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={Position}
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'请选择员工职位'}
                rightIconName={'AntDesign/down'}
                type={'solid'}
              />
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
                autoDismissKeyboard={true}
                iconSize={24}
                leftIconMode={'inset'}
                placeholder={'请选择员工角色'}
                rightIconName={'AntDesign/down'}
                type={'solid'}
              />
            </View>
          </View>
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工联系电话'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* Emergency Contact */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入员工紧急联络人'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* Emergency Contact Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                placeholder={'请输入紧急联络电话'}
                autoCapitalize={'none'}
                changeTextDelay={500}
                placeholderTextColor={theme.colors['Light']}
              />
            </View>
          </View>
          {/* Position State */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(249, 243, 243)',
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
                  justifyContent: 'flex-start',
                  paddingLeft: '2%',
                  paddingRight: 5,
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
                style={StyleSheet.applyWidth(
                  { left: '86%', position: 'absolute' },
                  dimensions.width
                )}
                value={PositState}
              />
            </View>
          </View>
          <Button
            onPress={() => {
              try {
                myFunctionName();
              } catch (err) {
                console.error(err);
              }
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
            title={'登录'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PersoninfoinputScreen);
