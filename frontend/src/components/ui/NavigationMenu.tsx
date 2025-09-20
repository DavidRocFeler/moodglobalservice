'use client' // @NOTE: Add in case you are using Next.js

import { useState } from 'react'
import { Box } from '@mui/material'

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
      sx={{
        position: 'relative',
        display: 'flex',
        maxWidth: 'max-content',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
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
        flex: 1,
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        ...sx
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
        width: 'max-content',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        backgroundColor: 'transparent',
        px: 2,
        py: 1,
        fontWeight: 500,
        fontSize: '0.875rem',
        color: 'white',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#60a5fa'
        },
        '&:focus': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#60a5fa'
        },
        '&[data-state=open]': {
          color: '#60a5fa',
          backgroundColor: 'rgba(255,255,255,0.1)'
        },
        '&:disabled': {
          pointerEvents: 'none',
          opacity: 0.5
        },
        ...sx
      }}
      {...props}
    >
      {children}
      <svg
        style={{
          position: 'relative',
          top: '1px',
          marginLeft: '4px',
          width: '12px',
          height: '12px',
          transition: 'transform 0.2s'
        }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </Box>
  )
}

type NavigationMenuContentProps = React.ComponentProps<
  typeof RadixNavigationMenu.Content
> & { sx?: any }

export function NavigationMenuContent({
  className,
  sx,
  ...props
}: NavigationMenuContentProps) {
  return (
    <Box
      component={RadixNavigationMenu.Content}
      data-slot="navigation-menu-content"
      className={className}
      sx={{
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 50,
        mt: 1.5,
        width: '100%',
        overflow: 'hidden',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        backgroundColor: '#2d3748',
        p: 2.5,
        color: 'white',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        '@media (min-width: 768px)': {
          left: '50%',
          width: 'auto',
          transform: 'translateX(-50%)'
        },
        ...sx
      }}
      {...props}
    />
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
            backgroundColor: 'rgba(255,255,255,0.1)'
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
        display: 'flex',
        height: '36px',
        alignItems: 'center',
        gap: 1,
        borderRadius: '6px',
        px: 2,
        py: 1,
        fontWeight: 500,
        fontSize: '0.875rem',
        outline: 'none',
        transition: 'all 0.2s',
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#60a5fa'
        },
        '&:focus': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#60a5fa'
        },
        '&[data-active=true]': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#60a5fa'
        },
        ...sx
      }}
      {...props}
    />
  )
}