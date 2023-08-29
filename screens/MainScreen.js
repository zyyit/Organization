import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  TabView,
  TabViewItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { MasonryFlashList } from '@shopify/flash-list';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { Fetch } from 'react-request';

const MainScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { paddingLeft: '5%', paddingRight: '5%' },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      {/* Top Area */}
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Tittle Area */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgb(202, 236, 213)',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 5,
              paddingRight: 5,
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
                  fontSize: 16,
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
              size={16}
            />
            {/* txtUserName */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  marginRight: 25,
                }),
                dimensions.width
              )}
            >
              {props.route?.params?.name ?? 'XXX'}
            </Text>
            {/* btnLogout */}
            <IconButton icon={'MaterialIcons/logout'} size={22} />
          </View>
        </View>
        {/* Navi Area */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'stretch',
              alignItems: 'center',
              alignSelf: 'auto',
              flexDirection: 'row',
              marginBottom: 15,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'首页'}
          </Text>
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
      {/* Main View */}
      <TabView
        activeColor={theme.colors.primary}
        iconSize={30}
        indicatorColor={theme.colors.primary}
        keyboardDismissMode={'auto'}
        pressColor={theme.colors.primary}
        swipeEnabled={true}
        tabBarPosition={'bottom'}
        tabsBackgroundColor={theme.colors.background}
      >
        {/* Search View */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item 2'],
            dimensions.width
          )}
          icon={'Feather/search'}
        >
          {/* Search Area */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
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
                  { width: '100%' }
                ),
                dimensions.width
              )}
              value={textInputValue}
              placeholder={'请输入员工编号'}
              autoCapitalize={'none'}
              changeTextDelay={500}
              maxLength={40}
            />
            {/* btnSearch */}
            <IconButton
              style={StyleSheet.applyWidth(
                { position: 'absolute', right: 10, top: '12%', zIndex: 99 },
                dimensions.width
              )}
              icon={'AntDesign/search1'}
              size={28}
            />
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
          {/* Result Area */}
          <View>
            <>
              {/* SearchDataList */}
              <MasonryFlashList
                renderItem={({ item }) => {
                  const searchDataListData = item;
                  return (
                    <Touchable>
                      <View />
                    </Touchable>
                  );
                }}
                data={[]}
                listKey={'mHTJVPpp'}
                keyExtractor={searchDataListData =>
                  searchDataListData?.id ||
                  searchDataListData?.uuid ||
                  JSON.stringify(searchDataListData)
                }
                estimatedItemSize={50}
                numColumns={1}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            </>
          </View>
        </TabViewItem>
        {/* Home View */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item 2'],
            dimensions.width
          )}
          icon={'Ionicons/home'}
        >
          {/* Mid Area */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: '15%' },
              dimensions.width
            )}
          >
            {/* ImgToto */}
            <Image
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 200,
                  width: '50%',
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
                  marginLeft: '50%',
                  marginTop: -75,
                  width: '50%',
                }),
                dimensions.width
              )}
              resizeMode={'contain'}
              source={Images.ImgNewTokow}
            />
          </View>
        </TabViewItem>
        {/* Create View */}
        <TabViewItem
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item 2'],
            dimensions.width
          )}
          icon={'Ionicons/create'}
        />
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(MainScreen);
