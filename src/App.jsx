import { HashRouter, Routes, Route } from "react-router-dom";
// Admin Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import UserManagement from "./pages/UserManagement/UserManagement";
import Academic from "./pages/Academic/Academic";
import Attendance from "./pages/Attendance/Attendance";
import Fees from "./pages/Fees/Fees";
import Communication from "./pages/Communication/Communication";
import Reports from "./pages/Reports/Reports";
import Documents from "./pages/Documents/Documents";
import Settings from "./pages/Settings/Settings";
import Approvals from "./pages/Approvals/Approvals";

//Login page
import Login from "./pages/Login/Login";

// Teacher Pages
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import MyClasses from "./pages/MyClasses/MyClasses";
import Students from "./pages/Students/Students";
import TeacherAttendance from "./pages/TeacherAttendance/TeacherAttendance";
import TeacherAssignments from "./pages/TeacherAssignments/TeacherAssignments";
import TeacherExamsMarks from "./pages/TeacherExamsMarks/TeacherExamsMarks";
import TeacherMessages from "./pages/TeacherMessages/TeacherMessages";
import TeacherSettings from "./pages/TeacherSettings/TeacherSettings";

// Parent Pages
import ParentDashboard from "./pages/ParentDashboard/ParentDashboard";
import ParentAttendance from "./pages/ParentAttendance/ParentAttendance";
import ParentAssignments from "./pages/ParentAssignments/ParentAssignments";
import ParentExamResults from "./pages/ParentExamResults/ParentExamResults";
import ParentMessages from "./pages/ParentMessages/ParentMessages";
import ParentSettings from "./pages/ParentSettings/ParentSettings";


function App() {
  return (
   <HashRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin-dashboard" element={<Dashboard />}/>
        <Route path="/users" element={<UserManagement />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/approvals" element={<Approvals />} />

        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Teacher */}
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/my-classes" element={<MyClasses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teacher-attendance" element={<TeacherAttendance />} />
        <Route path="/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/teacher/exams-marks" element={<TeacherExamsMarks />} />
        <Route path="/messages" element={<TeacherMessages />} />
        <Route path="/teacher-settings" element={<TeacherSettings />} />

        {/* Parent */}
        <Route path="/parent-dashboard" element={<ParentDashboard />} />

        <Route path="/parent-attendance" element={<ParentAttendance />} />

        <Route path="/parent-assignments" element={<ParentAssignments />} />

        <Route path="/parent-exam-results" element={<ParentExamResults />} />

        <Route path="/parent-messages" element={<ParentMessages />} />

        <Route path="/parent-settings" element={<ParentSettings />} />
      </Routes>
    </HashRouter>
  );
}

export default App;