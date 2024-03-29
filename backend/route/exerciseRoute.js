
const express = require('express')
const router = express.Router()
const {exerciseController} = require('../controller')



router.get('/', (req, res) => {
    exerciseController.getExercise(req, res)
})

router.post('/create', (req, res) => {
    exerciseController.createExercise(req, res)
})

router.delete('/delete', (req, res) => {
    exerciseController.deleteExercise(req, res)
})

router.put('/update', (req, res) => {
    exerciseController.updateExercise(req, res)
})


const exerciseRoute = router
module.exports = exerciseRoute;