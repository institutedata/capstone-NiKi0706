// const Exercise = require("../model/exercise");
// const { LOG } = require('../constant')
// const axios = require('axios');

// const getExercise = async (req, res) => {

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   params: {limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': 'c7f7ea136cmshc530c01bf71ff71p141257jsn95c25dc7f9a8',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	res.send({result: 200, data:response.data});
// } catch (error) {
// 	console.error(error);
//     res.send({ result: 500, error: error.message });
// }
// }

// const getAllExercise = async(req, res) => {
//   const exercise = await Exercise.find()
//   try {
//       res.status(200).send({ success: true, message: 'All Exercise Fetched' ,data: exercise});
//   } catch (error) {
//       res.status(404).send({ result: 500, error: error.message });
//   }
// }


// const exerciseController = {
// getExercise,
// };
// module.exports = exerciseController;