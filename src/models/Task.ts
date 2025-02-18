import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    Number: { type: String, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    wasRelease: { type: Boolean, default: false },
    CreatedAt: { type: Date, default: Date.now },
    StatusId: { type: Number, default: 1 },
    TaskFatherId: { type: Number, default: 0 },
    TempoLancado: [String],
    estimatedTime: { type: Number, default: 0 },
    comments: [{
        id: Number,
        text: String,
        date: String
    }]
});

export const Task = mongoose.model('Task', taskSchema);

export type TaskType = mongoose.InferSchemaType<typeof taskSchema>;
