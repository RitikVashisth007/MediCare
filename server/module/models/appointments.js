const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    gender: {
      type: String,
    },

    address: {
      type: String,
    },
    preExistingConditions: {
      type: String,
    },
    surgeries: {
      type: String,
    },
    allergies: {
      type: String,
    },
    medications: {
      type: String,
    },
    symptomsDescription: {
      type: String,
    },
    symptomsDuration: {
      type: String,
    },
    symptomsSeverity: {
      type: String,
    },
    concern: {
      type: String,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    prescription: {
      type: String,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
