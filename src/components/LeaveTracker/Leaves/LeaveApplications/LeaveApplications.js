import React, { useEffect } from "react";
import { fetchAllLeaves } from "../../../../redux/slices/leaves/leaveSlices";
import { useDispatch, useSelector } from "react-redux";
import "./leaveApplication.css";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const LeaveApplication = () => {
  //navigate
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
    <div>
      <div className="bl_leave-applications_header">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <span>
            <BsThreeDots />
          </span>
        </div>
      </div>
      <div className="bl_holyday-tabel">
        <table>
          <thead>
            <tr>
              <th style={{ paddingLeft: "55px" }}>
                <input type="checkbox" />
                Employee Name
              </th>
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
                  <div className="bl_holyday-tabel_avatar_tab">
                    {" "}
                    <span className="bl_tabel_dots">
                      <BsThreeDots />
                    </span>
                    <input type="checkbox" />
                    <img
                      alt="avatar"
                      className="bl_avatar"
                      src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                    />
                    <p>{leave.emailId} </p>
                  </div>
                  <td
                    onClick={() =>
                      navigate(`/leave-tracker/leave-applications/${leave._id}`)
                    }
                  >
                    {leave.fromDate}
                  </td>
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
  );
};

export default LeaveApplication;
