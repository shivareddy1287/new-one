import React from "react";
import {
  Schedule,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const sampleCalenderData = [
  {
    Id: 2,
    Subject: "May Day",
    Location: "",
    StartTime: "2023-05-01T00:00:00.000+00:00",
    EndTime: "2023-05-01T00:00:00.000+00:00",
    CategoryColor: "#357cd2",
  },
];

const CalenderView = () => {
  return (
    <div>
      <div>
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: sampleCalenderData }}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default CalenderView;
