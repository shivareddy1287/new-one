import React, { useEffect } from "react";
import AssetDropDown from "../CategoryDropDown/AssetDropDown";

import { useFormik } from "formik";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { fetchSingleAssetAction } from "../../redux/slices/assetSlice/assetSlice";

// import {
//   fetchDetailsProfileAction,
//   updateUserAction,
// } from "../../redux/slices/profileSlice/profileSlice";
// import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";

// user,
// givenDate,
// assetDetails,
// typeOfAsset,
// returnDate,
// addedBy,
// addedTime,
// ModifiedBy,
// modifiedTime,
const ViewAsset = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleAssetAction(id));
  }, [dispatch, id]);

  // const profileData = useSelector((state) => state?.profile?.profileData);
  // const { firstName, lastName, employerId, email } =
  //   profileData?.basicInformation ? profileData?.basicInformation : "";
  const asset = useSelector((state) => state?.asset);
  const { singleAsset, loading, appErr, serverErr } = asset;
  const { user, assetDetails, givenDate, returnDate, typeOfAsset, ModifiedBy } =
    singleAsset ? singleAsset : "";
  // const dumm = `${basicInformation?.firstName} ${basicInformation?.lastName} ${basicInformation?.employerId}`;

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {loading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <div className="cs_edit_div">
            <div>
              <Link to={`/asset`} className="cs_edit_employee_head_div">
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
                  <h2 className="cs_edit_employee_head"> View Asset</h2>
                </div>
              </Link>
            </div>
            <div className="cs_edit_form_div">
              <div>
                {serverErr || appErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                <h1 className="cs_edit_side_head">Asset</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employee ID :</h1>
                      <h1>
                        {user?.basicInformation?.firstName}{" "}
                        {user?.basicInformation?.lastName}{" "}
                        {user?.basicInformation?.employerId}
                      </h1>
                      {/* <input
                      className="cs_edit_right_input"
                      value={formik.values.user}
                      onChange={formik.handleChange("user")}
                    /> */}
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Given date :</h1>

                      <h1>{givenDate}</h1>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Asset details :</h1>

                      <h1>{assetDetails}</h1>
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Type of asset :</h1>

                      <h1>{typeOfAsset}</h1>
                      {/* <input className="cs_edit_right_input"  value={formik.values.}
                      onChange={formik.handleChange(
                        ""
                      )} /> */}
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Return date :</h1>

                      <h1>{returnDate}</h1>
                    </div>
                  </div>
                </div>
                <Link to={`/asset`}>
                  <button>Back</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAsset;
