export default {
  colors: {
    // purple shades
    kPurple500: '#40196D',
    kPurple400: '#8369A0',
    kPurple300: '#F4E6FF',
    kPurple200: '#DFE3FF',
    kPurple100: '#EFF1FF',

    // Green shades
    kGreen500: '#48D38A',
    kGreen400: '#8369A0',
    kGreen300: '#F4E6FF',
    kGreen200: '#DCFFEC',
    kGreen100: '#FAFFEA',

    // Blue Shades
    kBlue500: '#1DCBEF',
    kBlue400: '#7EE1F6',
    kBlue300: '#DBF8FF',
    kBlue200: '#E4FAFF',

    // Red shades
    kRed500: '#F7685B',
    kRed400: '#FAA69E',
    kRed300: '#FFDBDB',
    kRed200: '#FEE8F0',

    // Black shades
    kBlack500: '#000000',
    kBlack400: '#979797',
    kBlack300: '#CACACA',
    kBlack200: '#DBDCE0',
    kBlack100: '#F9F9F9',

    // Whites
    kWhite500: '#FFFFFF',
    kWhite400: '#FCFCFD',
    kWhite300: '#F9F9F9',

    // Misc
    kLightBrown: '#E7DEDE',
    kLightOrange: '#FFE9DF',

    KumbaWhite: '#FFFFFF',
    KumbaBlue: '#1DCBEF',
    KumbaYellow: '#FFC83E',
    KumbaGreen: '#48D38A',
    KumbaPurple: '#40196D',
    KumbaDarkPurple: '#EFF1FF',
    KumbaBlack: '#000000',
    KumbaRed: '#F7685B',
    KumbaDarkRed: '#FFDBDB',
    KumbaBorderGrey: '#DBDCE0',
    KumbaGrey: '#CACACA',
    KumbaDarkGrey: '#979797',
    KumbaLightGrey: '#F9F9F9',
    KumbaLighterGrey: '#F4F4F4',
    KumbaLightPurple: '#8369A0',
    KumbaInactivePurple: '#EFF1FF',
    KumbaLightBlue: '#DBF8FF',
  },

  fontSizes: {
    none: 0,
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '2.5xl': '1.7rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },

  fontWeights: {
    none: 0,
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // to do change this....
  breakPoints: {
    //using rems...
    // "2xl": 1536, //extra hd screens
    // xl: 1408, //full hd
    // lg: 1215, //large desktop
    // md: 1023, //desktop
    // tab: 768, //tablets
    // sm: 0, // phones

    '2xl': 5000, //extra hd screens
    xl: 2090, //full hd
    lg: 1800, //large desktop
    md: 1280, //desktop
    tabPortrait: 1024, //tablets
    tab: 1000,
    sm: 926, // phones
    xs: 480,
    all: 0,
  },

  rounds: {
    none: 0,
    sm: '0.125rem',
    norm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '100%',
  },

  spacing: {
    auto: 'auto',
    '0': '0px',
    '1': '1px',
    '2': '0.25rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
  },

  perimeters: {
    full: '100%',
    screen: '100vw',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
  },
}
