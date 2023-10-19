import React, { useEffect } from "react";
import "./leaveRecord.css";
import { useFormik } from "formik";
import { Redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import * as Yup from "yup";

import { AiOutlineLeft } from "react-icons/ai";
import {
  approveLeaveAction,
  cancelLeaveAction,
  fetchLeaveAction,
} from "../../../../redux/slices/leaves/leaveSlices";

//Form Schema

const LeaveRecord = (props) => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchLeaveAction(id));
  }, []);

  const leaves = useSelector((state) => state?.leave);
  const { leave, isApproved, loading, appErr, serverErr } = leaves;
  console.log(leave);

  //show card
  const showCard = () => {
    const card = document.querySelector(".bl_card");
    card.classList.add("show");
  };

  const removeCard = () => {
    const card = document.querySelector(".bl_card");
    card.classList.remove("show");
  };

  // show cancel card
  const showCanelCard = () => {
    // ;
    const card = document.querySelector(".bl_card2");
    card.classList.add("show");
  };

  const removeCancelCard = () => {
    const card = document.querySelector(".bl_card2");
    card.classList.remove("show");
  };

  if (isApproved) return navigate("/leave-tracker/leave-applications");

  return (
    <div className="bl-apply-leave-cont">
      <div className="bl-apply-leave_header">
        <div>
          <span onClick={() => navigate("/leave-tracker/leave-applications")}>
            <AiOutlineLeft />
          </span>

          <span>Applied Leave</span>
        </div>
        <button onClick={() => navigate("/leave-tracker/leave-applications")}>
          X
        </button>
      </div>

      <div class="bl_card">
        <div class="bl_card-header">
          <div class="bl_card_image">
            <svg
              aria-hidden="true"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="bl_card_content">
            <span class="bl_card-title">Approve </span>
            <p class="message">
              Are you sure want to Approve Casual Leave for Employee 1 on
              22/22/2222.
            </p>
          </div>
          <div class="actions">
            <button
              class="desactivate"
              type="button"
              onClick={() => dispatch(approveLeaveAction(id))}
            >
              Approve
            </button>
            <button class="cancel" onClick={removeCard} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div class="bl_card2">
        <div class="bl_card-header">
          <div class="bl_card_image">
            <svg
              aria-hidden="true"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="bl_card_content">
            <span class="bl_card-title">Cancel </span>
            <p class="message">
              Are you sure want to Cancel Casual Leave for Employee 1 on
              22/22/2222.
            </p>
          </div>
          <div class="actions">
            <button
              class="desactivate"
              type="button"
              onClick={() => dispatch(cancelLeaveAction(id))}
            >
              Reject Leave
            </button>
            <button class="cancel" onClick={removeCancelCard} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="bl-apply-leave-form-cont">
        <form className="bl-apply-leave-form">
          <div class="wrapper">
            <div class="title">Applied Leave</div>
            <div class="form">
              <div class="inputfield">
                <label>Employee ID</label>
                <div class="custom_select">
                  <select value={leave?.employeeId} disabled>
                    <option value="">Select</option>
                    <option value="employye1">Employee 1</option>
                    <option value="employee2">Employee 2</option>
                  </select>
                </div>
              </div>
              <div class="inputfield">
                <label>Leave Type</label>
                <div class="custom_select">
                  <select value={leave?.leaveType} disabled>
                    <option value="">Select</option>
                    <option value="casualLeaves">Causal Leave</option>
                    <option value="sickLeaves">Sick Leave</option>
                  </select>
                </div>
              </div>
              <div class="inputfield">
                <label>Date</label>
                <input
                  required=""
                  disabled
                  className="date-input"
                  value={leave?.fromDate}
                  placeholder="Enter birth date"
                  type="date"
                ></input>
                <input
                  required=""
                  disabled
                  className="date-input"
                  value={leave?.toDate}
                  placeholder="Enter birth date"
                  type="date"
                ></input>
              </div>
              <div class="inputfield">
                <label>Team Email ID</label>
                <input
                  disabled
                  value={leave?.emailId}
                  type="text"
                  class="input"
                />
              </div>

              <div class="inputfield">
                <label>Reason For Leave</label>
                <textarea
                  value={leave?.reasonForLeave}
                  disabled
                  class="textarea"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bl-apply-leave_footer">
        <button onClick={() => navigate("/leave-tracker/leave-applications")}>
          Close
        </button>
        {!leave?.isApproved && (
          <>
            <button onClick={showCanelCard}>Cancel Leave </button>
            <button onClick={showCard}>Approve Leave</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaveRecord;
