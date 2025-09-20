import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import { headerData } from '@/mock/navbar.mock';
import { ArrowRightSvg, IconEndLeft, IconEndRight, LogoSvg } from '@/assets/icons';
import Link from 'next/link';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#0b0b0b',
        px: 3,
        py: 2,
        width: '100%',
        borderBottom: '1px solid #292929',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          mx: 'auto'
        }}
      >
        {/* Logo */}
        <Box
        >
          <LogoSvg/>
        </Box>

        {/* Navigation Menu */}
        <NavigationMenu sx={{ flex: 1, maxWidth: 'none' }}>
          <NavigationMenuList sx={{ display: 'flex', alignItems: 'center', gap: 4, ml: 6 }}>
            {headerData.menuItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger>
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <Box component="ul" sx={{ display: 'grid', width: '400px', p: 2, gap: 1 }}>
                        {item.subItems?.map((subItem) => (
                          <Box component="li" key={subItem.title} sx={{ listStyle: 'none' }}>
                            <NavigationMenuContentItem href={subItem.href}>
                              <Box
                                component="h3"
                                sx={{
                                  color: 'white',
                                  fontWeight: 500,
                                  fontSize: '0.875rem',
                                  margin: 0
                                }}
                              >
                                {subItem.title}
                              </Box>
                              <Box
                                component="span"
                                sx={{
                                  color: 'rgba(255,255,255,0.7)',
                                  fontSize: '0.75rem'
                                }}
                              >
                                {subItem.description}
                              </Box>
                            </NavigationMenuContentItem>
                          </Box>
                        ))}
                      </Box>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Us Button */}
        <Link
        style={{
          display: 'flex',
          textDecoration: 'none',
          position: 'relative'
        }}
        href='/'
        >
          <IconEndLeft/>
          <Button
            variant='contactUs'
          >
            <Typography
            fontWeight={1000}
            >{headerData.ctaButton.text}</Typography>
            <ArrowRightSvg/>
          </Button>
          <Box 
          sx={{
            position: 'absolute',
            right: '-9px'
          }}
          >
            <IconEndRight/>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;