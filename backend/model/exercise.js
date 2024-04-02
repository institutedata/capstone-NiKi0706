const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    bodyPart: { type: String, required: true },
    equipment: { type: String, trim: true, required: true },
    gifUrl: { type: String, trim: true, required: true },
    id: { type: String, trim: true, required: true },
    name: { type: String, trim: true},
    //workout: { type: String, trim: true },
    //userId: { type: Schema.Types.ObjectId, ref: 'users' },
    }, {
        timestamps: true,
        collection: "Exercise"
    });

const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;