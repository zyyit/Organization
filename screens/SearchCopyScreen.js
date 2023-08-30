import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as OrganizationApi from '../apis/OrganizationApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SearchCopyScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

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
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* inpSearch */}
        <TextInput
          onChangeText={newInpSearchValue => {
            const textInputValue = newInpSearchValue;
            try {
              setTextInputValue(newInpSearchValue);
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
          value={textInputValue}
          placeholder={'请输入员工编号'}
          autoCapitalize={'none'}
          changeTextDelay={500}
          maxLength={40}
          placeholderTextColor={theme.colors['Light']}
        />
        {/* btnSearch */}
        <IconButton
          style={StyleSheet.applyWidth(
            { position: 'absolute', right: 15, top: 5, zIndex: 99 },
            dimensions.width
          )}
          icon={'AntDesign/search1'}
          size={28}
        />
      </View>
      {/* Result Area */}
      <View>
        <OrganizationApi.FetchGetAllPOST
          handlers={{
            on2xx: fetchData => {
              try {
                setGlobalVariableValue({
                  key: 'seachResult',
                  value: fetchData,
                });
                console.log(Constants['seachResult']);
              } catch (err) {
                console.error(err);
              }
            },
          }}
        >
          {({ loading, error, data, refetchGetAll }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* InfoList */}
                <FlatList
                  renderItem={({ item }) => {
                    const infoListData = item;
                    return (
                      <>
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('EditScreen');
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
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                    },
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
                                    {infoListData?.department_id}
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
                                  source={Images._66574442ae9bfc4}
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
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                  },
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
                                  {'0000-0000-0000'}
                                </Text>
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                        <Spacer bottom={12} left={8} right={8} top={12} />
                      </>
                    );
                  }}
                  data={Constants['seachResult']}
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
                    StyleSheet.compose(
                      GlobalStyles.FlatListStyles(theme)['InfoList'],
                      { paddingLeft: 12, paddingRight: 12 }
                    ),
                    dimensions.width
                  )}
                  numColumns={1}
                />
              </>
            );
          }}
        </OrganizationApi.FetchGetAllPOST>
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
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SearchCopyScreen);
