import React,{ useState } from 'react';
import { Box } from '@mui/material';
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';
import WorkoutBanner from './WorkoutBanner';
import ExerciseVideos from './ExerciseVideos';




const Workouts = () => {
  const[bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart)

  return (

    <Box>
      <WorkoutBanner />
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        />
      <Exercises
        exercises={exercises}
       setExercises={setExercises} 
       bodyPart={bodyPart} 
       />
       <ExerciseVideos />
    </Box>
  )
}

export default Workouts
