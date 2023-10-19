import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import "./App.css";
// components 1
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
import Holidays from "./components/LeaveTracker/Holidays/holidays";
import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
import AddressProof from "./components/AddressProof/AddressProof";

//test protected
import Layout from "./components/layout/layout";

// imports 2
import LoginPage from "./components/LoginPage/LoginPage";
import Profile from "./components/Profile/Profile";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";

import UpdateProfile from "./components/Profile/UpdateProfile";
import ViewDetails from "./components/Profile/ViewDetails";
// import Navbar from "./components/Navigation/Admin/Navbar";
import Team from "./components/Team/Team";
import Asset from "./components/Asset/Asset";
import AddAsset from "./components/Asset/AddAsset";
import UpdateAsset from "./components/Asset/UpdateAsset";
import DeleteAsset from "./components/Asset/DeleteAsset";
import ViewAsset from "./components/Asset/ViewAsset";
// import Dummy from "./Dummy/Dummy";
import Benefit from "./components/Benefit/Benefit";
import AddBenefit from "./components/Benefit/AddBenefit";
import DeleteBenefit from "./components/Benefit/DeleteAsset";
import ViewBenefit from "./components/Benefit/ViewBenefit";
import UpdateBenefit from "./components/Benefit/UpdateBenefit";
import ExitDetails from "./components/ExitDetails/ExitDetails";
import AddExitDetails from "./components/ExitDetails/AddExitDetails";
import DeleteExitDetails from "./components/ExitDetails/DeleteExitDetails";
import UpdateExitDetails from "./components/ExitDetails/UpdateExitDetails";
import ViewExitDetails from "./components/ExitDetails/ViewExitDetails";
import Designation from "./components/Designation/Designation";
import AddDesignation from "./components/Designation/AddDesignation";
import UpdateDesignation from "./components/Designation/UpdateDesignation";
import DeleteDesignation from "./components/Designation/DeleteDesignation";
import ViewDesignation from "./components/Designation/ViewDesignation";
import Department from "./components/Department/Department";
import AddDepartment from "./components/Department/AddDepartment";
import DeleteDepartment from "./components/Department/DeleteDepartment";
import ViewDepartment from "./components/Department/ViewDepartment";
import UpdateDepartment from "./components/Department/UpdateDepartment";
import OrgAddProfile from "./components/Organization/OrgProfile/OrgAddProfile";
import OrgUpdateProfile from "./components/Organization/OrgProfile/OrgUpdateProfile";
import OrgViewDetails from "./components/Organization/OrgProfile/OrgViewDetails";
import OrgProfile from "./components/Organization/OrgProfile/OrgProfile";
import OrgDeleteProfile from "./components/Organization/OrgProfile/OrgDeleteProfile";
import OrgExitDetails from "./components/Organization/OrgExitDetails/OrgExitDetails";
import OrgAddExitDetails from "./components/Organization/OrgExitDetails/OrgAddExitDetails";
import OrgDeleteExitDetails from "./components/Organization/OrgExitDetails/OrgDeleteExitDetails";
import OrgUpdateExitDetails from "./components/Organization/OrgExitDetails/OrgUpdateExitDetails";
import OrgViewExitDetails from "./components/Organization/OrgExitDetails/OrgViewExitDetails";
import OrgAsset from "./components/Organization/OrgAsset/OrgAsset";
import OrgAddAsset from "./components/Organization/OrgAsset/OrgAddAsset";
import OrgDeleteAsset from "./components/Organization/OrgAsset/OrgDeleteAsset";
import OrgUpdateAsset from "./components/Organization/OrgAsset/OrgUpdateAsset";
import OrgViewAsset from "./components/Organization/OrgAsset/OrgViewAsset";
import OrgAddBenefit from "./components/Organization/OrgBenefit/OrgAddBenefit";
import OrgViewBenefit from "./components/Organization/OrgBenefit/OrgViewBenefit";
import OrgDeleteBenefit from "./components/Organization/OrgBenefit/OrgDeleteBenefit";
import OrgUpdateBenefit from "./components/Organization/OrgBenefit/OrgUpdateBenefit";
import OrgBenefit from "./components/Organization/OrgBenefit/OrgBenefit";

// NewHires
// NewHires
import NewHires from "./components/Organization/NewHires/NewHires";
import ChartTree from "./components/Organization/ChartTree/ChartTree";
import AllProfiles from "./components/Organization/AllProfiles/AllProfiles";

