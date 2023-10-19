// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
// import Layout from "./components/layout/layout";

// //routes1
// import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
// import Holidays from "./components/LeaveTracker/Holidays/holidays";
// import Sidebar from "./components/sidebar/Sidebar";
// import Navbar from "./components/navbar/Navbar";
// import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
// import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
// import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
// import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
// import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
// import AddressProof from "./components/AddressProof/AddressProof";

// function App() {
//   return (
//     <Router>
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <div style={{ display: "flex" }}>
//           <Sidebar />
//           <div className="bl-routes-path">
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route path="/leave-tracker/holidays" element={<Holidays />} />
//                 <Route element={<PrivateProtectRoute />}>
//                   <Route
//                     path="/leave-tracker/add-holiday"
//                     element={<AddHolidays />}
//                   />
//                 </Route>
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
