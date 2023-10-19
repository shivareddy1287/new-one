import React, { useEffect } from "react";
import "./holidays.css";
import { fetchHolidaysAction } from "../../../redux/slices/leaves/holidaySlices";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";

const Holidays = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHolidaysAction());
  }, []);
  //acces state
  const holidays = useSelector((state) => state.holidays);
  const { allHolidays, loading } = holidays;
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
              <th style={{ paddingLeft: "55px" }}>Name</th>
              <th>Date</th>
              <th>Applicable For</th>
              <th>Description</th>
              <th>Shifts</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>"sdb"</td>
              <td>",sd"</td>
              <td>sdghbj</td>
              <td>dagjhcs</td>
              <td>FG</td>
            </tr> */}
            {allHolidays?.map((holiday) => {
              return (
                <tr>
                  <td style={{ paddingLeft: "55px" }}>{holiday.name}</td>
                  <td>{holiday.fromDate}</td>
                  <td>{holiday.applicableFor}</td>
                  <td>{holiday.description}</td>
                  <td>{holiday.shifts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holidays;
