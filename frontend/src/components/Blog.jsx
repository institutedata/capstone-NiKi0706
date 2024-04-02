import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import {TextField} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from '@mui/material';
import { Link } from 'react-router-dom';

//Blog page with 3 cards and different images and content used MUI for structure
const Blog = () => {
  return (
    <div>
  <Box className='blog'>
    <Box></Box>
</Box>
<Container maxWidth="lg" className='blogsContainer'>
<Typography variant="h1" className='blogTitle' sx={{textAlign: 'center', fontFamily:'Montserrat', border:'1px solid ', color: 'whitesmoke', margin:'40px', fontWeight: '600', fontSize: {lg: '84px', xs: '30px'}}}>
  Fitness Articles
</Typography>
<Grid container spacing={20}>
<Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500 }} className='card'>
  <CardMedia
        sx={{ height: 200  }}
        image="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
        title="Fitness"
      />
        <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
           Fitness
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
          <p> HIIT Workout:
    30:30 Model: 30 seconds of high-intensity exercise followed by 30 seconds of lower intensity for active recovery repeated for 6-10 minutes1.
    30-20-10 Model: Work intervals are organized into 60-second increments. The first 30 seconds low-intensity, then 20 seconds of moderate-intensity followed by 10 seconds of an all-out</p>
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={2}>
<Typography variant='subtitle 1' component='p'>
  17-Mar-2024
</Typography>
<Typography className='Comment' color={'lightgray'} fontSize={10} sx={{

}} >

    <TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}} // this changes the input text size
      />
      <Button variant="contained" type="submit" sx={{
        backgroundColor: '#796a6a', ":hover": {backgroundColor: 'gray'}
      }}>Submit</Button>      
     <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton>
</Typography>

        </Box>
          
        </CardActions>
      </Card>
  </Grid>
  <Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500}}className='card'>
  <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
        title="Fitness"
      />
        <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
           Fitness
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
          <p> HIIT Workout:
    30:30 Model: 30 seconds of high-intensity exercise followed by 30 seconds of lower intensity for active recovery repeated for 6-10 minutes1.
    30-20-10 Model: Work intervals are organized into 60-second increments. The first 30 seconds low-intensity, then 20 seconds of moderate-intensity followed by 10 seconds of an all-out</p>
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={2}>
<Typography variant='subtitle 1' component='p'>
  17-Mar-2024
</Typography>
<Typography className='Comment' color={'darkgray'} fontSize={15}>

<TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}} // this changes the input text size
      />
      <Button variant="contained" type="submit" sx={{
         backgroundColor: '#796a6a', ":hover": {backgroundColor: 'gray'}
      }}>Submit</Button>      
           <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton>
  </Typography>

        </Box>
         
        </CardActions>
      </Card>
  </Grid>
  
</Grid>
</Container>
<Container maxWidth="lg" className='blogsContainer'>
<Typography variant="h1" className='blogTitle' sx={{textAlign: 'center', fontFamily:'Montserrat',border:'1px solid ', color: 'whitesmoke', margin:'40px', fontWeight: '600', fontSize: {lg: '84px', xs: '30px'}}}>
Nutrition Articles
</Typography>
<Grid container spacing={20}>
<Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500}} className='card'>
  <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        title="Nutrition"
      />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
          Nutrition
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
          <p>Fruits & vegetables are rich in essential nutrients. They provide vitamins like A, C, and E, minerals potassium and magnesium, and fiber. 
            These nutrients are crucial for our body’s functions, boosting our immune system and in aiding digestion, low in calories but high in volume. 
            They add color, flavor, and texture to meals </p>
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={4}>
<Typography variant='subtitle 1' component='p'>
17-Mar-2024
</Typography>
<Typography className='Comment' color={'darkgray'} fontSize={15}>

<TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}} // this changes the input text size
      />
        <Button variant="contained" type="submit" sx={{
         backgroundColor: '#796a6a', ":hover": {backgroundColor: 'gray'}
      }}>Submit</Button>      
           <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton> 
  </Typography>
          </Box>
        </CardActions>
      </Card>
  </Grid>
  <Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500}} className='card'>
  <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG51dHJpdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        title="Nutrition"
      />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
          Nutrition
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
          <p>Fruits & vegetables are rich in essential nutrients. They provide vitamins like A, C, and E, minerals potassium and magnesium, and fiber. 
            These nutrients are crucial for our body’s functions, boosting our immune system and in aiding digestion, low in calories but high in volume. 
            They add color, flavor, and texture to meals </p>
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={4}>
<Typography variant='subtitle 1' component='p'>
17-Mar-2024
</Typography>
<Typography className='Comment' color={'darkgray'} fontSize={15}>

<TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}}
      />
        <Button variant="contained" type="submit" sx={{
        backgroundColor: '#796a6a', ":hover": {backgroundColor: 'gray'}
      }}>Submit</Button>      
           <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton>   
  </Typography>
          </Box>
        </CardActions>
      </Card>
  </Grid>
  
</Grid>
</Container>
<Container maxWidth="lg" className='blogsContainer'>
<Typography variant="h1" className='blogTitle' sx={{textAlign: 'center', fontFamily:'Montserrat',border:'1px solid ', color: 'whitesmoke', margin:'40px', fontWeight: '600', fontSize: {lg: '84px', xs: '30px'}}}>
  My Favourite Articles
</Typography>
<Grid container spacing={20}>
<Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500}} className='card'>
  <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
        title="My favourites"
      />
        <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
           My Favourites
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
            <p>

Literature: Discussing books, authors, genres, and literary devices.
Movies and Music: Talking about different genres, artists, releases, and reviews.
Travel: Sharing information about different countries, cultures, tourist attractions, and travel tips.
Hobbies: Favourite hobbies to do
Hikes and Walks: Best walks I've done
</p>
            
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={2}>
<Typography variant='subtitle 1' component='p'>
17-Mar-2024
</Typography>
<Typography className='Comment' color={'darkgray'} fontSize={15}>

<TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}}
      />
       <Button variant="contained" type="submit" sx={{
        backgroundColor: '#796a6a',
      }}>Submit</Button>     
           <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton>   
  </Typography>
          </Box>
        
        </CardActions>
      </Card>
  </Grid>
  <Grid item xs={12} sm={8} md={6}>
  <Card sx={{ maxWidth: 500}} className='card'>
  <CardMedia
        sx={{ height: 200 }}
        image="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
        title="My favourites"
      />
        <CardContent>
        <Typography gutterBottom variant="h3" component="div" sx={{
            fontSize: '30px', font:'Montserrat", sans-serif'
            }}>
           My Favourites
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{
            fontSize: '20px', font:'Montserrat", sans-serif'
          }}>
            <p>

Literature: Discussing books, authors, genres, and literary devices.
Movies and Music: Talking about different genres, artists, releases, and reviews.
Travel: Sharing information about different countries, cultures, tourist attractions, and travel tips.
Hobbies: Favourite hobbies to do
Hikes and Walks: Best walks I've done
</p>
            
          </Typography>
        </CardContent>
        <Button size="small" sx={{ justifyContent: 'left', marginLeft: 1, color:'grey'}}>Learn More</Button>
        <CardActions>
          <Box ml={2}>
<Typography variant='subtitle 1' component='p'>
17-Mar-2024
</Typography>
<Typography className='Comment' color={'darkgray'} fontSize={15}>

<TextField sx={{
      width: '100%', marginBottom: 2, marginLeft:-2, marginTop: 2
    }}
        label="Comment"
        inputProps={{style: {fontSize: 20}}}
      />
       <Button variant="contained" type="submit" sx={{
         backgroundColor: '#796a6a', ":hover": {backgroundColor: 'gray'}
      }}>Submit</Button>     
            <IconButton
  onClick={() => {
    // Fetch data from database here
  }}
  sx={{
    position: 'absolute',
    right: -2,
    bottom: 0,
    marginBottom: 2
  }}
>
  <FavoriteBorderIcon />
</IconButton> 
  </Typography>
          </Box>
        
        </CardActions>
      </Card>
  </Grid>
</Grid>
</Container>
     {/* Add a button to navigate to the page where you can create a new post */}
     <Box textAlign="center" mt={4}>
        <Link to="/CreatePost" style={{ textDecoration: 'none' }}>
          <Button variant="contained" type='submit' color='primary'>Create New Post</Button>
        </Link>
      </Box>
</div>
  )
}

export default Blog




