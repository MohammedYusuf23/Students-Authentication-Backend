import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    // =======================
    // Personal Details
    // =======================
    fullName: {
      type: String,
      required: [true, 'Full Name is required'],
      trim: true,
    },

    dob: {
      type: Date,
      required: [true, 'Date of Birth is required'],
    },

    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['Male', 'Female', 'Other'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, 'Phone Number is required'],
      trim: true,
    },

    aadhaar: {
      type: String,
      required: [true, 'Aadhaar Number is required'],
      unique: true,
      trim: true,
    },

    bloodGroup: {
      type: String,
      required: [true, 'Blood Group is required'],
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },

    pannumber: {
      type: String,
      required: [true, 'PAN Number is required'],
      uppercase: true,
      trim: true,
    },

    // =======================
    // Academic Details
    // =======================
    registerNumber: {
      type: String,
      required: [true, 'Register Number is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },

    department: {
      type: String,
      required: [true, 'Department is required'],
      uppercase: true,
      trim: true,
    },

    course: {
      type: String,
      required: [true, 'Course is required'],
      trim: true,
    },

    year: {
      type: String,
      required: [true, 'Year is required'],
    },

    semester: {
      type: String,
      required: [true, 'Semester is required'],
    },

    qualification: {
      type: String,
      required: [true, 'Qualification is required'],
      trim: true,
    },

    schoolName: {
      type: String,
      required: [true, 'School/College Name is required'],
      trim: true,
    },

    board: {
      type: String,
      required: [true, 'Board/University is required'],
      trim: true,
    },

    marks: {
      type: String,
      required: [true, 'Marks are required'],
    },

    admissionDate: {
      type: Date,
      required: [true, 'Admission Date is required'],
    },

    // =======================
    // Family Details
    // =======================
    fatherName: {
      type: String,
      required: [true, 'Father Name is required'],
      trim: true,
    },

    fatherOccupation: {
      type: String,
      required: [true, 'Father Occupation is required'],
      trim: true,
    },

    fatherPhone: {
      type: String,
      required: [true, 'Father Phone is required'],
      trim: true,
    },

    motherName: {
      type: String,
      required: [true, 'Mother Name is required'],
      trim: true,
    },

    motherOccupation: {
      type: String,
      required: [true, 'Mother Occupation is required'],
      trim: true,
    },

    motherPhone: {
      type: String,
      required: [true, 'Mother Phone is required'],
      trim: true,
    },

    guardianName: {
      type: String,
      trim: true,
      default: '',
    },

    guardianRelationship: {
      type: String,
      trim: true,
      default: '',
    },

    guardianPhone: {
      type: String,
      trim: true,
      default: '',
    },

    familyIncome: {
      type: Number,
      required: [true, 'Family Income is required'],
    },

    // =======================
    // Permanent Address
    // =======================
    permanentPlot: {
      type: String,
      required: true,
      trim: true,
    },

    permanentStreet: {
      type: String,
      required: true,
      trim: true,
    },

    permanentArea: {
      type: String,
      required: true,
      trim: true,
    },

    permanentdistrict: {
      type: String,
      required: true,
      trim: true,
    },

    permanentState: {
      type: String,
      required: true,
      trim: true,
    },

    permanentPincode: {
      type: String,
      required: true,
      trim: true,
    },

    // =======================
    // Emergency Contact
    // =======================
    emergencyName: {
      type: String,
      required: [true, 'Emergency Contact Name is required'],
      trim: true,
    },

    relationship: {
      type: String,
      required: [true, 'Relationship is required'],
      trim: true,
    },

    emergencyPhone: {
      type: String,
      required: [true, 'Emergency Phone is required'],
      trim: true,
    },

    // =======================
    // Account
    // =======================
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model('Student', studentSchema);
