// theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'contactUs' },
        style: {
          backgroundColor: '#1F37E1',
          width: '10rem',
          color: '#FFF',
          leadingTrim: 'both',
          textEdge: 'cap',
          fontSize: '1.0625rem',
          fontStyle: 'normal',
          lineHeight: '1.5rem',
          letterSpacing: '0.03125rem',
          
          height: '2.3125rem',
          
          border: 'none',
          outline: 'none',
          borderRadius: 0,
          
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          
          position: 'relative',
          paddingLeft: 10,
          paddingRight: 3,
          
          boxShadow: '0 3px 0 0 #142E43',
        }
      }
      
    ]
  }
};