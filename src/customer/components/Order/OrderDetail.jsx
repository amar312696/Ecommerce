import React from 'react'
import AddressCard from '../Checkout/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7 text-left'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
          <OrderTracker activeStep={4 }/>
        </div>

        <Grid className=' space-y-4' container>
          {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-mdp-5 border'
          sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid item xs={6}>
              
                <div className='flex items-center space-x-4 text-left m-2'>
                  
                  <img className="w-[7rem] h-[7rem] object-cover object-top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70" alt="" />
                  <div className='space-y-2 ml-5'>
                    <p className='font-semibold'>Men Slim Mid Rise Kurta</p>
                    <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color : pink</span> <span>Size : M</span> </p>
                    <p>Seller: Linaria</p>
                    <p> ₹1800</p>
                  </div>
                </div>
            </Grid>
            <Grid item contained className='px-5'>
              <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'></StarBorderIcon>
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>

          )}
        </Grid>
    </div>
  )
}

export default OrderDetail