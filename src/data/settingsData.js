export const schoolProfile = {
  logo: "",

  schoolName: "Lincoln Academy",

  email: "info@lincolnacademy.edu",

  phone: "+1 (555) 849-3208",

  website: "www.lincolnacademy.edu",

  address:
    "123 Education Drive, Springfield, IL 628501",

  board: "CBSE",

  establishedYear: "1985",
};

export const permissions = [
  {
    id: 1,
    module: "Dashboard",
    admin: true,
    teacher: true,
    staff: true,
    parent: true,
  },

  {
    id: 2,
    module: "User Management",
    admin: true,
    teacher: false,
    staff: false,
    parent: false,
  },

  {
    id: 3,
    module: "Academic",
    admin: true,
    teacher: true,
    staff: false,
    parent: false,
  },

  {
    id: 4,
    module: "Attendance",
    admin: true,
    teacher: true,
    staff: true,
    parent: true,
  },

  {
    id: 5,
    module: "Fees",
    admin: true,
    teacher: false,
    staff: false,
    parent: true,
  },

  {
    id: 6,
    module: "Reports",
    admin: true,
    teacher: true,
    staff: false,
    parent: true,
  },

  {
    id: 7,
    module: "Documents",
    admin: true,
    teacher: false,
    staff: false,
    parent: false,
  },

  {
    id: 8,
    module: "Settings",
    admin: true,
    teacher: false,
    staff: false,
    parent: false,
  },
];

export const academicYears = [
  {
    id: 1,
    year: "2025-2026",
    startDate: "2025/08/01",
    endDate: "2026/06/30",
    status: "Current",
  },

  {
    id: 2,
    year: "2024-2025",
    startDate: "2024/08/01",
    endDate: "2025/06/30",
    status: "Past",
  },

  {
    id: 3,
    year: "2023-2024",
    startDate: "2023/08/01",
    endDate: "2024/06/30",
    status: "Past",
  },
];

export const integrations = [
  {
    id: 1,

    name: "Stripe",

    description:
      "Accept online fee payments via cards",

    enabled: true,

    secretKey: "",
    webhookSecret: "",
  },

  {
    id: 2,

    name: "Razorpay",

    description:
      "Indian payment gateway for fee collection",

    enabled: true,

    keyId: "",
    keySecret: "",
  },
];