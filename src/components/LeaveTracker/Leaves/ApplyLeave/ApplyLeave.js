import React, { useEffect } from "react";
import "./applyleave.css";
import { useFormik } from "formik";
import { Redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  applyLeaveAction,
  fetchAllLeaves,
} from "../../../../redux/slices/leaves/leaveSlices";
import * as Yup from "yup";

import { AiOutlineLeft } from "react-icons/ai";

//Form Schema
const formSchema = Yup.object({
  employeeId: Yup.string().required("EmployeeId is required"),
  leaveType: Yup.string().required("LeaveType is required"),
  fromDate: Yup.date().required("FromDate is required"),
  toDate: Yup.date().required("ToDate is required"),
  emailId: Yup.string().required("EmailId is required"),
  reasonForLeave: Yup.string().required("ReasonForLeave is required"),
});

const ApplyLeave = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      employeeId: "",
      leaveType: "",
      fromDate: "",
      toDate: "",
      emailId: "",
      reasonForLeave: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(applyLeaveAction(values));
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    dispatch(fetchAllLeaves());
  }, []);

  const leaves = useSelector((state) => state.leave);
  const { leave, isApplied, loading, allLeaves } = leaves;

  //show card
  const showCard = () => {
    formik.submitForm();
    const card = document.querySelector(".bl_card");
    console.log(allLeaves);
    const isAppliedBefore = allLeaves?.some((eachLeave) => {
      const fromDate = new Date(eachLeave.fromDate);
      const toDate = new Date(eachLeave.toDate);

      const presentFromDate = new Date(formik.values.fromDate);
      const presentToDate = new Date(formik.values.toDate);
      console.log("test", presentFromDate !== "");
      console.log(formik.values.fromDate !== "");
      if (
        (presentFromDate >= fromDate && presentFromDate <= toDate) ||
        (presentToDate >= fromDate && presentToDate <= toDate)
      ) {
        return true; // This will break out of the loop
      }
    });
    console.log(isAppliedBefore);
    if (isAppliedBefore) {
      alert(`User already applied on That Date`);
    }
    if (
      formik.values.fromDate !== "" &&
      !isAppliedBefore &&
      Object.keys(formik.errors).length === 0
    )
      return card.classList.add("show");
  };

  const removeCard = () => {
    const card = document.querySelector(".bl_card");
    card.classList.remove("show");
  };

  if (isApplied) return navigate("/leave-tracker/leave-applications");
  return (
    <div className="bl-apply-leave-cont">
      <div className="bl-apply-leave_header">
        <div>
          <span onClick={() => navigate("/leave-tracker/list-view")}>
            <AiOutlineLeft />
          </span>

          <span>Apply Leave</span>
        </div>
        <button onClick={() => navigate("/leave-tracker/list-view")}>X</button>
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
            <span class="bl_card-title">Apply </span>
            <p class="message">
              Are you sure want to Apply Casual Leave for Employee 1 on
              22/22/2222.
            </p>
          </div>
          <div class="actions">
            <button
              class="desactivate"
              type="button"
              onClick={() => dispatch(applyLeaveAction(formik.values))}
            >
              Apply
            </button>
            <button class="cancel" onClick={removeCard} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="bl-apply-leave-form-cont">
        <form className="bl-apply-leave-form" onSubmit={formik.handleSubmit}>
          <div class="wrapper">
            <div class="title">Apply Leave</div>
            <div class="form">
              <div class="inputfield">
                <label>Employee ID</label>
                <div class="custom_select">
                  <select
                    values={formik.values.employeeId}
                    onChange={formik.handleChange("employeeId")}
                    onBlur={formik.handleBlur("employeeId")}
                  >
                    <option value="">Select</option>
                    <option value="employye1">Employee 1</option>
                    <option value="employee2">Employee 2</option>
                  </select>
                  <div className="bl_err-msg">
                    {formik?.touched?.employeeId && formik?.errors?.employeeId}{" "}
                  </div>
                </div>
              </div>

              <div class="inputfield">
                <label>Leave Type</label>
                <div class="custom_select">
                  <select
                    values={formik.values.leaveType}
                    onChange={formik.handleChange("leaveType")}
                    onBlur={formik.handleBlur("leaveType")}
                  >
                    <option value="">Select</option>
                    <option value="casualLeaves">Causal Leave</option>
                    <option value="sickLeaves">Sick Leave</option>
                  </select>
                  <span className="bl_err-msg">
                    {formik?.touched?.leaveType && formik?.errors?.leaveType}
                  </span>
                </div>
              </div>

              <div class="inputfield">
                <label>Date</label>
                <div className="date-input-cont">
                  <input
                    required=""
                    className="date-input"
                    placeholder="Enter birth date"
                    value={formik.values.fromDate}
                    onChange={formik.handleChange("fromDate")}
                    onBlur={formik.handleBlur("fromDate")}
                    type="date"
                  ></input>
                  <span className="bl_err-msg">
                    {formik?.touched?.fromDate && formik?.errors?.fromDate}
                  </span>
                </div>
                <div className="date-input-cont">
                  <input
                    required=""
                    className="date-input"
                    value={formik.values.toDate}
                    onChange={formik.handleChange("toDate")}
                    onBlur={formik.handleBlur("toDate")}
                    placeholder="Enter birth date"
                    type="date"
                    min={formik.values.fromDate}
                  ></input>
                  <span className="bl_err-msg">
                    {formik?.touched?.toDate && formik?.errors?.toDate}
                  </span>
                </div>
              </div>

              <div class="inputfield">
                <label>Team Email ID</label>
                <div style={{ width: "100%" }}>
                  <input
                    value={formik.values.emailId}
                    type="text"
                    class="input"
                    onChange={formik.handleChange("emailId")}
                    onBlur={formik.handleBlur("emailId")}
                  />
                  <span className="bl_err-msg">
                    {formik?.touched?.emailId && formik?.errors?.emailId}
                  </span>
                </div>
              </div>

              <div class="inputfield">
                <label>Reason For Leave</label>
                <div style={{ width: "100%" }}>
                  <textarea
                    value={formik.values.reasonForLeave}
                    class="textarea"
                    onChange={formik.handleChange("reasonForLeave")}
                    handleBlur={formik.handleBlur("reasonForLeave")}
                  ></textarea>
                  <span className="bl_err-msg">
                    {formik?.touched?.reasonForLeave &&
                      formik?.errors?.reasonForLeave}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bl-apply-leave_footer">
        <button type="submit" onClick={showCard} className="button">
          Apply
        </button>
        <button
          className="button"
          onClick={() => navigate("/leave-tracker/list-view")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplyLeave;
