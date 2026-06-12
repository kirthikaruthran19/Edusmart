// =======================
// Statistics Cards
// =======================

export const teacherStats = [
  {
    id: 1,
    title: "Total Classes",
    value: 4,
    subtitle: "This Semester",
    change: "0%",
    trend: "up",
    icon: "book",
  },

  {
    id: 2,
    title: "Total Students",
    value: 15,
    subtitle: "vs last semester",
    change: "5%",
    trend: "up",
    icon: "students",
  },

  {
    id: 3,
    title: "Avg Attendance",
    value: "86",
    subtitle: "vs last month",
    change: "3%",
    trend: "up",
    icon: "attendance",
  },

  {
    id: 4,
    title: "Pending Tasks",
    value: 3,
    subtitle: "vs Yesterday",
    change: "1%",
    trend: "down",
    icon: "activity",
  },
];

// =======================
// Attendance Chart
// =======================

export const attendanceData = [
  {
    month: "Jan",
    rate: 92,
  },

  {
    month: "Feb",
    rate: 88,
  },

  {
    month: "Mar",
    rate: 94,
  },

  {
    month: "Apr",
    rate: 85,
  },

  {
    month: "May",
    rate: 91,
  },

  {
    month: "Jun",
    rate: 96,
  },

  {
    month: "Jul",
    rate: 89,
  },

  {
    month: "Aug",
    rate: 93,
  },
];

// =======================
// Student Performance
// =======================

export const performanceData = [
  {
    month: "Jan",
    avg: 72,
    top: 88,
  },

  {
    month: "Feb",
    avg: 75,
    top: 90,
  },

  {
    month: "Mar",
    avg: 68,
    top: 85,
  },

  {
    month: "Apr",
    avg: 78,
    top: 92,
  },

  {
    month: "May",
    avg: 80,
    top: 95,
  },

  {
    month: "Jun",
    avg: 82,
    top: 96,
  },

  {
    month: "Jul",
    avg: 77,
    top: 91,
  },

  {
    month: "Aug",
    avg: 84,
    top: 92,
  },
];

// =======================
// Timetable
// =======================

export const timetableData = [
  {
    id: 1,
    time: "8:00 AM",
    duration: "1h",
    subject: "Mathematics",
    className: "Class 10-A",
    room: "Room 201",
    type: "Lecture",
  },

  {
    id: 2,
    time: "10:00 AM",
    duration: "1h",
    subject: "Advanced Algebra",
    className: "Class 10-C",
    room: "Room 105",
    type: "Lab",
  },

  {
    id: 3,
    time: "12:00 PM",
    duration: "30m",
    subject: "Lunch Break",
    className: "",
    room: "",
    type: "",
  },

  {
    id: 4,
    time: "1:00 PM",
    duration: "1h",
    subject: "Mathematics",
    className: "Class 10-B",
    room: "Room 202",
    type: "Lecture",
  },

  {
    id: 5,
    time: "3:00 PM",
    duration: "1h",
    subject: "Statistics",
    className: "Class 10-D",
    room: "Room 106",
    type: "Lecture",
  },
];

// =======================
// Recent Activity
// =======================

export const recentActivityData = [
  {
    id: 1,
    icon: "📌",
    title: "Emma Rodriguez submitted Assignment #5",
    time: "10 minutes ago",
  },

  {
    id: 2,
    icon: "📌",
    title: "Attendance marked for Class 10-A",
    time: "1 hour ago",
  },

  {
    id: 3,
    icon: "📌",
    title: "Marks published for Unit 3 Exam - 10-B",
    time: "2 hours ago",
  },

  {
    id: 4,
    icon: "💬",
    title: "New message from David Johnson (Parent of Noah)",
    time: "3 hours ago",
  },
];

// =======================
// Notifications
// =======================

export const notificationData = [
  {
    id: 1,
    color: "#f59e0b",
    message: "Isabella Davis attendance below 70% threshold",
  },

  {
    id: 2,
    color: "#3b82f6",
    message: "Parent teacher conference scheduled for Friday",
  },

  {
    id: 3,
    color: "#10b981",
    message: "Exam results for Class 10-A approved by Admin",
  },
];

// =======================
// Teacher Profile
// =======================

export const teacherProfile = {
  name: "Sarah Johnson",
  role: "Teacher",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
};

// =======================
// Sidebar Menu
// =======================

export const teacherMenu = [
  {
    id: 1,
    label: "Dashboard",
    path: "/teacher-dashboard",
    icon: "dashboard",
  },

  {
    id: 2,
    label: "My Classes",
    path: "/my-classes",
    icon: "classes",
  },

  {
    id: 3,
    label: "Students",
    path: "/students",
    icon: "students",
  },

  {
    id: 4,
    label: "Attendance",
    path: "/teacher-attendance",
    icon: "attendance",
  },

  {
    id: 5,
    label: "Assignment",
    path: "/assignments",
    icon: "assignment",
  },

  {
    id: 6,
    label: "Exams & Marks",
    path: "/exams-marks",
    icon: "exam",
  },

  {
    id: 7,
    label: "Messages",
    path: "/messages",
    icon: "message",
  },

  {
    id: 8,
    label: "Settings",
    path: "/teacher-settings",
    icon: "settings",
  },
];