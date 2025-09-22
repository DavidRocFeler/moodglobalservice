import { GitHubIcon, InstagramIcon, LinkedinIcon, NotionIcon, XIcon } from '@/assets/icons'
import { Instagram } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const IconSocialMedia = () => {
  return (
    <Box 
    gap={2}
    sx={{
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    }}
    >
        <NotionIcon/>
        <LinkedinIcon/>
        <GitHubIcon/>
        <XIcon/>
        <InstagramIcon/>
    </Box>
  )
}

export default IconSocialMedia