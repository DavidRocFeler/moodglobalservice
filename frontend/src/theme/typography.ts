// theme/typography.ts
import { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {

  h1: {
    color: '#B8B8B8',
    fontFamily: "Funnel Display",
    fontSize: '1.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    '&:hover': {
      color: 'white'
    },
  },

  h2: {
    
  },

  h3: {
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#891C1B',
    fontWeight: 700,
    lineHeight: '112%',
    letterSpacing: '-0.01rem',
    fontSize: '1.25rem', 
    
    '@media (max-width:899px)': { 
      fontSize: '1.125rem',
      lineHeight: '1.26rem',
    },
    
    '@media (max-width:450px)': { 
      fontSize: '1.125rem',
      lineHeight: '1.26rem',
    },
  },

  h4: {
    fontFamily: 'var(--font-merriweather), serif',
    color: '#131313',
    fontWeight: 700,
    fontSize: '2.5rem', 
    lineHeight: '3.25rem',
    
    '@media (max-width:1199px)': { 
      fontSize: '1.875rem',
      lineHeight: '2.4375rem',
    },
    
    '@media (max-width:899px)': { 
      fontSize: '1.75rem',
      lineHeight: '2.275rem',
    },
  },

  h5: {
    color: '#131313',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.5rem',
    letterSpacing: '-0.01rem',
  },

  h6: {
    color: '#FFF',
    fontFamily: 'var(--font-merriweather), serif',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '1.5rem',
    letterSpacing: '-0.025rem',
  },

  h7: {
    color: '#131313',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.5625rem',
    lineHeight: '1.875rem',
    
    '@media (max-width:899px)': {
      fontSize: '1.375rem',
      lineHeight: '1.65rem',
    },
    
    '@media (max-width:450px)': {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
    },
  },

  h8: {
    color: '#FFF',
    fontFamily: 'var(--font-merriweather), serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '2.375rem',
    lineHeight: '2.375rem', 
    
    '@media (max-width:899px)': {
      fontSize: '1.875rem',
      lineHeight: '1.875rem', 
    },
    
    '@media (max-width:450px)': {
      fontSize: '1.625rem',
      lineHeight: '1.625rem', 
    },
  },

  h9: {
    color: '#FFF',
    /* H9 */
    fontFamily: "Funnel Display",
    fontSize: '1.3rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  },

  h10: {
    fontFamily: 'var(--font-merriweather), serif',
  },

  h11: {
    fontFamily: 'var(--font-inter), sans-serif',
  },

  h12: {
  },

  h13: {
  
  },

  body1: {
    // color: '#FFF',
    // /* Body 1 Light */
    // fontFamily: "Funnel Display",
    // fontSize: '2.25rem',
    // fontStyle: 'normal',
    // fontWeight: '300',
    // lineHeight: 'normal',
  },
  
  body2: {
    color: 'rgba(255, 255, 255, 0.69)',

    /* Body 2 Refular */
    fontFamily: "Funnel Display",
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 200,
    lineHeight: 'normal',
  },
};