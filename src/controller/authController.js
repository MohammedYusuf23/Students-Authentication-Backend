import { Student } from '../models/studentModel.js';

// ==============================
// Student Signup
// ==============================

export const signup = async (req, res) => {
  try {
    const {
      name,
      department,
      registerNumber,
      email,
      password,
      age,
      dob,
      phone,
      fatherName,
      motherName,
      address,
    } = req.body;

    // Check Register Number
    const registerExist = await Student.findOne({
      registerNumber,
    });

    if (registerExist) {
      return res.status(409).json({
        success: false,
        message: 'Register Number already exists',
      });
    }

    // Check Email
    const emailExist = await Student.findOne({
      email,
    });

    if (emailExist) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists',
      });
    }

    // Create Student

    const student = await Student.create({
      name,
      department,
      registerNumber,
      email,
      password,
      age,
      dob,
      phone,
      fatherName,
      motherName,
      address,
    });

    res.status(201).json({
      success: true,
      message: 'Student Registered Successfully',
      student,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==============================
// Student Login
// ==============================

export const login = async (req, res) => {
  try {
    const { registerNumber, password } = req.body;

    const student = await Student.findOne({
      registerNumber,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    if (student.password !== password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Password',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Login Successful',

      student: {
        id: student._id,
        name: student.name,
        department: student.department,
        registerNumber: student.registerNumber,
        email: student.email,
        age: student.age,
        dob: student.dob,
        phone: student.phone,
        fatherName: student.fatherName,
        motherName: student.motherName,
        address: student.address,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==============================
// Student Profile
// ==============================

export const profile = async (req, res) => {
  try {
    const { registerNumber } = req.params;

    const student = await Student.findOne({
      registerNumber,
    }).select('-password');

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
