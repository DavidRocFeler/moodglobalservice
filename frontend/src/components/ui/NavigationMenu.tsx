'use client' 

import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { ChevronDown } from '@/assets/icons' 

import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type NavigationMenuProps = React.ComponentProps<typeof RadixNavigationMenu.Root>
export function NavigationMenu({
  className,
  children,
  sx,
  ...props
}: NavigationMenuProps & { sx?: any }) {
  return (
    <Box
    >
      <RadixNavigationMenu.Root
        data-slot="navigation-menu"
        data-viewport={false}
        className={className}
        {...props}
      >
        {children}
      </RadixNavigationMenu.Root>
    </Box>
  )
}




type NavigationMenuListProps = React.ComponentProps<
  typeof RadixNavigationMenu.List
> & { sx?: any }
export function NavigationMenuList({
  className,
  sx,
  ...props
}: NavigationMenuListProps) {
  return (
    <Box
      component={RadixNavigationMenu.List}
      data-slot="navigation-menu-list"
      className={className}
      sx={{
        display: 'flex',
        width: 'fit-content',
        ml: -3,
        listStyle: 'none',
        pr: 2,
        gap: 1,
      }}
      {...props}
    />
  )
}




type NavigationMenuItemProps = React.ComponentProps<
  typeof RadixNavigationMenu.Item
> & { sx?: any }
export function NavigationMenuItem({
  className,
  sx,
  ...props
}: NavigationMenuItemProps) {
  return (
    <Box
      component={RadixNavigationMenu.Item}
      data-slot="navigation-menu-item"
      className={className}
      sx={{
        position: 'relative',
        ...sx
      }}
      {...props}
    />
  )
}




type NavigationMenuTriggerProps = React.ComponentProps<
  typeof RadixNavigationMenu.Trigger
> & { sx?: any }
export function NavigationMenuTrigger({
  className,
  children,
  sx,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <Box
      component={RadixNavigationMenu.Trigger}
      data-slot="navigation-menu-trigger"
      className={className}
      sx={{
        display: 'inline-flex',
        height: '36px',
        fontFamily: "Funnel Display",
        bgcolor: 'transparent',
        width: 'max-content',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        px: 2,
        py: 1,
        fontWeight: 500,
        fontSize: '0.875rem',
        color: '#B8B8B8',
        cursor: 'pointer',
        border: 'none',
        gap: 1,
        outline: 'none',
        '&:hover': {
          backgroundColor: '#1D1D1D',
          color: 'white',
          boxShadow: '0 2px 0 0 #575757',
        },
        ...sx
      }}
      {...props}
    >
        {children}
        <ChevronDown/>
    </Box>
  )
}




type NavigationMenuContentProps = React.ComponentProps<
  typeof RadixNavigationMenu.Content
> & { sx?: any }
export function NavigationMenuContent({
  className,
  sx,
  children,
  ...props
}: NavigationMenuContentProps) {
  const [centerOffset, setCenterOffset] = useState(0)

  useEffect(() => {
    const updateCenterOffset = () => {
      // Obtener el elemento trigger más cercano para calcular la posición
      const triggerElement = document.querySelector('[data-slot="navigation-menu-trigger"]')
      if (triggerElement) {
        const triggerRect = triggerElement.getBoundingClientRect()
        const viewportCenter = window.innerWidth / 2
        const triggerCenter = triggerRect.left + (triggerRect.width / 2)
        const offset = viewportCenter - triggerCenter
        setCenterOffset(offset)
      }
    }

    // Actualizar al montar y cuando cambie el tamaño de ventana
    updateCenterOffset()
    window.addEventListener('resize', updateCenterOffset)
    
    return () => window.removeEventListener('resize', updateCenterOffset)
  }, [])

  return (
    <Box
      component={RadixNavigationMenu.Content}
      data-slot="navigation-menu-content"
      className={className}
      sx={{
        position: 'absolute',
        top: 45,
        left: centerOffset,
        transform: 'translateX(-50%)',
        zIndex: 50,
        mt: 1.5,
        overflow: 'hidden',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        border: '6px solid #1D1D1D',
        backgroundColor: 'primary.main',
        p: 0, 
        color: 'white',
        ...sx
      }}
      {...props}
    >
        {children}
    </Box>
  )
}




type NavigationMenuContentItemProps = React.ComponentProps<
  typeof RadixNavigationMenu.Link
> & { sx?: any }
export function NavigationMenuContentItem({
  children,
  className,
  sx,
  ...props
}: NavigationMenuContentItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isReducedMotion = useReducedMotion()

  const interactionProps = !isReducedMotion && {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false),
  }

  return (
    <Box
      component={RadixNavigationMenu.Link}
      data-slot="navigation-menu-content-item"
      className={className}
      sx={{
        position: 'relative',
        borderRadius: '8px',
        p: 2,
        outline: 'none',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        ...(isReducedMotion && {
          '&:hover': {
          }
        }),
        ...sx
      }}
      {...props}
      {...interactionProps}
    >
      <Box sx={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {children}
      </Box>
      {!isReducedMotion && (
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                borderRadius: 'inherit',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                type: 'spring',
                bounce: 0,
              }}
            />
          )}
        </AnimatePresence>
      )}
    </Box>
  )
}



// home, blog
type NavigationMenuLinkProps = React.ComponentProps<
  typeof RadixNavigationMenu.Link
> & { sx?: any }
export function NavigationMenuLink({
  className,
  sx,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <Box
      component={RadixNavigationMenu.Link}
      data-slot="navigation-menu-link"
      className={className}
      sx={{
        fontFamily: "Funnel Display",
        display: 'flex',
        height: '36px',
        alignItems: 'center',
        gap: 1,
        color: '#B8B8B8',
        borderRadius: '12px',
        px: 2,
        py: 1,
        fontWeight: 500,
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'all 0.2s',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: '#1D1D1D',
          boxShadow: '0 2px 0 0 #575757',
          color: 'white'
        },
        ...sx
      }}
      {...props}
    />
  )
}