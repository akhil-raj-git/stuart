import Settings from '../models/settingsModel.js';

export const getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({ userId: req.user.id });

    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }

    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateSettings = async (req, res) => {
  const { focusMode, reminders, theme } = req.body;

  try {
    const settings = await Settings.findOneAndUpdate(
      { userId: req.user.id },
      { focusMode, reminders, theme },
      { new: true, upsert: true } // Create if not exists
    );

    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};