import { Schema, model } from 'mongoose'

const ScheduleSchema = new Schema({
    inst: {
        type: Schema.Types.ObjectId,
        ref: "Inst"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String
    }
    
})

const Schedule = model("Schedule", ScheduleSchema)
export { Schedule }