// TasksGiven
// TasksGiven
import TasksGiven from "./components/TasksGiven/TasksGiven";
import AddTasksGiven from "./components/TasksGiven/AddTasksGiven";
import UpdateTasksGiven from "./components/TasksGiven/UpdateTasksGiven";
import DeleteTasksGiven from "./components/TasksGiven/DeleteTasksGiven";
import ViewTasksGiven from "./components/TasksGiven/ViewTasksGiven";
import MyTasks from "./components/TasksGiven/MyTasks";
import AllTasks from "./components/TasksGiven/AllTasks";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ height: "3.4em" }}>
        <Navbar />
      </div>

      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="bl-routes-path">
          <Routes>
            <Route path="/leave-tracker/list-view" element={<ListView />} />
            <Route
              path="/leave-tracker/calender-view"
              element={<CalenderView />}
            />
            <Route path="/leave-tracker/apply-leave" element={<ApplyLeave />} />
            <Route
              path="/leave-tracker/leave-applications"
              element={<LeaveApplications />}
            />
            <Route
              path="/leave-tracker/leave-applications/:id"
              element={<LeaveRecord />}
            />
            <Route path="/leave-tracker/holidays" element={<Holidays />} />
            <Route
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            />
            {/* <PrivateProtectRoute
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}

            {/* <PrivateProtectRoute 
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}
            <Route path="/hr-letters/adress-proof" element={<AddressProof />} />

            {/* Routes  2 */}
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/self-service/profile"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateProfile />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/viewdetials/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDetails />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/team"
              element={
                <PrivateProtectRoute>
                  <Team />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset"
              element={
                <PrivateProtectRoute>
                  <Asset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/asset/create"
              element={
                <PrivateProtectRoute>
                  <AddAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewAsset />
                </PrivateProtectRoute>
              }
            />

            {/* Benefit */}
            <Route
              path="/self-service/benefit"
              element={
                <PrivateProtectRoute>
                  <Benefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/benefit/create"
              element={
                <PrivateProtectRoute>
                  <AddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* ExitDetails */}

            <Route
              path="/exitdetails"
              element={
                <PrivateProtectRoute>
                  <ExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <AddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Designation */}
            <Route
              path="/organization/designation"
              element={
                <PrivateProtectRoute>
                  <Designation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/designation/create"
              element={
                <PrivateProtectRoute>
                  <AddDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/designation/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/designation/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/designation/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDesignation />
                </PrivateProtectRoute>
              }
            />

            {/* Department */}

            <Route
              path="/organization/department"
              element={
                <PrivateProtectRoute>
                  <Department />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/department/create"
              element={
                <PrivateProtectRoute>
                  <AddDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/department/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/department/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/department/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDepartment />
                </PrivateProtectRoute>
              }
            />

            {/* Organization */}
            {/* Organization Profile */}

            <Route
              path="/organization/profile"
              element={
                <PrivateProtectRoute>
                  <OrgProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteProfile />
                </PrivateProtectRoute>
              }
            />

            {/* Organization ExitDetails */}

            <Route
              path="/self-service/exitdetails"
              element={
                <PrivateProtectRoute>
                  <OrgExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Organization Asset  */}

            <Route
              path="/organization/asset"
              element={
                <PrivateProtectRoute>
                  <OrgAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit"
              element={
                <PrivateProtectRoute>
                  <OrgBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* TasksGiven  */}

            <Route
              path="/tasks/tasksgiven"
              element={
                <PrivateProtectRoute>
                  <TasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasksgiven/create"
              element={
                <PrivateProtectRoute>
                  <AddTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasksgiven/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasksgiven/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasksgiven/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteTasksGiven />
                </PrivateProtectRoute>
              }
            />

            {/* NewHires
          NewHires */}

            <Route
              path="/organization/new/hires"
              element={
                <PrivateProtectRoute>
                  <NewHires />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/tree/chart"
              element={
                <PrivateProtectRoute>
                  <ChartTree />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/all/profiles"
              element={
                <PrivateProtectRoute>
                  <AllProfiles />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/mytasks"
              element={
                <PrivateProtectRoute>
                  <MyTasks />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/alltasks"
              element={
                <PrivateProtectRoute>
                  <AllTasks />
                </PrivateProtectRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
