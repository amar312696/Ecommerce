import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div className='text-left'>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='tex-White ' sx={{width:56,height:56,bgcolor:"#9155fd"}}></Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ram</p>
                        <p className='opacity-70'>September 7,2023</p>
                    </div>
                </div>

                <Rating value={4.5} name='half-rating' readOnly precision={0.5}></Rating>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquam!</p>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default ProductReviewCard