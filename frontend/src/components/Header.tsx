import React from 'react';
import { Box } from '@mui/material';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/NavigationMenu";
import { ChevronRight } from 'lucide-react';
import { headerData } from '@/mock/navbar.mock';

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
          sx={{
            color: '#60a5fa',
            fontSize: '1.25rem',
            fontWeight: 'bold'
          }}
        >
          {headerData.logo}
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
        <Box
          component="button"
          sx={{
            backgroundColor: '#1F37E1',
            color: 'white',
            px: 3,
            py: 1,
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: '#1d4ed8'
            }
          }}
        >
          <span>{headerData.ctaButton.text}</span>
          <ChevronRight size={16} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;