import React, { useEffect } from "react";
import "./holidays.css";
import { useFormik } from "formik";
import { Redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addHolidayAction,
  fetchHolidaysAction,
} from "../../../redux/slices/leaves/holidaySlices";
import * as Yup from "yup";

import { AiOutlineLeft } from "react-icons/ai";

//Form Schema
const formSchema = Yup.object({
  name: Yup.string().required("*Name is required"),
  shifts: Yup.string().required("*Shifts is required"),
  fromDate: Yup.date().required("*FromDate is required"),
  toDate: Yup.date().required("*ToDate is required"),
  applicableFor: Yup.string().required("*ApplicableFor is required"),
  description: Yup.string().required("*Description is required"),
});

const ApplyLeave = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      shifts: "Day Shift",
      fromDate: "",
      toDate: "",
      applicableFor: "Hyderbad",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(addHolidayAction(values));
      // showCard();
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    dispatch(fetchHolidaysAction());
  }, []);

  const holidays = useSelector((state) => state.holidays);
  const { holiday, isHolidayAdded, loading, allHolidays } = holidays;

  const loading2 = false;

  //show card
  const showCard = () => {
    formik.submitForm();
    const card = document.querySelector(".bl_card");
    console.log(allHolidays);
    const isAppliedBefore = allHolidays?.some((eachLeave) => {
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
      alert(`Already Declared Holiday on this Day`);
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

  if (isHolidayAdded) return navigate("/leave-tracker/holidays");
  return (
    <div className="bl-apply-leave-cont">
      <div className="bl-apply-leave_header">
        <div>
          <span onClick={() => navigate("/leave-tracker/holidays")}>
            <AiOutlineLeft />
          </span>

          <span>Add Holiday</span>
        </div>
        <button onClick={() => navigate("/leave-tracker/holidays")}>X</button>
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
            <span class="bl_card-title">Add Holiday </span>
            <p class="message">
              Are you sure want to Add Holiday for on 22/22/2222.
            </p>
          </div>
          <div class="actions">
            <button
              class="desactivate"
              type="button"
              onClick={() => dispatch(addHolidayAction(formik.values))}
            >
              Add <span>{loading ? " loading" : ""}</span>
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
            <div class="title">Add Holiday</div>
            <div class="form">
              <div class="inputfield">
                <label>Name</label>
                <div style={{ width: "100%" }}>
                  <input
                    value={formik.values.name}
                    type="text"
                    class="input"
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                  />
                  <span className="bl_err-msg">
                    {formik?.touched?.name && formik?.errors?.name}
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
                <label>Shifts</label>
                <div class="custom_select">
                  <select
                    values={formik.values.shifts}
                    onChange={formik.handleChange("shifts")}
                    onBlur={formik.handleBlur("shifts")}
                  >
                    <option value="">Select</option>
                    <option value="Day Shift" selected>
                      Day Shifts
                    </option>
                  </select>
                  <span className="bl_err-msg">
                    {formik?.touched?.shifts && formik?.errors?.shifts}
                  </span>
                </div>
              </div>

              <div class="inputfield">
                <label>Applicable For</label>
                <div class="custom_select">
                  <select
                    values={formik.values.applicableFor}
                    onChange={formik.handleChange("applicableFor")}
                    onBlur={formik.handleBlur("applicableFor")}
                  >
                    <option value="">Select</option>
                    <option value="Hyderbad" selected>
                      Hyderbad
                    </option>
                  </select>
                  <span className="bl_err-msg">
                    {formik?.touched?.applicableFor &&
                      formik?.errors?.applicableFor}
                  </span>
                </div>
              </div>

              <div class="inputfield">
                <label>Description</label>
                <div style={{ width: "100%" }}>
                  <textarea
                    value={formik.values.description}
                    class="textarea"
                    onChange={formik.handleChange("description")}
                    handleBlur={formik.handleBlur("description")}
                  ></textarea>
                  <span className="bl_err-msg">
                    {formik?.touched?.description &&
                      formik?.errors?.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bl-apply-leave_footer">
        <button type="submit" onClick={showCard}>
          Apply
        </button>
        <button onClick={() => navigate("/leave-tracker/holidays")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplyLeave;
