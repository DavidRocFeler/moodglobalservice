// Footer Component
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LogoSvg } from '@/assets/icons';
import IconSocialMedia from './ui/IconSocialMedia';
import { footerNavigation } from '@/mock/footerNavigation.mock';

const Footer = () => {
  return (
    <Box
      component="footer"
      mt="auto"
      pt={11}
      borderTop="1px solid #262626"
      bgcolor="primary.main"
      color="white"
    >
      <Box mx="auto" px={8}>
        {/* Main Footer Content */}
        <Box display="flex" flexDirection="row" gap={4} mb={20}>
          {/* Company Info */}
          <Box width="30%">
            <Box mb={3}>
              <LogoSvg />
            </Box>
            {footerNavigation
              .filter(section => section.id === 1)
              .map(section => (
                <Box key={section.id}>
                  <Typography variant="h9">
                    {section.title}
                  </Typography>
                  <Typography variant="body2" mt={1} mb={4}>
                    {section.blockchainFirm}
                  </Typography>
                </Box>
              ))}
            
            {/* Social Links */}
            <IconSocialMedia />
          </Box>

          <Grid 
            container 
            gap={16} 
            ml="auto" 
            width="55%"
            flexDirection="row"
          >
            {/* Navigation */}
            <Box pt={1}>
              {footerNavigation
                .filter(section => section.id === 2)
                .map(section => (
                  <Box key={section.id}>
                    <Typography variant="body1" mb={3}>
                      {section.title}
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {section.home && (
                        <Typography variant="body3" mb={2}>
                          {section.home}
                        </Typography>
                      )}
                      {section.services && (
                        <Typography variant="body3" mb={2}>
                          {section.services}
                        </Typography>
                      )}
                      {section.siteLab && (
                        <Typography variant="body3" mb={2}>
                          {section.siteLab}
                        </Typography>
                      )}
                      {section.blockAI && (
                        <Typography variant="body3" mb={2}>
                          {section.blockAI}
                        </Typography>
                      )}
                      {section.about && (
                        <Typography variant="body3" mb={2}>
                          {section.about}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
            </Box>

            {/* Legal */}
            <Box pt={1}>
              {footerNavigation
                .filter(section => section.id === 3)
                .map(section => (
                  <Box key={section.id}>
                    <Typography variant="body1" mb={3}>
                      {section.title}
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {section.privacyPolicy && (
                        <Typography variant="body3" mb={2}>
                          {section.privacyPolicy}
                        </Typography>
                      )}
                      {section.termsAndConditions && (
                        <Typography variant="body3" mb={2}>
                          {section.termsAndConditions}
                        </Typography>
                      )}
                      {section.cookiePolicy && (
                        <Typography variant="body3" mb={2}>
                          {section.cookiePolicy}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
            </Box>

            {/* Contact */}
            <Box pt={1} width="fit-content">
              {footerNavigation
                .filter(section => section.id === 4)
                .map(section => (
                  <Box key={section.id}>
                    <Typography variant="body1" mb={3}>
                      {section.title}
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {section.address && (
                        <Typography variant="body3" mb={2} width="15rem">
                          {section.address}
                        </Typography>
                      )}
                      {section.email && (
                        <Typography variant="body3" mb={2}>
                          {section.email}
                        </Typography>
                      )}
                      {section.kvk && (
                        <Typography variant="body3" mb={2}>
                          {section.kvk}
                        </Typography>
                      )}
                      {section.phone && (
                        <Typography variant="body3" mb={2}>
                          {section.phone}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Copyright */}
      <Box 
        py={3} 
        borderTop="1px solid #262626" 
        display="flex" 
        width="full" 
        textAlign="left"
      >
        <Typography variant="body3" ml={5}>
          © 2024 Mood Global Services B.V. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;