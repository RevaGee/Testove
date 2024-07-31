import { StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/global';

const LOGO_WIDTH = screenWidth * 0.425;
const LOGO_RATIO = LOGO_WIDTH / 530;

export const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: LOGO_WIDTH,
        height: 471 * LOGO_RATIO,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: -16,
    },
    text: {
        color: '#FFF',
        marginLeft: 8,
    },
});
