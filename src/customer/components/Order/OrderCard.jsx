import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}} className='text-left'>
            <Grid xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='m-2 w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70" alt="" />
                    <div className='mt-2 ml-5 space-y-2'>
                        <p className=''>Men slim Mid Rise Kurta </p>
                        <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold '>color: Black</p>
                    </div>
                </div>

            </Grid>
            <Grid item xs={2}>
                <p>₹1099</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div className='text-center'>
                    <p>
                    <AdjustIcon sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>
                <p className='text-xs'>
                    Yor Item Has Been Delivered
                </p>
                    
                </div> } 
                {false && <p>
                    <span> 
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard