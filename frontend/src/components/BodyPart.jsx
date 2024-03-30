
import React from 'react'
import {Stack, Typography} from '@mui/material';

//setting up the body part component using the stack and typography components from material ui

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
 
    justifyContent='center'
    className='bodyPart-card'
    sx={{
      borderTop: bodyPart === item ? '' : '',
        backgroundColor: '#d8909',
        borderBottomLeftRadius: '0px',
        width: '270px',
        height: '260px',
        cursor: 'pointer',
        gap: '50px',
        display: 'flex',
        flexDirection: 'column',

            
        }}
    onClick={() => setBodyPart(item)}
    >
      <img src='https://cdn-icons-png.flaticon.com/128/1719/1719695.png' alt="bodypart"
      style={{
        width: '45px',
        height:'48px'
      }}/>
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize" color={'#3A1212'} >{item}</Typography>
    </Stack>
  )
}

export default BodyPart


//Thanks to javascriptmastery for some very helpful tips and tricks.