import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as OrganizationApi from '../apis/OrganizationApi.js';
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
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const EditScreen = props => {
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

  const InputCheck = Variables => {
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
      } else if (Position == '' || Position == null) {
        Alert.alert(
          '错误',
          '请选择员工职位！',
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
      } else if (Position == '') {
        alert('请选择员工职位！');
        return false;
      } else if (RoleID == '') {
        alert('请选择员工角色！');
        return false;
      }
      return true;
    }
  };

  const { theme } = props;
  const { navigation } = props;

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
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['Medium']}
              name={'AntDesign/left'}
              size={24}
            />
          </Touchable>
        </View>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
      >
        <OrganizationApi.FetchGetByIdPOST
          userId={props.route?.params?.userId ?? 'xxxx'}
        >
          {({ loading, error, data, refetchGetById }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                renderItem={({ item }) => {
                  const listData = item;
                  return (
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
                            marginTop: -10,
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
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextInputStyles(theme)['Text Input'],
                              dimensions.width
                            )}
                            disabled={true}
                            editable={false}
                            placeholder={'员工ID'}
                            autoCapitalize={'none'}
                            changeTextDelay={500}
                            defaultValue={listData?.employee_code}
                            placeholderTextColor={
                              theme.colors['Custom Color_20']
                            }
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
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextInputStyles(theme)['Text Input'],
                              dimensions.width
                            )}
                            disabled={true}
                            editable={false}
                            placeholder={'员工姓名'}
                            autoCapitalize={'none'}
                            changeTextDelay={500}
                            defaultValue={listData?.name}
                            placeholderTextColor={
                              theme.colors['Custom Color_20']
                            }
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
                            date={EntryDate}
                            label={'入职时间'}
                            autoDismissKeyboard={true}
                            leftIconMode={'inset'}
                            mode={'date'}
                            rightIconName={'AntDesign/calendar'}
                            type={'underline'}
                          />
                        </View>
                      </View>
                      {/* StaffState */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderColor: theme.colors['Divider'],
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
                            options={Constants['StaffstaterLabel']}
                            value={StaffState}
                            autoDismissKeyboard={true}
                            iconSize={24}
                            leftIconMode={'inset'}
                            placeholder={'员工状态'}
                            rightIconName={'AntDesign/downcircleo'}
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
                        >
                          <Picker
                            options={Constants['StaffDept']}
                            autoDismissKeyboard={true}
                            defaultValue={listData?.department_name}
                            iconSize={24}
                            leftIconMode={'inset'}
                            placeholder={'所属部门'}
                            rightIconName={'AntDesign/downcircleo'}
                            type={'underline'}
                          />
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
                            date={PositionTime}
                            label={'转正时间'}
                            autoDismissKeyboard={true}
                            leftIconMode={'inset'}
                            mode={'date'}
                            rightIconName={'AntDesign/calendar'}
                            type={'underline'}
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
                            {
                              flex: 1,
                              flexDirection: 'column',
                              paddingRight: 5,
                            },
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
                            placeholderTextColor={theme.colors['Light']}
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
                            date={Birthday}
                            label={'出生日期'}
                            autoDismissKeyboard={true}
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
                            disabled={true}
                            placeholder={'身份证号'}
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
                            {
                              flex: 1,
                              flexDirection: 'column',
                              paddingRight: 5,
                            },
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
                            options={Constants['Position']}
                            value={Position}
                            autoDismissKeyboard={true}
                            iconSize={24}
                            leftIconMode={'inset'}
                            placeholder={'职位'}
                            rightIconName={'AntDesign/downcircleo'}
                            type={'underline'}
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
                            {
                              flex: 1,
                              flexDirection: 'column',
                              paddingRight: 5,
                            },
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
                            options={Constants['StaffRole']}
                            value={RoleID}
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
                            placeholderTextColor={theme.colors['Light']}
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
                            placeholderTextColor={theme.colors['Light']}
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
                            placeholderTextColor={theme.colors['Light']}
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
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                { color: theme.colors['Strong'] }
                              ),
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
                              InputCheck(Variables);
                              (
                                await organizationInsertInfoPOST.mutateAsync({
                                  address: '西安市',
                                  appTantouCd: 'admin',
                                  birthday: Birthday,
                                  college: Graduate,
                                  department_id: StaffDept,
                                  department_name: '',
                                  email: Email,
                                  employee_code: EmployID,
                                  icon_path: [],
                                  identity_no: IDCard,
                                  linkman: EmgContact,
                                  linkman_tel: EmgCttPhone,
                                  name: EmployName,
                                  parentDeptName: '自测部',
                                  parttime_kb: PositState,
                                  password: EmployPassWord,
                                  position_id: Position,
                                  qualification_id: '',
                                  retirement_date: '2099-12-31',
                                  role_id: RoleID,
                                  start_time: EntryDate,
                                  tel: Phone,
                                  trun_date: PositionTime,
                                  version_id: '',
                                })
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ButtonStyles(theme)['Button'],
                            {
                              borderRadius: 100,
                              fontFamily: 'Inter_600SemiBold',
                              fontSize: 15,
                              height: 58,
                              marginBottom: 20,
                              marginTop: 40,
                              width: '50%',
                            }
                          ),
                          dimensions.width
                        )}
                        title={'保存'}
                      />
                    </View>
                  );
                }}
                data={fetchData?.data}
                listKey={'ZXwgwNcv'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                numColumns={1}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </OrganizationApi.FetchGetByIdPOST>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditScreen);
