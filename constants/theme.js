import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');



export const COLORS = {
    primary: '#1D1717', //charcoal black
    secondary: '#FFFFFF',

    accent: '#C9E0DD',
    darkGray: '#666666',
    gray: '#808080',
}


export const SIZES = {

    margin: 20,
    padding: 10,
    padding_md: 15,
    radius_md: 40,
    radius_full: 100,

    h1:36,
    h2: 24,
    h3: 18,
    h4: 10,
    
    width,
    height
}


export const theme = { COLORS, SIZES }

export default theme
