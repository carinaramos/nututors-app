"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TutorSchema = new Schema({
    // "lastUpdated": "4/1/2021 8:21 PM",
    lastUpdated: {
        type: Schema.Types.String,
        required: true
    },
    // "email": "avichung2023@u.northwestern.edu",
    email: {
        type: Schema.Types.String,
        required: true
    },
    // "phone": "(206) 452-9790",
    phone: {
        type: Schema.Types.String,
        required: true
    },
    // "gender": "Male",
    gender: {
        type: Schema.Types.String,
        required: true
    },
    // "hoursWorking": 0,
    hoursWorking: {
        type: Schema.Types.String,
        required: true
    },
    // "hoursDesired": 3,
    hoursDesired: {
        type: Schema.Types.String,
        required: true
    },
    // "zoom": True,
    zoom: {
        type: Schema.Types.Boolean,
        required: true
    },
    // "onCampus": False,
    onCampus: {
        type: Schema.Types.Boolean,
        required: true
    },
    // "offCampus": "No",
    offCampus: {
        type: Schema.Types.Boolean,
        required: true
    },
    // "car": "No",
    car: {
        type: Schema.Types.Boolean,
        required: true
    },
    // "vax": "Fully vaccinated, tested regularly",
    vax: {
        type: Schema.Types.String,
    },
    // "areas": "Math, Science, Foreign Language, Standardized Testing, AP Classes",
    areas: {
        type: [Schema.Types.String],
        required: true
    },
    // "math": "Elementary Math, Pre-Algebra, Algebra, Algebra 2, Trigonometry, Geometry, Pre-Calculus, Statistics, Single-Variable Calculus, Multi-Variable Calculus",
    math: {
        type: [Schema.Types.String],
        required: true
    },
    // "science": "Biology, Chemistry, Physics, Environmental Science, Earth Science",
    science: {
        type: [Schema.Types.String],
        required: true
    },
    // "english": "",
    english: {
        type: [Schema.Types.String],
        required: true
    },
    // "socialStudies": "",
    socialStudies: {
        type: [Schema.Types.String],
        required: true
    },
    // "worldLanguage": "Spanish",
    worldLanguage: {
        type: [Schema.Types.String],
        required: true
    },
    // "testPrep": "ACT Writing, SAT Reading, ACT Reading, SAT Writing & Language, ACT Math, SAT Math, ACT Science",
    testPrep: {
        type: [Schema.Types.String],
        required: true
    },
    // "apClasses": "AP Calculus AB, AP Biology, AP Calculus BC, AP Chemistry, AP Environmental Science, AP English Language and Composition, AP Statistics",
    apClasses: {
        type: [Schema.Types.String],
        required: true
    },
    // "other": "",
    other: {
        type: [Schema.Types.String],
        required: true
    },
    // "notes": ""
    notes: {
        type: Schema.Types.String
    }
});

TutorSchema.statics.create = function(obj) {
    const Tutor = mongoose.model("Tutor", TutorSchema);
    const tutor = new Tutor();

    tutor.lastUpdated = obj.lastUpdated;
    tutor.email = obj.email;
    tutor.phone = obj.phone;
    tutor.gender = obj.gender;
    tutor.hoursWorking = obj.hoursWorking;
    tutor.hoursDesired = obj.hoursDesired;
    tutor.zoom = obj.zoom;
    tutor.onCampus = obj.onCampus;
    tutor.offCampus = obj.offCampus;
    tutor.car = obj.car;
    tutor.vax = obj.vax;
    tutor.areas = obj.areas;
    tutor.math = obj.math;
    tutor.science = obj.science;
    tutor.english = obj.english;
    tutor.socialStudies = obj.socialStudies;
    tutor.worldLanguage = obj.worldLanguage;
    tutor.testPrep = obj.testPrep;
    tutor.apClasses = obj.apClasses;
    tutor.other = obj.other;
    tutor.notes = obj.notes;
    return tutor;
}

module.exports = mongoose.model("Tutor", TutorSchema);
