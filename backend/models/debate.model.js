const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Response = require("../models/response.model");
const responseSchema = Response.schema;


const debateSchema = new Schema(
  {
    tier: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    responses: {
      type: [responseSchema],
    },
    date: {
      type: Date,
      required: true
    },
    isEvaluated: {
      type: Boolean,
      required: true
    },
    winner: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
const Debate = mongoose.model("Debate", debateSchema);

module.exports = Debate;
