import React from "react";
import "./listview.css";
import { useNavigate } from "react-router-dom";

const ListViewHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="bl-list-view-header">
      <div className="bl-list-view-header_left-part">
        <img
          alt="avatar"
          className="bl_avatar"
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
        />
        <select>
          <option value="">Select</option>
          <option value="employye1">Employee 1</option>
          <option value="employee2">Employee 2</option>
        </select>
      </div>
      <div>Date Range</div>
      <div>
        <button
          className="button"
          onClick={() => navigate("/leave-tracker/apply-leave")}
        >
          Apply Leave
        </button>
      </div>
    </div>
  );
};

export default ListViewHeader;
