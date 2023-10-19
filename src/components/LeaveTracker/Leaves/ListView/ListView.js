import React, { useEffect } from "react";
import ListViewHeader from "./ListViewHeader";
import { fetchAllLeaves } from "../../../../redux/slices/leaves/leaveSlices";
import { useDispatch, useSelector } from "react-redux";
import { BsCalendar2Date } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LeaveType = ({
  title,
  customFunc,
  icon,
  availableLeaves,
  bookedLeaves,
}) => {
  return (
    <div className="bl_leave_type" onClick={customFunc}>
      <h2>{title}</h2>
      {icon}
      <div>
        <p>Available: {availableLeaves}</p>
        <p>Booked : {bookedLeaves}</p>
      </div>
    </div>
  );
};

const ListView = () => {
  //navigation
  const navigate = useNavigate();

  //access state
  const leaves = useSelector((state) => state?.leave);
  console.log(leaves);
  const { allLeaves, loading, appErr, serverErr } = leaves;
  console.log(allLeaves);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllLeaves());
  }, []);
  return (
    <div className="bl_leave_list-view-cont">
      <div className="bl_leave-header-cont">
        <ListViewHeader />
      </div>
      <div className="bl_leave_type-category">
        <LeaveType
          title="Casual Leave"
          customFunc={() => navigate("/leave-tracker/apply-leave")}
          availableLeaves="12"
          bookedLeaves="0"
          icon={<BsCalendar2Date className="bl_icon" />}
        />
        <LeaveType
          title="Sick Leave"
          customFunc={() => navigate("/leave-tracker/apply-leave")}
          availableLeaves="12"
          bookedLeaves="0"
          icon={<BsCalendar2Date className="bl_icon" />}
        />
        <LeaveType
          title="Leave Without Pay"
          customFunc={() => navigate("/leave-tracker/apply-leave")}
          availableLeaves="0"
          bookedLeaves="0"
          icon={<BsCalendar2Date className="bl_icon" />}
        />
      </div>
      <div className="bl_leave_and_holiday">
        <div className="bl_leave-tabel">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reason Type/ Festival</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allLeaves?.map((leave) => {
                return (
                  <tr>
                    <td>{leave.fromDate}</td>
                    <td>{leave.leaveType}</td>
                    <td>{leave.reasonForLeave}</td>
                    <td>{leave.leaveStatus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListView;
