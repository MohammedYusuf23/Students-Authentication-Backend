import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
    },

    department: {
      type: String,
      required: [true, 'Department is required'],
      uppercase: true,
      trim: true,
    },

    registerNumber: {
      type: String,
      required: [true, 'Register Number is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
    },

    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: 17,
      max: 35,
    },

    dob: {
      type: Date,
      required: [true, 'Date of Birth is required'],
    },

    phone: {
      type: String,
      required: [true, 'Phone Number is required'],
    },

    fatherName: {
      type: String,
      required: [true, 'Father Name is required'],
      trim: true,
    },

    motherName: {
      type: String,
      required: [true, 'Mother Name is required'],
      trim: true,
    },

    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model('Student', studentSchema);
