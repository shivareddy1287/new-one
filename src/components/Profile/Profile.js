import React, { useEffect } from "react";
import "./Profile.css";
import {
  fetchDetailsProfileAction,
  logoutUserAction,
} from "../../redux/slices/profileSlice/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  console.log(id, "profile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailsProfileAction(id));
  }, [dispatch, id]);

  const profileMain = useSelector((state) => state?.profile);
  const { loading, appErr, serverErr } = profileMain;
  console.log(loading, appErr, serverErr);

  const profileData = useSelector((state) => state?.profile?.profileData);

  const { firstName, lastName, employerId, email } =
    profileData?.basicInformation ? profileData?.basicInformation : "";

  const { dateOfBirth, gender, age, maritalStatus, aboutMe } =
    profileData?.personalDetails ? profileData?.personalDetails : "";

  const {
    Department,
    location,
    designation,
    appRole,
    employmentType,
    employeeStatus,
    sourceOfHire,
    dateOfJoining,
    currentExperience,
    totalExperience,
  } = profileData?.workInformation ? profileData?.workInformation : "";
  const { uan, pan, adhaar } = profileData?.identityInfo
    ? profileData?.identityInfo
    : "";

  const {
    workNumber,
    personalNumber,
    emailAddress,
    presentAddress,
    permanentAddress,
  } = profileData?.contactDetails ? profileData?.contactDetails : "";

  return (
    <div>
      <div className="cs_div_profile">
        {/* <div className="cs_left_back"></div> */}
        <div className="cs_content_img_div_profile">
          {/* <div className="cs_bg_img_div_profile"></div> */}
          {loading ? (
            <h1>Please Wait Loading...</h1>
          ) : (
            <div className="cs_content_div_profile">
              <div className="cs_total_content_profile">
                {appErr || serverErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                <div className="cs_card_content_div_profile">
                  <h1 className="cs_card_head_profile">Basic information</h1>
                  <div className="cs_card_data_div_profile">
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Employee ID
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {employerId}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        First Name
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {firstName}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Last Name
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {lastName}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Email Address
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {email}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="cs_card_content_div_profile">
                  <h1 className="cs_card_head_profile">Personal Details</h1>
                  <div className="cs_card_data_div_profile">
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Date of Birth
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {dateOfBirth}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">Age</h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">{age}</h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">Gender</h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {gender}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Marital Status
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {maritalStatus}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Aboute Me
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {aboutMe}
                      </h2>
                    </div>
                  </div>
                </div>{" "}
                <div className="cs_card_content_div_profile">
                  <h1 className="cs_card_head_profile">Contact Details</h1>
                  <div className="cs_card_data_div_profile">
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Work Phone Number
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {workNumber}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Personal Mobile Number
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {personalNumber}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Personal email Address
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {emailAddress}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Present Address
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {presentAddress}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Permanent Address
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {permanentAddress}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_total_content_profile">
                <div className="cs_card_content_div_profile">
                  <h1 className="cs_card_head_profile">Work information</h1>
                  <div className="cs_card_data_div_profile">
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Department
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {Department}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Location
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {location}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Designation
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {designation}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        App Role
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {appRole}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Employment Type
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {employmentType}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Employee Status
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {employeeStatus}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Source of Hire
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {sourceOfHire}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Date of Joining
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {dateOfJoining}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Current Experience
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {currentExperience}
                      </h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Total Experience
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {totalExperience}
                      </h2>
                    </div>
                  </div>
                </div>{" "}
                <div className="cs_card_content_div_profile">
                  <h1 className="cs_card_head_profile">Identity Information</h1>
                  <div className="cs_card_data_div_profile">
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">UAN</h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">{uan}</h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">PAN</h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">{pan}</h2>
                    </div>
                    <div className="cs_card_each_data_div_profile">
                      <h2 className="cs_card_data_each_head_profile">
                        Aadhaar
                      </h2>{" "}
                      <h2 className="cs_card_data_each_head_profile">
                        {adhaar}
                      </h2>
                    </div>
                  </div>

                  <div>
                    <button onClick={() => dispatch(logoutUserAction())}>
                      logout
                    </button>
                  </div>
                  <div>
                    <Link to={`/update/${id}`} className="cs_edit_link">
                      edit
                    </Link>
                  </div>
                  <div>
                    <Link to={`/viewdetials/${id}`} className="cs_edit_link">
                      view details
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
