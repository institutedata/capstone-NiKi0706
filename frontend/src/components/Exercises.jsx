import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';

import { exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Exercises = ({exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

const indexofLastExercise = currentPage * exercisesPerPage;
const indexofFirstExercise = indexofLastExercise - exercisesPerPage;
const currentExercises = exercises.slice(indexofFirstExercise, indexofLastExercise);

const paginate = (e, value) => {
  setCurrentPage(value);

  window.scrollTo({ top: 1800, behavior: 'smooth' });
};
//fetching the exercises data from the api - exerciseDB
//fetching the data by focusing on the body part selected by the user
useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }


    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);

//returning the exercises component with the exercise card component to display the exercises in more structured way
  return (
<Box id='exercises'
sx={{mt: {lg: '110px'}}}
mt="50px"
p="20px"
>
  <Typography variant="h3" mb="46px" color={'#796a6a'}>

  </Typography>
 <Stack direction="row" sx={{gap: {lg: '110px', xs:'50px'}}}
 flexWrap="wrap" justifyContent="center">
  {exercises.map((exercise, index) =>(
   <ExerciseCard key={index} exercise={exercise}/>
  ))}
 </Stack>
 <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="small"
  
          />
        )}
      </Stack>
</Box>
  )
}

export default Exercises


//Thanks to javascriptmastery for some very helpful tips and tricks.