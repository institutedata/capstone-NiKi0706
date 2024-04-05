import React, {useTheme} from 'react'
import { Box, Typography, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

//importing the exercise videos component to display the exercise videos
//Just manually added some exercise videos to display on the website
//future enhancements would be to fetch the exercise videos from an api

const ExerciseVideos = () => {
  return (
    <Box sx={{marginTop: {lg:'200px', xs: '20px'}}} p='20px'>
    <Typography variant='h3' mb="33px" color='#8b7f7f' alignContent='center' fontWeight={600} sx={{
            fontSize: {lg: "44px", xs: "30px"},
        }} textAlign="center" >
Watch some of my favorite<span style={{color: '#666666', textTransform: 'capitalize'}}></span> exercise videos
    </Typography>
    <Grid container spacing={1} justifyContent='center'>
<Grid item xs={12} sm={8} md={6}></Grid>
    <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'none', bgcolor: 'transparent'}}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/nardrbgqZ00`}
        autoPlay
        controls
        loop
        sx={{width: '20%', height: '20%', borderRadius: '10px'}}
      />
      <CardContent sx={{flex: '1 0 auto', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" color="grey">
        10 MIN BEGINNER LOWER ABS
        </Typography>
     
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
      </Box>
    </Card>
    </Grid>
    
    <Grid container spacing={1}>
<Grid item xs={12} sm={8} md={6}></Grid>
    <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'none', bgcolor: 'transparent'}}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/IT94xC35u6k`}
        autoPlay
        controls
        loop
        sx={{width: '20%', height: '20%', borderRadius: '10px'}}
      />
      <CardContent sx={{flex: '1 0 auto', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" color="grey">
        20 MIN FAT BURNING WORKOUT TOTAL BEGINNERS
        </Typography>
    
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
      </Box>
    </Card>
    </Grid>

    <Grid container spacing={1}>
<Grid item xs={12} sm={8} md={6}></Grid>
    <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'none', bgcolor: 'transparent'}}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/EG2JSMM7xrQ`}
        autoPlay
        controls
        loop
        sx={{width: '20%', height: '20%', borderRadius: '10px'}}
      />
      <CardContent sx={{flex: '1 0 auto', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" color="grey">
        45 MIN FULL BODY WORKOUT
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
      </Box>
    </Card>
    </Grid>
    <Grid container spacing={1}>
<Grid item xs={12} sm={8} md={6}></Grid>
    <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'none', bgcolor: 'transparent'}}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/otmrWml1VYg`}
        autoPlay
        controls
        loop
        sx={{width: '20%', height: '20%', borderRadius: '10px'}}
      />
      <CardContent sx={{flex: '1 0 auto', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" color="grey">
        20 MIN DUMBBELL SHOULDERS & ARMS
        </Typography>
        
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
      </Box>
    </Card>
    </Grid>
    <Grid container spacing={1}>
<Grid item xs={12} sm={8} md={6}></Grid>
    <Card sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'none', bgcolor: 'transparent'}}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/xxVRCzT2a1E`}
        autoPlay
        controls
        loop
        sx={{width: '20%', height: '20%', borderRadius: '10px'}}
      />
      <CardContent sx={{flex: '1 0 auto', width: '20%', height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant="h5" color="grey">
        FULL UPPER BODY WORKOUT
        </Typography>
        
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
      </Box>
    </Card>
    </Grid>   
</Box>

       
  );
  
}

export default ExerciseVideos
