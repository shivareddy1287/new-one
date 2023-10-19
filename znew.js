<BrowserRouter>
  <div>
    <Navbar />
  </div>

  <div style={{ display: "flex" }}>
    <Sidebar />
    <div className="bl-routes-path">
      <Routes>
        {/* <Route path="/leave-tracker/list-view" element={<ListView />} /> */}
        {/* <Route
                path="/leave-tracker/calender-view"
                element={<CalenderView />}
              /> */}
        {/* <Route
                path="/leave-tracker/apply-leave"
                element={<ApplyLeave />}
              /> */}
        {/* <Route
                path="/leave-tracker/leave-applications"
                element={<LeaveApplications />}
              /> */}
        {/* <Route
                path="/leave-tracker/leave-applications/:id"
                element={<LeaveRecord />}
              /> */}
        {/* <Route path="/leave-tracker/holidays" element={<Holidays />} /> */}
        {/* <PrivateProtectRoute
                path="/leave-tracker/add-holiday"
                element={<AddHolidays />}
              /> */}
        <Route element={<PrivateProtectRoute />}>
          <Route path="/leave-tracker/add-holiday" element={<AddHolidays />} />
        </Route>
        {/* <PrivateProtectRoute
                path="/leave-tracker/add-holiday"
                element={<AddHolidays />}
              /> */}
        {/* <Route
                path="/hr-letters/adress-proof"
                element={<AddressProof />}
              /> */}
      </Routes>
    </div>
  </div>
</BrowserRouter>;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
// import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
import "./App.css";
// import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
import Holidays from "./components/LeaveTracker/Holidays/holidays";
import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
// import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
// import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
// import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
// import AddressProof from "./components/AddressProof/AddressProof";

//imports 2
// import LoginPage from "./components/LoginPage/LoginPage";
// import Profile from "./components/Profile/Profile";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
import Layout from "./components/layout/layout";
// import UpdateProfile from "./components/Profile/UpdateProfile";
// import ViewDetails from "./components/Profile/ViewDetails";
// // import Navbar from "./components/Navigation/Admin/Navbar";
// import Team from "./components/Team/Team";
// import Asset from "./components/Asset/Asset";
// import AddAsset from "./components/Asset/AddAsset";
// import UpdateAsset from "./components/Asset/UpdateAsset";
// import DeleteAsset from "./components/Asset/DeleteAsset";
// import ViewAsset from "./components/Asset/ViewAsset";
// import Dummy from "./Dummy/Dummy";
// import Benefit from "./components/Benefit/Benefit";
// import AddBenefit from "./components/Benefit/AddBenefit";
// import DeleteBenefit from "./components/Benefit/DeleteAsset";
// import ViewBenefit from "./components/Benefit/ViewBenefit";
// import UpdateBenefit from "./components/Benefit/UpdateBenefit";
// import ExitDetails from "./components/ExitDetails/ExitDetails";
// import AddExitDetails from "./components/ExitDetails/AddExitDetails";
// import DeleteExitDetails from "./components/ExitDetails/DeleteExitDetails";
// import UpdateExitDetails from "./components/ExitDetails/UpdateExitDetails";
// import ViewExitDetails from "./components/ExitDetails/ViewExitDetails";
// import Designation from "./components/Designation/Designation";
// import AddDesignation from "./components/Designation/AddDesignation";
// import UpdateDesignation from "./components/Designation/UpdateDesignation";
// import DeleteDesignation from "./components/Designation/DeleteDesignation";
// import ViewDesignation from "./components/Designation/ViewDesignation";
// import Department from "./components/Department/Department";
// import AddDepartment from "./components/Department/AddDepartment";
// import DeleteDepartment from "./components/Department/DeleteDepartment";
// import ViewDepartment from "./components/Department/ViewDepartment";
// import UpdateDepartment from "./components/Department/UpdateDepartment";
// import OrgAddProfile from "./components/Organization/OrgProfile/OrgAddProfile";
// import OrgUpdateProfile from "./components/Organization/OrgProfile/OrgUpdateProfile";
// import OrgViewDetails from "./components/Organization/OrgProfile/OrgViewDetails";
// import OrgProfile from "./components/Organization/OrgProfile/OrgProfile";
// import OrgDeleteProfile from "./components/Organization/OrgProfile/OrgDeleteProfile";
// import OrgExitDetails from "./components/Organization/OrgExitDetails/OrgExitDetails";
// import OrgAddExitDetails from "./components/Organization/OrgExitDetails/OrgAddExitDetails";
// import OrgDeleteExitDetails from "./components/Organization/OrgExitDetails/OrgDeleteExitDetails";
// import OrgUpdateExitDetails from "./components/Organization/OrgExitDetails/OrgUpdateExitDetails";
// import OrgViewExitDetails from "./components/Organization/OrgExitDetails/OrgViewExitDetails";
// import OrgAsset from "./components/Organization/OrgAsset/OrgAsset";
// import OrgAddAsset from "./components/Organization/OrgAsset/OrgAddAsset";
// import OrgDeleteAsset from "./components/Organization/OrgAsset/OrgDeleteAsset";
// import OrgUpdateAsset from "./components/Organization/OrgAsset/OrgUpdateAsset";
// import OrgViewAsset from "./components/Organization/OrgAsset/OrgViewAsset";
// import OrgAddBenefit from "./components/Organization/OrgBenefit/OrgAddBenefit";
// import OrgViewBenefit from "./components/Organization/OrgBenefit/OrgViewBenefit";
// import OrgDeleteBenefit from "./components/Organization/OrgBenefit/OrgDeleteBenefit";
// import OrgUpdateBenefit from "./components/Organization/OrgBenefit/OrgUpdateBenefit";
// import OrgBenefit from "./components/Organization/OrgBenefit/OrgBenefit";

// // NewHires
// // NewHires
// import NewHires from "./components/Organization/NewHires/NewHires";
// import ChartTree from "./components/Organization/ChartTree/ChartTree";
// import AllProfiles from "./components/Organization/AllProfiles/AllProfiles";

// // TasksGiven
// // TasksGiven
// import TasksGiven from "./components/TasksGiven/TasksGiven";
// import AddTasksGiven from "./components/TasksGiven/AddTasksGiven";
// import UpdateTasksGiven from "./components/TasksGiven/UpdateTasksGiven";
// import DeleteTasksGiven from "./components/TasksGiven/DeleteTasksGiven";
// import ViewTasksGiven from "./components/TasksGiven/ViewTasksGiven";
// import MyTasks from "./components/TasksGiven/MyTasks";
// import AllTasks from "./components/TasksGiven/AllTasks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

          {/* we want to protect these routes */}
          <Route element={<PrivateProtectRoute />}>
            <Route path="/" element={<AddHolidays />} />
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route> */}

          {/* <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route> */}

          {/* catch all */}
          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

<div>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

      {/* we want to protect these routes */}
      <Route element={<PrivateProtectRoute />}>
        <Route path="/" element={<AddHolidays />} />
      </Route>

      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route> */}

      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route> */}

      {/* <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route> */}

      {/* catch all */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Route>
  </Routes>
</div>;
