import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  focusMode: {
    type: Boolean,
    default: true,
  },
  reminders: {
    type: Boolean,
    default: true,
  },
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light',
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;