// Footer Component
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Twitter, GitHub, Instagram } from '@mui/icons-material';
import { footerData } from '@/mock/footer.mock';
import XIcon from './ui/XIcon';

const Footer = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <LinkedIn />;
      case 'twitter':
        return <XIcon />; // Usamos tu icono personalizado para Twitter
      case 'github':
        return <GitHub />;
      case 'instagram':
        return <Instagram />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #292929',
        backgroundColor: '#0b0b0b',
        color: 'white',
        pt: 6,
        pb: 4,
        mt: 'auto'
      }}
    >
      <Box
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          px: 3
        }}
      >
        {/* Main Footer Content */}
        <Box
          sx={{
            
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '2fr 1fr 1fr 1.5fr'
            },
            gap: 4,
            mb: 15,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: '#60a5fa',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {footerData.companyInfo.name}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                mb: 3
              }}
            >
              {footerData.companyInfo.description}
            </Typography>
            
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
            {footerData.socialLinks.map((social) => (
            <IconButton
                key={social.name}
                href={social.href}
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  width: 36,
                  height: 36,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white'
                  }
                }}
              >
                {getSocialIcon(social.icon)}
              </IconButton>
            ))}
            </Box>
          </Box>

          {/* Navigation Links */}
          {footerData.sections.map((section) => (
            <Box key={section.title}>
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
                {section.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#60a5fa',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    {link.title}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}

          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                mb: 2
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem',
                  lineHeight: 1.5
                }}
              >
                {footerData.contact.address}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem'
                }}
              >
                {footerData.contact.city}
              </Typography>
              <Link
                href={`mailto:${footerData.contact.email}`}
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#60a5fa'
                  }
                }}
              >
                {footerData.contact.email}
              </Link>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem',
                  mt: 1
                }}
              >
                {footerData.contact.kvk}
              </Typography>
              <Link
                href={`tel:${footerData.contact.phone}`}
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#60a5fa'
                  }
                }}
              >
                {footerData.contact.phone}
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #292929',
            pt: 3,
            textAlign: 'left'
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem'
            }}
          >
            {footerData.copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;