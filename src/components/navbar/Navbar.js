import React, { useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { FcLeave } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./navbar.css";
import DateFormatter from "../../utils/dateFormatter";
import { fetchNotificationsAction } from "../../redux/slices/notifications/notificationSlices";
import { useDispatch, useSelector } from "react-redux";

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
  notifiactionLength,
}) => (
  <>
    {/* <TooltipComponent content={title}> */}
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="bl_navbar_btn"
    >
      <span
        style={{
          background: dotColor,
          caretColor: "transparent",
          color: "white",
        }}
      >
        {notifiactionLength}
      </span>
      {icon}
    </button>
    {/* </TooltipComponent> */}
  </>
);

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotificationsAction());
  }, []);

  const notifications = useSelector((state) => state.notification);
  const { allNotifications, serverErr, appErr, loading } = notifications;

  const showNotificationBar = () => {
    const notificationBar = document.querySelector(".bl_notifications-cont");
    notificationBar.classList.add("showNotificationBar");
  };

  const hideNotificationBar = () => {
    const notificationBar = document.querySelector(".bl_notifications-cont");
    notificationBar.classList.remove("showNotificationBar");
  };

  const notifiactionLength = allNotifications?.length;

  return (
    <>
      <div className="bl_navbar">
        <div className="bl_navbar_cont">
          <p>Logo</p>
          <div className="bl_navbar_cont_icons">
            <NavButton
              title="Notifiacation"
              dotColor="#03C9D7"
              notifiactionLength={notifiactionLength}
              customFunc={() => {
                showNotificationBar();
              }}
              color="blue"
              icon={<RiNotification3Line />}
            />
            <NavButton
              title="Cart"
              // customFunc={() => handleClick("cart")}
              color="blue"
              icon={<FiShoppingCart />}
            />
            <NavButton
              title="Chat"
              // dotColor="#03C9D7"
              // customFunc={() => handleClick("chat")}
              color="blue"
              icon={<BsChatLeft />}
            />
          </div>
        </div>
      </div>
      <div className="bl_notifications-cont">
        <div className="bl_notification-header">
          <span>Notifications</span>
          <span style={{ cursor: "pointer" }} onClick={hideNotificationBar}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="bl_all-notifications_cont">
          {allNotifications?.map((eachNotification) => (
            <div class="notification-card">
              <div class="notification-icon">
                <FcLeave />
              </div>
              <div class="notification-content">
                <span class="notification-title">
                  {eachNotification.notificationTitle}
                  {/* Your Leave is aprroved for 22/02/2222 */}
                </span>
                <div class="notification-desc">
                  {eachNotification.notificationDescription}
                  {/* Your Causal Leave has been approved by Admin for 22/22/2222 to
                  23/02/2222 */}
                </div>
                <div class="notification-actions">
                  <button className="notification-actions_btn">
                    Mark as Read
                  </button>
                </div>
              </div>
              <button type="button" class="notification-close">
                <AiOutlineClose />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bl_notifications-overlay"></div>
    </>
  );
};

export default Navbar;
