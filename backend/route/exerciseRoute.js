
const express = require('express')
const {exerciseController} = require('../controller')

const router = express.Router()



router.get('/search', (req, res) => {
    exerciseController.getAPIExercise(res);
})

router.get('/:bodyPart', (req, res) => {
    exerciseController.getAllExercise(req, res)
})

router.post('/', (req, res) => {
    exerciseController.createExercise(req, res)
})

router.delete('/:id', (req, res) => {
    exerciseController.deleteExercise(req, res)
})

router.put('/update', (req, res) => {
    exerciseController.updateExercise(req, res)
})


const exerciseRoute = router
module.exports = exerciseRoute;