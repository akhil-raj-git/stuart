import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  estimatedTime: {
    type: Number,
    required: true,
  },
  actualTime: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'completed', 'archived'],
    default: 'pending',
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  googleCalendarEventId: {
    type: String,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Task = mongoose.model('Task', taskSchema);

export default Task;