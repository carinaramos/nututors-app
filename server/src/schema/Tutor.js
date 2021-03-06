"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const TutorSchema = new Schema({
    // "lastUpdated": "4/1/2021 8:21 PM",
    lastUpdated: {
        type: Schema.Types.String,
        required: false
    },
    // "imageURL" : "https://tutorcruncher-private.s3.amazonaws.com/nututors/photos/4003c4e5-6d4d-4f54-9584-0ecf8e55d45f.jpg?AWSAccessKeyId=AKIAJWIBPSEUSFJZFQ4Q&Signature=WKcXOD5jA9HMoZy%2FX4O4jJnDwac%3D&Expires=1622742565",
    imageURL: {
        type: Schema.Types.String,
        required: false
    },
    // "firstName" : "Avi",
    firstName: {
        type: Schema.Types.String,
        required: false
    },
    // "lastName" : "Chung",
    lastName: {
        type: Schema.Types.String,
        required: false
    },
    // "email": "avichung2023@u.northwestern.edu",
    email: {
        type: Schema.Types.String,
        required: false
    },
    // "phone": "(206) 452-9790",
    phone: {
        type: Schema.Types.String,
        required: false
    },
    // "gender": "Male",
    gender: {
        type: Schema.Types.String,
        required: false
    },
    // "hoursWorking": 0,
    hoursWorking: {
        type: Schema.Types.String,
        required: false
    },
    // "hoursDesired": 3,
    hoursDesired: {
        type: Schema.Types.String,
        required: false
    },
    // "zoom": True,
    zoom: {
        type: Schema.Types.Boolean,
        required: false
    },
    // "onCampus": False,
    onCampus: {
        type: Schema.Types.Boolean,
        required: false
    },
    // "offCampus": "No",
    offCampus: {
        type: Schema.Types.Boolean,
        required: false
    },
    // "car": "No",
    car: {
        type: Schema.Types.Boolean,
        required: false
    },
    // "vax": "Fully vaccinated, tested regularly",
    vax: {
        type: Schema.Types.String,
    },
    // "areas": "Math, Science, Foreign Language, Standardized Testing, AP Classes",
    areas: {
        type: [Schema.Types.String],
        required: false
    },
    // "math": "Elementary Math, Pre-Algebra, Algebra, Algebra 2, Trigonometry, Geometry, Pre-Calculus, Statistics, Single-Variable Calculus, Multi-Variable Calculus",
    math: {
        type: [Schema.Types.String],
        required: false
    },
    // "science": "Biology, Chemistry, Physics, Environmental Science, Earth Science",
    science: {
        type: [Schema.Types.String],
        required: false
    },
    // "english": "",
    english: {
        type: [Schema.Types.String],
        required: false
    },
    // "socialStudies": "",
    socialStudies: {
        type: [Schema.Types.String],
        required: false
    },
    // "worldLanguage": "Spanish",
    worldLanguage: {
        type: [Schema.Types.String],
        required: false
    },
    // "testPrep": "ACT Writing, SAT Reading, ACT Reading, SAT Writing & Language, ACT Math, SAT Math, ACT Science",
    testPrep: {
        type: [Schema.Types.String],
        required: false
    },
    // "apClasses": "AP Calculus AB, AP Biology, AP Calculus BC, AP Chemistry, AP Environmental Science, AP English Language and Composition, AP Statistics",
    apClasses: {
        type: [Schema.Types.String],
        required: false
    },
    // "other": "",
    other: {
        type: [Schema.Types.String],
        required: false
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
    tutor.firstName = obj.firstName;
    tutor.lastName = obj.lastName;
    tutor.imageURL = obj.imageURL;
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
