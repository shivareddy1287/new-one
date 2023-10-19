import React, { useEffect, useState } from "react";
import AssetDropDown from "../CategoryDropDown/AssetDropDown";

import { useFormik } from "formik";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { fetchAllProfileAction } from "../../redux/slices/profileSlice/profileSlice";
import {
  fetchSinglebenefitAction,
  updatebenefitAction,
} from "../../redux/slices/benefitSlice/benefitSlice";

const UpdateBenefit = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProfileAction());
    dispatch(fetchSinglebenefitAction(id));
  }, [dispatch, id]);

  const benefit = useSelector((state) => state?.benefit);
  const { singlebenefit, isbenefiteUpdated } = benefit;
  // console.log(benefit);
  const {
    user,
    educationAllowance,
    housingAllowance,
    lunchBenfit,
    ModifiedBy,
  } = singlebenefit ? singlebenefit : "";
  console.log(singlebenefit);

  const userDet = useSelector((state) => state?.profile);

  const profilesList = userDet?.profilesList;
  const { _id } = userDet?.userAuth;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      user: user?._id,

      ModifiedBy: _id,
      lunchBenfit: lunchBenfit,
      educationAllowance: educationAllowance,
      housingAllowance: housingAllowance,
    },
    onSubmit: (values) => {
      dispatch(updatebenefitAction({ id, values }));
      console.log(values, "values");
    },
  });

  if (isbenefiteUpdated) {
    return <Navigate to={`/benefit`} />;
  }

  return (
    <div className="cs_div_profile">
      <div className="cs_left_back"></div>
      <div className="cs_edit_div">
        <div>
          <Link to={`/benefit`} className="cs_edit_employee_head_div">
            <div>
              <svg
                className="cs_font_icons"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            <div>
              <h2 className="cs_edit_employee_head"> Edit Benefit</h2>
            </div>
          </Link>
        </div>
        <form onSubmit={formik.handleSubmit} className="cs_edit_form_div">
          <div>
            <h1 className="cs_edit_side_head">Benefit</h1>
            <div className="cs_edit_left_right_div">
              <div className="cs_edit_left_input_right_input">
                {" "}
                <div className="">
                  <h1 className="cs_edit_left_input">Employee ID :</h1>
                  <select
                    value={formik.values.user}
                    onChange={formik.handleChange("user")}
                  >
                    {profilesList?.map((each) => (
                      <option value={`${each?._id}`}>
                        {each?.basicInformation?.firstName}{" "}
                        {each?.basicInformation?.lastName}{" "}
                        {each?.basicInformation?.employerId}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cs_edit_input_div">
                  <h1 className="cs_edit_left_input">Education allowance :</h1>
                  <input
                    className="cs_edit_right_input"
                    value={formik.values.educationAllowance}
                    onChange={formik.handleChange("educationAllowance")}
                  />
                </div>
              </div>
              <div className="cs_edit_left_input_right_input">
                <div className="cs_edit_input_div">
                  <h1 className="cs_edit_left_input">Lunch :</h1>
                  <input
                    className="cs_edit_right_input"
                    value={formik.values.lunchBenfit}
                    onChange={formik.handleChange("lunchBenfit")}
                  />
                </div>
                <div className="cs_edit_input_div">
                  <h1 className="cs_edit_left_input">Housing Allowance :</h1>
                  <input
                    className="cs_edit_right_input"
                    value={formik.values.housingAllowance}
                    onChange={formik.handleChange("housingAllowance")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBenefit;
