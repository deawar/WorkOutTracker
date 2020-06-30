const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: () => new Date()
		},
		exercises: [
			{
					type:{
						type: String,
						trim: true,
						required: "Please enter an exercise Type"
					},
					name: {  
						type: String,
						trim: true,
						required: "Please enter an exercise Name"
					},
					duration: {
						type: Number,
						trim: true,
						required: "Please enter an exercise Duration"
					},
					weight:{
						type: Number,
					},
					reps:{
						type: Number,
					},
					sets:{
						type: Number,
					},
					distance:{
						type: Number,
					},
				}
		]
	}
)

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;