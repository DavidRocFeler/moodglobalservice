import { Box, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box
    sx={{
      bgcolor: 'primary.main',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Typography>
      Build Here Grow Anywhere
      </Typography>
    </Box>
  )
}

export default Home