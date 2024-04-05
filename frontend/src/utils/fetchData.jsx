export const exerciseOptions = {
   
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c7f7ea136cmshc530c01bf71ff71p141257jsn95c25dc7f9a8',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
}

//where the data is fetched from the api - ExerciseDB
//future implementation - to fetch the data from the database and to secure the API key in .env file