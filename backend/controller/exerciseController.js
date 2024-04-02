const { Exercise } = require('../model');
const axios = require('axios');

const getAPIExercise = async (res) => {
        let options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            params: {bodyPart : 'waist'},
            headers: {
                'X-RapidAPI-Key':  'c7f7ea136cmshc530c01bf71ff71p141257jsn95c25dc7f9a8',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' 
            }
          }; 
try {
	const response = await axios.request(options);
	res.send({result: 200, data:response.data});
} catch (error) {
	console.error(error);
    res.send({ result: 500, error: error.message });
}
}

const getAllExercise = async(req, res) => {
  const exercise = await Exercise.find({})

  console.log('BODY: ',req.params.bodyPart)
  try {
      res.status(200).send({ success: true, message: 'All Exercise Fetched', data: exercise});
  } catch (error) {
    res.status(500).send({ result: 500, error: error.message });
  }
}

const getExercise = async(req, res) => {
  
  try {
    const exercise = await Exercise.find(req.params.bodyPart);
      if (!exercise) {
      }
      res.send({ result: 200, success: true, message: 'single Exercise Fetched' ,data: exercise });
  } catch (error) {
    res.status(500).send({ result: 500, error: error.message });
  }
}

const createExercise = async(req, res) => {
    const exercise = await Exercise.create(req.body);
    try {
        res.status(201).send({ success: true, message: 'Exercise Created' ,data: exercise });
    } catch (error) {
        res.status(500).send({ result: 500, error: error.message });
    }
    }

const updateExercise = async(req, res) => {
    const exercise = await Exercise.findByIdAndUpdate(req.params.exercise , req.body);
    try {
        if (!exercise) {
            res.send({ result: 404, error: 'Exercise doesn\'t exists' });
        }
        res.send({ result: 200, success: true, message: 'single Exercise Updated' ,data: exercise });
    } catch (error) {
        res.send({ result: 500, error: error.message });
    }
}

const deleteExercise = async(req, res) => {
    const exercise = await Exercise.findByIdAndDelete(req.params.exerciseId);
    try {
        if (!exercise) {
            res.send({ result: 404, error: 'Exercise doesn\'t exists' });
        }
        res.send({ result: 200, success: true, message: 'single Exercise Deleted' ,data: exercise });
    } catch (error) {
        res.send({ result: 500, error: error.message });
    }
}


const exerciseController = {
getAPIExercise, getAllExercise, getExercise, createExercise, updateExercise, deleteExercise
};

module.exports = exerciseController;