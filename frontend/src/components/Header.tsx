import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
      pl={20}
      pr={10}
      py={0}
      bgcolor="primary.main"
      display="flex"
      height="4.9375rem"
      alignItems="center"
      width="100%"
      borderBottom="1px solid #292929"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mx="auto"
      >
        {/* Logo */}
        <Box>
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
                      <Box component="ul" display="grid" width="400px" p={2} gap={1}>
                        {item.subItems?.map((subItem) => (
                          <Box component="li" key={subItem.title} sx={{ listStyle: 'none' }}>
                            <NavigationMenuContentItem href={subItem.href}>
                              <Box
                                color="white"
                                fontWeight={500}
                                fontSize="0.875rem"
                                margin={0}
                              >
                                {subItem.title}
                              </Box>
                              <Box
                                color="rgba(255,255,255,0.7)"
                                fontSize="0.75rem"
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
          href='/'
          style={{
            display: 'flex',
            flexDirection: 'row',
            textDecoration: 'none',
            gap: 0
          }}
        >
          <Box marginRight="-1px">
            <IconEndLeft/>
          </Box>
          
          <Button variant="contactUs">
            <Typography
              fontFamily="Funnel Display"
              fontWeight={600}
              letterSpacing="0.0625rem"
            >
              {headerData.ctaButton.text}
            </Typography>
            
            <ArrowRightSvg/>
          </Button> 
          <IconEndRight/>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;