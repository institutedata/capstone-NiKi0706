import React, {useEffect, useState} from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
const [search, setSearch] = useState('')
const [bodyParts, setBodyParts] = useState([])

useEffect(() => {
 const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

    setBodyParts(['all', ...bodyPartsData]);
 }

    fetchExercisesData();
}, [])

const handleSearch = async() => {
    if(search){
        const excerisesData = await fetchData
        ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        console.log(excerisesData);
        const searchedExercises = excerisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
         ||   exercise.bodyPart.toLowerCase().includes(search)
         ||   exercise.equipment.toLowerCase().includes(search)
         ||   exercise.target.toLowerCase().includes(search)
        );

        setSearch("");
        setExercises(searchedExercises);
    }
}
  return (
   
    <Stack alignItems="center" mt="4px" justifyContent="center" p="30px">
        <Typography fontWeight={700} sx={{
            fontSize: {lg: "44px", xs: "30px"},
        }} mb="50px" textAlign="center" color="#8b7f7f">
            Challenge yourself with a new workout
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: {fontWeight: "600", 
                borderRadius: "1px", 
                border: "none",
                },
                width:{lg: "550px", xs: "350px"},
                backgroundColor: "white",
                borderRadius: "1px",
            }}
            heigth="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search for exercises'
            type='text'
            />
            <Button className='search-btn'
            sx={{
                bgcolor: "lightgrey",
                color: "white",
                textTransform: "none",
                width: {lg: "150px", xs: "80px"},
                fontSize:{lg: "25px", xs: "14px"},
                heigth: "76px",
                posistion: "absolute",
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>

 
  )
}

export default SearchExercises

//Thanks to javascriptmastery for some very helpful tips and tricks.