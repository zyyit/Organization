import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ViewStyles = theme =>
  StyleSheet.create({
    '001': {
      alignItems: 'center',
      flexDirection: 'row',
      height: [
        { minWidth: Breakpoints.Mobile, value: 50 },
        { minWidth: Breakpoints.Tablet, value: 65 },
        { minWidth: Breakpoints.Laptop, value: 75 },
        { minWidth: Breakpoints.Desktop, value: 85 },
        { minWidth: Breakpoints.BigScreen, value: 90 },
      ],
      marginRight: 48,
      paddingLeft: 10,
      paddingRight: 10,
    },
    'common navi': {
      alignContent: 'stretch',
      alignItems: 'center',
      alignSelf: 'auto',
      flexDirection: 'row',
      marginBottom: 15,
      marginTop: 10,
    },
    'common navi 2': {
      alignContent: 'stretch',
      alignItems: 'center',
      alignSelf: 'auto',
      flexDirection: 'row',
      marginBottom: 15,
      marginTop: 10,
    },
    'common navi 3': {
      alignContent: 'stretch',
      alignItems: 'center',
      alignSelf: 'auto',
      flexDirection: 'row',
      marginBottom: 15,
      marginTop: 10,
    },
    'common tittle': {
      alignItems: 'center',
      backgroundColor: 'rgba(190, 190, 190, 0.5)',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 5,
      paddingRight: 5,
    },
    'common tittle 2': {
      alignItems: 'center',
      backgroundColor: 'rgba(190, 190, 190, 0.5)',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 5,
      paddingRight: 5,
    },
    top: { justifyContent: 'center', width: '100%' },
  });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({ 'Action Sheet Item': { textAlign: 'center' } });

export const BlurViewStyles = theme =>
  StyleSheet.create({
    'Blur View': { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const H2Styles = theme =>
  StyleSheet.create({
    H2: { color: theme.colors.strong, fontSize: 24, fontWeight: 'bold' },
  });

export const H6Styles = theme =>
  StyleSheet.create({
    H6: { color: theme.colors.strong, fontSize: 10.72, fontWeight: 'bold' },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const FlatListStyles = theme =>
  StyleSheet.create({
    InfoList: {
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    'InfoList 2': {
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { minHeight: 40 } });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const TabViewItemStyles = theme =>
  StyleSheet.create({
    'Tab View Item': { flex: 1 },
    'Tab View Item 2': { flex: 1 },
  });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const TextStyles = theme =>
  StyleSheet.create({
    text1: {
      alignSelf: 'flex-end',
      color: theme.colors.strong,
      fontSize: 16,
      marginRight: 20,
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input': {
      borderRadius: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input 2': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });
