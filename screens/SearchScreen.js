import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import searchById from '../global-functions/searchById';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  IconButton,
  Picker,
  ScreenContainer,
  Spacer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, Image, Text, View, useWindowDimensions } from 'react-native';

const SearchScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const searchByPosition = (position, testData, Position) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (position != '') {
      var positionObject = Position.find(item => item.value === position);
      return testData.filter(item => item.position === positionObject.label);
    } else {
      return testData;
    }
  };

  const searchByDepartment = (department, testData, StaffDept) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (department != '') {
      var departmentObject = StaffDept.find(item => item.value === department);
      return testData.filter(
        item => item.department_name === departmentObject.label
      );
    } else {
      return testData;
    }
  };

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      setGlobalVariableValue({
        key: 'resultArray',
        value: Constants['testData'],
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [departmentPickerValue, setDepartmentPickerValue] = React.useState('');
  const [positionPickerValue, setPositionPickerValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [userIdInputValue, setUserIdInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { marginLeft: 5, marginRight: 5 },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* Search Area */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 10, paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      >
        {/* ById */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* btnSearch */}
          <IconButton
            onPress={() => {
              try {
                const ByIdResultArray = searchById(
                  userIdInputValue,
                  Constants['testData']
                );
                setGlobalVariableValue({
                  key: 'resultArray',
                  value: ByIdResultArray,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { position: 'absolute', right: 15, top: 5, zIndex: 99 },
              dimensions.width
            )}
            icon={'AntDesign/search1'}
            size={28}
          />
          {/* inpSearch */}
          <TextInput
            onChangeText={newInpSearchValue => {
              const textInputValue = newInpSearchValue;
              try {
                setUserIdInputValue(newInpSearchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderColor: theme.colors['Primary'],
                  borderWidth: 1,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            value={userIdInputValue}
            placeholder={'请输入员工编号'}
            autoCapitalize={'none'}
            changeTextDelay={500}
            maxLength={40}
            placeholderTextColor={theme.colors['Light']}
          />
        </View>
        {/* ByInfo */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            },
            dimensions.width
          )}
        >
          {/* department */}
          <Picker
            onValueChange={newDepartmentValue => {
              try {
                setPositionPickerValue('');
                setDepartmentPickerValue(newDepartmentValue);
                const ByDPresultArray = searchByDepartment(
                  newDepartmentValue,
                  Constants['testData'],
                  Constants['StaffDept']
                );
                setGlobalVariableValue({
                  key: 'resultArray',
                  value: ByDPresultArray,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors['Primary'],
                height: 40,
                width: '48%',
              },
              dimensions.width
            )}
            value={departmentPickerValue}
            options={Constants['StaffDept']}
            autoDismissKeyboard={true}
            iconSize={24}
            leftIconMode={'inset'}
            leftIconName={'AntDesign/filter'}
            placeholder={'所属部门'}
            type={'solid'}
          />
          {/* position */}
          <Picker
            onValueChange={newPositionValue => {
              try {
                setDepartmentPickerValue('');
                setPositionPickerValue(newPositionValue);
                const ByPositionResultArray = searchByPosition(
                  newPositionValue,
                  Constants['testData'],
                  Constants['Position']
                );
                setGlobalVariableValue({
                  key: 'resultArray',
                  value: ByPositionResultArray,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors['Primary'],
                height: 40,
                width: '48%',
              },
              dimensions.width
            )}
            value={positionPickerValue}
            options={Constants['Position']}
            autoDismissKeyboard={true}
            iconSize={24}
            leftIconMode={'inset'}
            leftIconName={'AntDesign/filter'}
            placeholder={'职位'}
            type={'solid'}
          />
        </View>
      </View>
      {/* Result Area */}
      <View
        style={StyleSheet.applyWidth({ paddingBottom: 100 }, dimensions.width)}
      >
        {/* InfoList */}
        <FlatList
          renderItem={({ item }) => {
            const infoListData = item;
            return (
              <>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('EditScreen', {
                        userId: infoListData?.employee_code,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Surface
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.surface,
                        borderRadius: 12,
                        paddingBottom: 12,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                    elevation={3}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        {/* code */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.light,
                              fontFamily: 'System',
                              fontSize: 12,
                              fontWeight: '400',
                            },
                            dimensions.width
                          )}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}
                        >
                          {infoListData?.employee_code}
                        </Text>
                        {/* name */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.strong,
                              fontFamily: 'System',
                              fontSize: 20,
                              fontWeight: '600',
                            },
                            dimensions.width
                          )}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}
                        >
                          {infoListData?.name}
                        </Text>
                        <Spacer bottom={3} left={8} right={8} top={3} />
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          {/* StaffDept */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.primary,
                                fontFamily: 'System',
                                fontSize: 16,
                                fontWeight: '600',
                                marginRight: 20,
                              },
                              dimensions.width
                            )}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                          >
                            {infoListData?.department_name}
                          </Text>
                          {/* Position */}
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: theme.colors['Primary'],
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '600',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {infoListData?.position}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderRadius: 8,
                            marginLeft: 8,
                            overflow: 'hidden',
                          },
                          dimensions.width
                        )}
                      >
                        {/* avater */}
                        <Image
                          style={StyleSheet.applyWidth(
                            { height: 80, width: 80 },
                            dimensions.width
                          )}
                          resizeMode={'cover'}
                          source={{ uri: `${infoListData?.img_url}` }}
                        />
                      </View>
                    </View>
                    <Spacer bottom={6} left={8} right={8} top={6} />
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'center', flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.light}
                          name={'MaterialCommunityIcons/phone-outline'}
                          size={18}
                        />
                        {/* phone */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'System',
                              fontSize: 12,
                              fontWeight: '600',
                              marginLeft: 6,
                            },
                            dimensions.width
                          )}
                        >
                          {infoListData?.tel}
                        </Text>
                      </View>
                    </View>
                  </Surface>
                </Touchable>
                <Spacer bottom={12} left={8} right={8} top={12} />
              </>
            );
          }}
          data={Constants['resultArray']}
          listKey={'LJyxa74e'}
          keyExtractor={infoListData =>
            infoListData?.id ||
            infoListData?.uuid ||
            JSON.stringify(infoListData)
          }
          style={StyleSheet.applyWidth(
            GlobalStyles.FlatListStyles(theme)['InfoList'],
            dimensions.width,
            ['width', 'height', 'flexGrow']
          )}
          contentContainerStyle={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.FlatListStyles(theme)['InfoList'], {
              paddingLeft: 12,
              paddingRight: 12,
            }),
            dimensions.width
          )}
          numColumns={1}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchScreen);
