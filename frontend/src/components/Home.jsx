import React from 'react';
import Box from '@mui/material/Box';



//used a hero image for the home page.. styling is done in the css file
const Home = () =>{
 
  return ( 
    <div className="">
        <div className="hero">
        <img src=""  className="hero" />
        </div>
        <Box component="section" sx={{
        p: 2,
        color: '#696464',
        fontStyle: 'italic',
        position: { xs: 'static', md: 'absolute' },
        textAlign: 'center',
        bottom: '85px',
        font: 'italic 35px "Montserrat", sans-serif, serif',
        width: { xs: '100%', md: 'auto' },
        margin: { xs: '0 auto', md: '0' },
           }}>
        "Fitness is not about being better than someone else... 
              It's about being better than you used to be."
        </Box>
      {/* <img src={"https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMCUyMHdlaWdodHMlMjBhbmQlMjBtYXRzfGVufDB8fDB8fHww"} alt="" className="w-1/2" />  */}
    </div>
  );
};

export default Home;