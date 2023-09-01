import mongoose from "mongoose";
const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      trim: true,
      required: true,
    },
    experience: {
      type: String,
      trim: true,
      required: true,
    },
    canadaInstitute: {
      type: String,
      trim: true,
      required: true,
    },
    canadaProgram: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: String,
      trim: true,
      required: true,
    },
    goals: {
      type: String,
      required: true,
    },
    scoresListening: {
      type: Number,
      required: true,
    },
    scoresReading: {
      type: Number,
      required: true,
    },
    scoresSpeaking: {
      type: Number,
      required: true,
    },
    scoresWriting: {
      type: Number,
      required: true,
    },
    isPaidTutionFees: {
      type: Boolean,
      required: true,
    },
    paidTutionAmount: {
      type: Number,
      required: true,
    },
    isGic: {
      type: Boolean,
      required: true,
    },
    paidGicAmout: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
