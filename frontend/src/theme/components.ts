// theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'contactUs' },
        style: {
          // Colores base
          backgroundColor: '#1F37E1',
          width: '10rem',
          // Tipografía
          color: '#FFF',
          leadingTrim: 'both',
          textEdge: 'cap',
          fontSize: '1.0625rem',
          fontStyle: 'normal',
          lineHeight: '1.5rem', /* 1.59375rem */
          letterSpacing: '0.03125rem',
          
          // Dimensiones y espaciado
          height: '2.3125rem',
          
          // Reset de estilos del button
          border: 'none',
          outline: 'none',
          borderRadius: 0,
          
          // Layout interno
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          
          // Posicionamiento para el efecto pixel
          position: 'relative',
          paddingLeft: 10,
          paddingRight: 3,
          
          boxShadow: '0 3px 0 0 #142E43',
        }
      }
      
    ]
  }
};