import React,{useContext} from 'react'
import{Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow"
    sx={{ cursor: 'pointer', padding: '10px', color: '#423B35', fontSize: '5px', position: 'absolute', bottom: '0', left: '70%', transform: 'translateY(-%)', display: 'flex',  }}
>
      <img src={RightArrowIcon} alt="right-arrow" width="10" heigth="10"  />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow"
    sx={{ cursor: 'pointer', padding: '5px', color: '#423B35', fontSize: '5px', position: 'absolute', bottom: '0', left: '0', transform: 'translateY(-%)', display: 'flex'  }}
    >
      <img src={LeftArrowIcon}alt="left-arrow" width="10" heigth="10" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu  >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 30px"
      >
           <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
        ))}
    </ScrollMenu>
  );


export default HorizontalScrollbar


//Thanks to javascriptmastery for some very helpful tips and tricks.