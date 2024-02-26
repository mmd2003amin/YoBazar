import React from "react";
import { Field } from "formik";
import formData from "../constant/formData";

const InputsForm = ({ errors, touched, animate, animateHandler }) => {
  return (
    <div className="centering flex-col">
      {formData.map((item) => (
        <div key={item.id} onClick={(e) => animateHandler(e, item.id)}>
          <div>
            <Field name={item.name} type={item.type} />
            <span>
              {errors[item.name] && touched[item.name] && errors[item.name]}
            </span>
          </div>

          <p
            className={`${
              animate == item.id || touched[item.name]
                ? "bottom-[60px]"
                : "bottom-9"
            }`}
          >
            {item.name}
          </p>

          <i className="text-xl mt-2">{item.icon}</i>
        </div>
      ))}
    </div>
  );
};

export default InputsForm;
