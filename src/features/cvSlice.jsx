import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {},
  showNationality: false,
  showWebsite: false,
  showLinkedin: false,

  education: [],

  workExperience: [],
  showAdditionalFields: false,

  skills: [],
};

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    toggleNationality: (state) => {
      state.showNationality = !state.showNationality;
    },
    toggleWebsite: (state) => {
      state.showWebsite = !state.showWebsite;
    },
    toggleLinkedin: (state) => {
      state.showLinkedin = !state.showLinkedin;
    },

    setEducation: (state, action) => {
      state.education.push(action.payload);
    },

    setWorkExperience: (state, action) => {
      state.workExperience.push(action.payload);
    },

    toggleAdditionalFields: (state) => {
      state.showAdditionalFields = !state.showAdditionalFields;
    },

    setSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    setCVData: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  setCVData,
  setPersonalInfo,
  toggleNationality,
  toggleWebsite,
  toggleLinkedin,

  setEducation,

  setWorkExperience,
  toggleAdditionalFields,
  setSkill,
} = cvSlice.actions;

export const selectPersonalInfo = (state) => state.cv.personalInfo;
export const selectUi = (state) => ({
  showNationality: state.cv.showNationality,
  showWebsite: state.cv.showWebsite,
  showLinkedin: state.cv.showLinkedin,
  showAdditionalFields: state.cv.showAdditionalFields,
});

export const selectEducation = (state) => state.cv.education;

export const selectWorkExperience = (state) => state.cv.workExperience;

export const selectSkills = (state) => state.cv.skills;

export default cvSlice.reducer;
