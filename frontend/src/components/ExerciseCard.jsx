import React from 'react'
import {Link} from 'react-router-dom';
import {Box, Stack, Typography, Button} from '@mui/material';

//setting up the exercise card component using the stack, typography and button components from material ui
//future enhancements would be to replace the image with a gif or video of the exercise
const ExerciseCard = ({ exercise }) => (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.name} alt={exercise.description} loading="lazy" /> 
      <Stack direction="row">
        <Button sx={{ ml: '10px', color: '#fff', background: '#796a6a', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize', width:'40px' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#b98181', fontSize: '14px', borderRadius: '10px', textTransform: 'capitalize', width:'50px' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#796a6a" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
      <Typography ml="21px" color="#796a6a" fontWeight="bold" sx={{ fontSize: { lg: '16px', xs: '14px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.description}
      </Typography>
    </Link>
  );

  export default ExerciseCard


//Thanks to javascriptmastery for some very helpful tips and tricks.
// Exercise exercise.gifUrl