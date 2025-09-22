// Footer Component
import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { footerData } from '@/mock/footer.mock';
import { LogoSvg } from '@/assets/icons';
import IconSocialMedia from './ui/IconSocialMedia';
import { footerNavigation } from '@/mock/footerNavigation.mock';

const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #262626',
        backgroundColor: '#0b0b0b',
        color: 'white',
        pt: 11,
        mt: 'auto'
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          px: 8,
        }}
      >
        {/* Main Footer Content */}
        <Box
          sx={{
            bgcolor: 'pink',
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            mb: 20,
          }}
        >
          {/* Company Info */}
          <Box 
          sx={{
            bgcolor: 'red',
            width: '30%'
          }}
          >
            <Box mb={3}>
              <LogoSvg/>
            </Box>
            <Typography
            variant='h9'
            >
              Mood Global Service B.V.
            </Typography>
            <Typography
            mb={4}
            mt={1}
            variant='body2'
            >
              {footerData.companyInfo.description}
            </Typography>
            
            {/* Social Links */}
            <IconSocialMedia/>
          </Box>

          <Grid
          gap={16}
          sx={{
            ml: 'auto',
            bgcolor: 'green',
            display: 'flex',
            width: '55%',
            flexDirection: 'row',
          }}
          >
            {/* Navigation */}
            <Box sx={{ bgcolor: 'blue' }}>
              {footerNavigation
                .filter(section => section.id === 1)
                .map(section => (
                  <Box key={section.id}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 2
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {section.home && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem',
                            lineHeight: 1.5
                          }}
                        >
                          {section.home}
                        </Typography>
                      )}
                      {section.services && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.services}
                        </Typography>
                      )}
                      {section.siteLab && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.siteLab}
                        </Typography>
                      )}
                      {section.blockAI && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.blockAI}
                        </Typography>
                      )}
                      {section.about && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.about}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
            </Box>

            {/* Legal */}
            <Box sx={{ bgcolor: 'blue' }}>
              {footerNavigation
                .filter(section => section.id === 2)
                .map(section => (
                  <Box key={section.id}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 2
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {section.privacyPolicy && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem',
                            lineHeight: 1.5
                          }}
                        >
                          {section.privacyPolicy}
                        </Typography>
                      )}
                      {section.termsAndConditions && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.termsAndConditions}
                        </Typography>
                      )}
                      {section.cookiePolicy && (
                        <Typography
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.875rem'
                          }}
                        >
                          {section.cookiePolicy}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
            </Box>

            {/* Contact */}
            <Box sx={{ 
              bgcolor: 'blue',
              width: 'fit-content' 
              }}>
              {footerNavigation
                .filter(section => section.id === 3)
                .map(section => (
                  <div key={section.id}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 2
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {section.address && (
                        <Typography
                        sx={{
                          width: '15rem',
                        }}
                        >
                          {section.address}
                        </Typography>
                      )}
                      {section.email && (
                        <Link
                          href={`mailto:${section.email}`}
                        >
                          {section.email}
                        </Link>
                      )}
                      {section.kvk && (
                        <Typography
                        >
                          {section.kvk}
                        </Typography>
                      )}
                      {section.phone && (
                        <Link
                          href={`tel:${section.phone}`}
                        >
                          {section.phone}
                        </Link>
                      )}
                    </Box>
                  </div>
                ))}
            </Box>

          </Grid>
        </Box>

      </Box>
        {/* Copyright */}
        <Box
          py={3}
          sx={{
            borderTop: '1px solid #262626',
            display: 'flex',
            width: 'full',
            textAlign: 'left'
          }}
        >
          <Typography
            ml={5}
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem'
            }}
          >
            {footerData.copyright}
          </Typography>
        </Box>
    </Box>
  );
};

export default Footer;