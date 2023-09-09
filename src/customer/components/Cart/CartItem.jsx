import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-left-top"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold"> Mens Kurta Slim fit stylish</p>
          <p className="opacity-70 text-left">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: Crishtalliyo 2fashion</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-5">
            <p className="font-semibold">₹199</p>
            <p className="line-through opacity-50">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{color:"#B42C30"}}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className=" py-1 px-7 border rounded-sm">3</span>
            <IconButton sx={{color:"#491E66"}}>
              <AddCircleOutlineIcon />
            </IconButton>
        </div>
        <div>
          <Button sx={{color:"#491E66"}}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
