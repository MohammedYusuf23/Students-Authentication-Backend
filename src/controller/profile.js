import { Student } from '../models/studentModel.js';

export const profile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
