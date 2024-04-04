const { Exercise } = require("../model");
const axios = require("axios");

const getAPIExercises = async (bodyPart = "waist") => {
  let options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { bodyPart: bodyPart },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };
  const response = await axios.request(options);
  return response.data;
};


const importExercises = async (req, res) => {
    try {
        const exercises = await getAPIExercises()
        console.log(exercises)
        const savedExercises = await Exercise.create(exercises);
        res.send({ result: 201,  data: { numberOfExercises: savedExercises.length } })
    } catch (error) {
        console.error(error);
        res.send({ result: 500, error: error.message });    
    }
}

const getAllExercise = async (req, res) => {
  const exercise = await Exercise.find({});

  //   console.log('BODY: ',req.params.bodyPart)
  try {
    res
      .status(200)
      .send({ success: true, message: "All Exercise Fetched", data: exercise });
  } catch (error) {
    res.status(500).send({ result: 500, error: error.message });
  }
};

const getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.find(req.params.bodyPart);
    if (!exercise) {
    }
    res.send({
      result: 200,
      success: true,
      message: "single Exercise Fetched",
      data: exercise,
    });
  } catch (error) {
    res.status(500).send({ result: 500, error: error.message });
  }
};

const createExercise = async (req, res) => {
  const exercise = await Exercise.create(req.body);
  try {
    res
      .status(201)
      .send({ success: true, message: "Exercise Created", data: exercise });
  } catch (error) {
    res.status(500).send({ result: 500, error: error.message });
  }
};

const updateExercise = async (req, res) => {
  const exercise = await Exercise.findByIdAndUpdate(
    req.params.exercise,
    req.body
  );
  try {
    if (!exercise) {
      res.send({ result: 404, error: "Exercise doesn't exists" });
    }
    res.send({
      result: 200,
      success: true,
      message: "single Exercise Updated",
      data: exercise,
    });
  } catch (error) {
    res.send({ result: 500, error: error.message });
  }
};

const deleteExercise = async (req, res) => {
  const exercise = await Exercise.findByIdAndDelete(req.params.exerciseId);
  try {
    if (!exercise) {
      res.send({ result: 404, error: "Exercise doesn't exists" });
    }
    res.send({
      result: 200,
      success: true,
      message: "single Exercise Deleted",
      data: exercise,
    });
  } catch (error) {
    res.send({ result: 500, error: error.message });
  }
};

const exerciseController = {
  importExercises,
  getAllExercise,
  getExercise,
  createExercise,
  updateExercise,
  deleteExercise,
};

module.exports = exerciseController;
