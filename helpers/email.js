export const formattedFormKeyMap = {
  email: "Email",
  fullName: "Full Name",
  age: "Age",
  education: "Highest Level of Education",
  institute: "Institute",
  program: "Field of Study",
  experience: "Relevant Work Experience",
  canadaInstitute: "Institute Admitted to in Canada",
  canadaProgram: "Program of Study in Canada",
  country: "Country You Are Applying From",
  goals: "Future Goals",
  scoresListening: "English Scores in Listening",
  scoresReading: "English Scores in Reading",
  scoresSpeaking: "English Scores in Speaking",
  scoresWriting: "English Scores in Writing",
  isPaidTutionFees: "First Year Tuition Payment",
  paidTutionAmount: "Tuition Fee Paid",
  isGic: "GIC (Guaranteed Investment Certificate)",
  paidGicAmout: "Amount Paid Towards GIC",
};

export const formatFormValue = (value) =>
  value === true ? "Yes" : value === false ? "No" : value;
