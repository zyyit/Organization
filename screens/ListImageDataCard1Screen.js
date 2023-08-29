import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import formatCurrency from '../global-functions/formatCurrency';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  Spacer,
  Surface,
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

const ListImageDataCard1Screen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const formatCurrency = value => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  };

  const { theme } = props;

  return (
    <ScreenContainer hasTopSafeArea={true} scrollable={false}>
      <DraftbitApi.FetchCarsGET limit={16}>
        {({ loading, error, data, refetchCars }) => {
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
                  <>
                    <Touchable>
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
                              {listData?.year}
                            </Text>

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
                              {listData?.model}
                            </Text>
                            <Spacer bottom={3} left={8} right={8} top={3} />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.primary,
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                            >
                              {formatCurrency(listData?.price)}
                            </Text>
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
                            <Image
                              style={StyleSheet.applyWidth(
                                { height: 80, width: 80 },
                                dimensions.width
                              )}
                              resizeMode={'cover'}
                              source={{ uri: `${listData?.image_thumb}` }}
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
                              name={'Feather/user'}
                              size={18}
                            />
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
                              {listData && listData['seller-name']}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={theme.colors.light}
                              name={'Feather/activity'}
                              size={20}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.medium,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                  marginLeft: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {'Pending'}
                            </Text>
                          </View>
                        </View>
                      </Surface>
                    </Touchable>
                    <Spacer bottom={12} left={8} right={8} top={12} />
                  </>
                );
              }}
              data={fetchData}
              listKey={'pxEXkDtz'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              contentContainerStyle={StyleSheet.applyWidth(
                {
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
              numColumns={1}
            />
          );
        }}
      </DraftbitApi.FetchCarsGET>
    </ScreenContainer>
  );
};

export default withTheme(ListImageDataCard1Screen);
