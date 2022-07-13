import {Stack } from '@mui/material'
import React from 'react'

const Card = ({item}) => {
  return (
    <>
   

<Stack alignItems={'center'}>
<img src={item.image} alt={item.description} className="image1"/>

{item.description}
</Stack>






    
    </>
  )
}

export default Card