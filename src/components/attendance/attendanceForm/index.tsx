import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import TimeInModal from "./timeInModal";
import TimeOutModal from "./timeOutModal";
import AttendanceCustomInput from "./attendanceCustomInput";
import { attendanceInitialValues } from "../../../utils/initialValues";
import { attendanceValidationSchema } from "../../../utils/validation/attendance";

const AttendanceForm = () => {
  const timeInModalButtonRef: any = useRef();
  const timeOutModalButtonRef: any = useRef();
  const [buttonSelected, setButtonSelected] = useState<string>("");

  const preValidate = (button: string, handleSubmit: any) => {
    setButtonSelected(button);
    handleSubmit();
  };

  const preSubmit = (values: any) => {
    if (buttonSelected === "timeIn") {
      timeInModalButtonRef.current.click();
    } else {
      timeOutModalButtonRef.current.click();
    }
  };

  return (
    <Formik
      initialValues={attendanceInitialValues}
      onSubmit={(values) => preSubmit(values)}
      validationSchema={attendanceValidationSchema}
    >
      {({ handleSubmit }) => (
        <div className="position-relative">
          <div className="d-none d-sm-none d-md-none d-lg-flex d-xl-flex justify-content-center w-100 transform-y-100p position-absolute animate__animated animate__fadeIn">
            <i className="fas fa-user-tie fa-7x custom-attendance-icon text-white" />
          </div>
          <p className="display-4 text-center">Attendance</p>
          <Form>
            <div className="d-flex flex-column justify-content-around">
              <Field
                name="username"
                component={AttendanceCustomInput}
                type="text"
              />
              <Field
                name="password"
                component={AttendanceCustomInput}
                type="password"
              />
              <div className="d-flex justify-content-around w-100">
                <button
                  className="w-50 mx-2 btn btn-primary d-flex justify-content-around align-items-center"
                  onClick={() => preValidate("timeIn", handleSubmit)}
                  type="button"
                >
                  <span>Time in</span>
                  <i className="fas fa-clock" />
                </button>
                <button
                  type="button"
                  className="d-none"
                  ref={timeInModalButtonRef}
                  data-toggle="modal"
                  data-target="#timeIn-modal"
                ></button>
                <TimeInModal id="timeIn-modal" title="Time in" />
                <button
                  className="w-50 mx-2 btn btn-warning d-flex justify-content-around align-items-center"
                  onClick={() => preValidate("timeOut", handleSubmit)}
                  type="button"
                >
                  <span>Time out</span>
                  <i className="far fa-clock" />
                </button>
                <button
                  type="button"
                  className="d-none"
                  ref={timeOutModalButtonRef}
                  data-toggle="modal"
                  data-target="#timeOut-modal"
                ></button>
                <TimeOutModal id="timeOut-modal" title="Time out" />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AttendanceForm;
