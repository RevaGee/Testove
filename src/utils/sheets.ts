import {SheetManager} from 'react-native-actions-sheet';

const showCustomActionSheet = (id: string, payload?: any) =>
  SheetManager.show(id, {payload});
const hideCustomActionSheet = <T>(id: string, payload?: T) =>
  SheetManager.hide(id, payload);

export type ActionSheetResponse = {
  data?: any;
};
export const showWalletSelectorActionSheet = () =>
  showCustomActionSheet('SignUpActionSheet');
export const closeCoinInfoActionSheet = () =>
  hideCustomActionSheet('SignUpActionSheet');
