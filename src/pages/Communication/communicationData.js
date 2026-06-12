// src/pages/Communication/communicationData.js

export const announcements = [
  {
    id: 1,
    title: "Annual Sports Day 2026",
    priority: "High",
    status: "Published",
    audience: "Everyone",
    author: "Principal Johnson",
    date: "2026-04-10",
    expiry: "2026-04-25",
    color: "#D7264E",
    description:
      "We are excited to announce our annual sports day on April 25th. All students are encouraged to participate in at least one event. Practice sessions start from Monday."
  },

  {
    id: 2,
    title: "Parent Teacher Conference Schedule",
    priority: "Medium",
    status: "Published",
    audience: "Parent, Staff",
    author: "Admin Office",
    date: "2026-04-08",
    expiry: null,
    color: "#FF7A1A",
    description:
      "The parent teacher conference is scheduled for April 20th. Please book your slot via the parent portal. Sessions run from 9AM to 5PM."
  },

  {
    id: 3,
    title: "Library Book Return Reminder",
    priority: "Low",
    status: "Published",
    audience: "Student",
    author: "Library Staff",
    date: "2026-04-08",
    expiry: null,
    color: "#6A6A9F",
    description:
      "Students are reminded to return borrowed books before the due date to avoid late fees."
  },

  {
    id: 4,
    title: "Science Fair Registration Open",
    priority: "Medium",
    status: "Published",
    audience: "Student",
    author: "Science Department",
    date: "2026-04-08",
    expiry: null,
    color: "#FF7A1A",
    description:
      "Registration for the annual Science Fair is now open. Students can submit project proposals before the deadline."
  }
];

export const notifications = {
  today: [
    {
      id: 1,
      type: "admission",
      title: "New Admission Request",
      description:
        "A new admission request has been submitted for Grade 5",
      time: "08.30 AM"
    },

    {
      id: 2,
      type: "warning",
      title: "Fee Payment Overdue",
      description: "12 students have overdue fee payments",
      time: "07.15 AM"
    },

    {
      id: 3,
      type: "warning",
      title: "Attendance Alert",
      description:
        "Attendance below 75% for 5 students this week",
      time: "09.00 AM"
    }
  ],

  yesterday: [
    {
      id: 4,
      type: "info",
      title: "System Update",
      description:
        "A new admission request has been submitted for Grade 5",
      time: "08.30 AM"
    },

    {
      id: 5,
      type: "info",
      title: "New Exam Schedule Posted",
      description:
        "12 students have overdue fee payments",
      time: "07.15 AM"
    },

    {
      id: 6,
      type: "success",
      title: "Grade 5A Attendance Marked",
      description:
        "Attendance below 75% for 5 students this week",
      time: "09.00 AM"
    }
  ],

  earlier: [
    {
      id: 7,
      type: "info",
      title: "Approval Request",
      description:
        "Sarah Connor submitted a leave request",
      time: "08.30 AM"
    },

    {
      id: 8,
      type: "success",
      title: "Student Fee Payment Received",
      description:
        "Liam Smith paid $5,200 tuition fee for Term 1",
      time: "07.15 AM"
    }
  ]
};

export const broadcastStats = [
  {
    id: 1,
    title: "Recipients",
    value: "512+",
    color: "#009966"
  },

  {
    id: 2,
    title: "Total Sent",
    value: "807",
    color: "#3038D6"
  },

  {
    id: 3,
    title: "Email",
    value: "3",
    color: "#A855F7"
  },

  {
    id: 4,
    title: "SMS",
    value: "1",
    color: "#F59E0B"
  }
];

export const recipientGroups = [
  {
    id: 1,
    name: "All Students",
    count: 512
  },

  {
    id: 2,
    name: "All Parents",
    count: 248
  },

  {
    id: 3,
    name: "All Staff",
    count: 47
  },

  {
    id: 4,
    name: "Specific Class",
    count: 32
  }
];

export const channels = [
  {
    id: 1,
    title: "Email",
    description:
      "Send rich HTML email to selected groups."
  },

  {
    id: 2,
    title: "SMS",
    description:
      "Send SMS to registered phone numbers."
  },

  {
    id: 3,
    title: "Email & SMS",
    description:
      "Multi channel broadcast to maximum reach."
  }
];