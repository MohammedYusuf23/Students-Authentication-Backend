import { Student } from '../models/studentModel.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  try {
    const {
      // Personal Details
      fullName,
      dob,
      gender,
      email,
      phone,
      aadhaar,
      bloodGroup,
      pannumber,

      // Academic Details
      registerNumber,
      department,
      course,
      year,
      semester,
      qualification,
      schoolName,
      board,
      marks,
      admissionDate,

      // Family Details
      fatherName,
      fatherOccupation,
      fatherPhone,
      motherName,
      motherOccupation,
      motherPhone,
      guardianName,
      guardianRelationship,
      guardianPhone,
      familyIncome,

      // Permanent Address
      permanentPlot,
      permanentStreet,
      permanentArea,
      permanentdistrict,
      permanentState,
      permanentPincode,

      // Emergency Contact
      emergencyName,
      relationship,
      emergencyPhone,

      // Security
      password,
    } = req.body;

    const registerExist = await Student.findOne({ registerNumber });

    if (registerExist) {
      return res.status(409).json({
        success: false,
        message: 'Register Number already exists',
      });
    }

    const emailExist = await Student.findOne({ email });

    if (emailExist) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      fullName,
      dob,
      gender,
      email,
      phone,
      aadhaar,
      bloodGroup,
      pannumber,

      registerNumber,
      department,
      course,
      year,
      semester,
      qualification,
      schoolName,
      board,
      marks,
      admissionDate,

      fatherName,
      fatherOccupation,
      fatherPhone,
      motherName,
      motherOccupation,
      motherPhone,
      guardianName,
      guardianRelationship,
      guardianPhone,
      familyIncome,

      permanentPlot,
      permanentStreet,
      permanentArea,
      permanentdistrict,
      permanentState,
      permanentPincode,

      emergencyName,
      relationship,
      emergencyPhone,

      password: hashedPassword,
    });

    const newStudent = student.toObject();
    delete newStudent.password;

    res.status(201).json({
      success: true,
      message: 'Student Registered Successfully',
      student: newStudent,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
