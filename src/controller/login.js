import { Student } from '../models/studentModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export const login = async (req, res) => {
  try {
    const { registerNumber, password } = req.body;

    const student = await Student.findOne({ registerNumber });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Password',
      });
    }

    const token = jwt.sign(
      {
        id: student._id,
        registerNumber: student.registerNumber,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: true, 
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

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
        plotNumber: student.plotNumber,
        street: student.street,
        area: student.area,
        district: student.district,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
