import {
  GraduationCap,
  Users,
  BookOpen,
  IndianRupee,
  Bell,
  CheckCircle,
} from "lucide-react";

export const statistics = [
  {
    id: 1,
    icon: <GraduationCap size={22} />,
    value: "1,250",
    title: "Total Students",
    subtitle: "Enrolled this year",
    growth: "+3.5%",
  },
  {
    id: 2,
    icon: <Users size={22} />,
    value: "85",
    title: "Total Staff",
    subtitle: "Active employees",
    growth: "+1.2%",
  },
  {
    id: 3,
    icon: <BookOpen size={22} />,
    value: "48",
    title: "Total Classes",
    subtitle: "Across all grades",
    growth: "+0.8%",
  },
  {
    id: 4,
    icon: <IndianRupee size={22} />,
    value: "152k",
    title: "Total Revenue",
    subtitle: "Collected this year",
    growth: "+5.1%",
  },
];




export const recentActivities = [
  {
    id: 1,
    icon: <GraduationCap size={18} />,
    type: "admission",
    title: "Liam Smith admitted to Grade 5",
    initials: "AE",
    user: "Admin Elena",
    time: "3 minutes ago",
  },
  {
    id: 2,
    icon: <IndianRupee size={18} />,
    type: "fee",
    title: "Emily Brown paid fee for Term 1",
    initials: "EB",
    user: "Emily Brown",
    time: "12 minutes ago",
  },
  {
    id: 3,
    icon: <GraduationCap size={18} />,
    type: "admission",
    title: "Emily Brown admitted to Grade 6",
    initials: "AE",
    user: "Admin Elena",
    time: "25 minutes ago",
  },
  {
    id: 4,
    icon: <CheckCircle size={18} />,
    type: "attendance",
    title: "Attendance marked for Grade 5A",
    initials: "SC",
    user: "Sarah Connor",
    time: "2 hours ago",
  },
  {
    id: 5,
    icon: <Bell size={18} />,
    type: "announcement",
    title: "Annual sports day announcement published",
    initials: "PJ",
    user: "Principal Johnson",
    time: "3 hours ago",
  },
];



export const alerts = [
  {
    id: 1,
    title: "New Admission Request",
    description: "A new admission request has been submitted for Grade 5",
    type: "info",
  },
  {
    id: 2,
    title: "Approval Request",
    description: "Sarah Connor submitted a leave request",
    type: "info",
  },
  {
    id: 3,
    title: "Fee Payment Overdue",
    description: "12 students have overdue fee payments",
    type: "warning",
  },
  {
    id: 4,
    title: "Attendance Alert",
    description: "Attendance below 75% for 5 students this week",
    type: "warning",
  },
];



export const approvals = [
  {
    id: 1,
    name: "Sarah Connor",
    reason: "Medical leave request for 3 days",
    badge: "Leave",
  },
  {
    id: 2,
    name: "James Porter",
    reason: "Request to correct attendance",
    badge: "Attendance Edit",
  },
  {
    id: 3,
    name: "Robert Chen",
    reason: "Attendance correction",
    badge: "Attendance Edit",
  },
];