export const conversations = [
  {
    id: 1,
    name: "Sarah Smith",
    role: "Parent (Alice Freeman)",
    category: "parent",
    avatar: "https://i.pravatar.cc/150?img=32",
    online: true,
    unread: 0,
    lastMessage:
      "That's wonderful news! Thank you for the update.",
    lastTime: "10:42 AM",

    messages: [
      {
        id: 1,
        sender: "teacher",
        text: "Good morning Mrs. Smith! I wanted to give you a quick update on Alice's performance in class lately.",
        time: "09:35 AM",
      },

      {
        id: 2,
        sender: "parent",
        text: "Good morning Mr. Fox! Oh, I'd love to hear about it. How is she doing?",
        time: "09:40 AM",
      },

      {
        id: 3,
        sender: "teacher",
        text: "She is doing fantastically. She just scored a 92% on her mid-term physics exam! Her practical work has also improved significantly.",
        time: "09:41 AM",
      },

      {
        id: 4,
        sender: "parent",
        text: "That's wonderful news! Thank you for the update and your continued support. She has been studying very hard.",
        time: "10:42 AM",
      },
    ],
  },

  {
    id: 2,
    name: "Michael Johnson",
    role: "Parent (Ryan Johnson)",
    category: "parent",
    avatar: "https://i.pravatar.cc/150?img=68",
    online: false,
    unread: 2,
    lastMessage:
      "Can we schedule a meeting regarding Ryan's progress?",
    lastTime: "09:15 AM",

    messages: [
      {
        id: 1,
        sender: "parent",
        text: "Hello Teacher, can we schedule a meeting regarding Ryan's progress?",
        time: "09:15 AM",
      },
    ],
  },

  {
    id: 3,
    name: "David Martinez",
    role: "Student",
    category: "student",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
    unread: 0,
    lastMessage:
      "I have submitted my assignment successfully.",
    lastTime: "Yesterday",

    messages: [
      {
        id: 1,
        sender: "student",
        text: "Good evening sir. I have submitted my assignment successfully.",
        time: "05:20 PM",
      },

      {
        id: 2,
        sender: "teacher",
        text: "Great work David. I will review it shortly.",
        time: "05:25 PM",
      },
    ],
  },

  {
    id: 4,
    name: "Emma Chen",
    role: "Student",
    category: "student",
    avatar: "https://i.pravatar.cc/150?img=47",
    online: false,
    unread: 0,
    lastMessage:
      "Thank you for the feedback on my project.",
    lastTime: "Yesterday",

    messages: [
      {
        id: 1,
        sender: "teacher",
        text: "Emma, your science project was excellent.",
        time: "04:00 PM",
      },

      {
        id: 2,
        sender: "student",
        text: "Thank you for the feedback and encouragement!",
        time: "04:12 PM",
      },
    ],
  },

  {
    id: 5,
    name: "Priya Patel",
    role: "Student",
    category: "student",
    avatar: "https://i.pravatar.cc/150?img=25",
    online: true,
    unread: 1,
    lastMessage:
      "Sir, could you please explain question 5?",
    lastTime: "Mon",

    messages: [
      {
        id: 1,
        sender: "student",
        text: "Sir, could you please explain question 5 from today's worksheet?",
        time: "03:10 PM",
      },
    ],
  },

  {
    id: 6,
    name: "James Wilson",
    role: "Parent (Sophia Wilson)",
    category: "parent",
    avatar: "https://i.pravatar.cc/150?img=15",
    online: false,
    unread: 0,
    lastMessage:
      "Thank you for arranging the parent meeting.",
    lastTime: "Sun",

    messages: [
      {
        id: 1,
        sender: "parent",
        text: "Thank you for arranging the parent meeting.",
        time: "11:20 AM",
      },
    ],
  },

  {
    id: 7,
    name: "Sophia Brown",
    role: "Student",
    category: "student",
    avatar: "https://i.pravatar.cc/150?img=41",
    online: true,
    unread: 0,
    lastMessage:
      "I completed the extra practice questions.",
    lastTime: "Sat",

    messages: [
      {
        id: 1,
        sender: "student",
        text: "Sir, I completed the extra practice questions.",
        time: "07:30 PM",
      },

      {
        id: 2,
        sender: "teacher",
        text: "Excellent work Sophia. Keep it up.",
        time: "07:35 PM",
      },
    ],
  },

  {
    id: 8,
    name: "Robert Taylor",
    role: "Parent (Kevin Taylor)",
    category: "parent",
    avatar: "https://i.pravatar.cc/150?img=60",
    online: false,
    unread: 0,
    lastMessage:
      "Kevin will be absent tomorrow.",
    lastTime: "Fri",

    messages: [
      {
        id: 1,
        sender: "parent",
        text: "Kevin will be absent tomorrow due to a medical appointment.",
        time: "08:00 AM",
      },

      {
        id: 2,
        sender: "teacher",
        text: "Thank you for informing me.",
        time: "08:05 AM",
      },
    ],
  },
];