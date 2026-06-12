import { students } from "./studentsData";
const attendanceList = [
  98, 82, 100, 68, 94,
  88, 96, 71, 91, 84,
  97, 86, 92, 65, 95,
  80, 89, 93, 76, 99,
  87, 90, 74, 96, 83,
];

const marksList = [
  92, 76, 88, 58, 84,
  79, 90, 62, 81, 74,
  95, 78, 85, 55, 89,
  70, 83, 87, 67, 93,
  80, 86, 73, 91, 77,
];

const classList = [
  "10-A",
  "10-B",
  "10-C",
  "10-D",
];

export const studentPageData = students.map((student, index) => {
  const attendance = attendanceList[index];
  const marks = marksList[index];

  let attendanceStatus = "Excellent";

  if (attendance >= 95) {
    attendanceStatus = "Excellent";
  } else if (attendance >= 90) {
    attendanceStatus = "Good";
  } else if (attendance >= 75) {
    attendanceStatus = "Need Attention";
  } else {
    attendanceStatus = "At Risk";
  }

  let performanceGrade = "Grade A+";

  if (marks >= 90) {
    performanceGrade = "Grade A+";
  } else if (marks >= 85) {
    performanceGrade = "Grade A";
  } else if (marks >= 80) {
    performanceGrade = "Grade A-";
  } else if (marks >= 75) {
    performanceGrade = "Grade B+";
  } else if (marks >= 70) {
    performanceGrade = "Grade B";
  } else if (marks >= 60) {
    performanceGrade = "Grade C+";
  } else {
    performanceGrade = "Grade C";
  }

  return {
    ...student,

    studentId: student.id,

    className: classList[index % classList.length],

    attendance,
    attendanceStatus,

    marks,
    performanceGrade,
  };
});