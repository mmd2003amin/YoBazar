import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { signUpSchema } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import Notify, { notify } from "../utils/Notify";
import authHandler from "../utils/authorization";
import InputsForm from "./modules/InputsForm";

const Auth = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => authHandler, []);

  const animateHandler = (e, id) => {
    e.stopPropagation();
    setAnimate(id);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const signUpHandler = (values, errors) => {
    if (
      values.confirmPassword &&
      values.password &&
      values.email &&
      values.userName &&
      !errors.confirmPassword &&
      !errors.password &&
      !errors.email &&
      !errors.userName
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: values.email,
          password: values.password,
          name: values.userName,
        })
      );
      notify("success", "ثبت‌نام با موفقیت انجام شد!");
      setTimeout(() => navigate("/"), 500);
    } else {
      notify("error", "خطا");
    }
  };

  return (
    <>
      <Notify />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, values }) => (
          <Form
            dir="ltr"
            className="shadow-lg shadow-[#7395ae] form-inputs centering flex-col p-2 mx-auto w-5/6 xs:w-3/4 md:w-1/2 h-[37rem] mt-6 border-2 border-[#7395ae] rounded-2xl"
          >
            <h1 className="font-vazirExtraBold text-2xl mt-5 mb-14 text-[#557a95]">
              ثبت‌نام
            </h1>

            <InputsForm
              errors={errors}
              touched={touched}
              animate={animate}
              animateHandler={animateHandler}
            />

            <button
              onClick={() => signUpHandler(values, errors)}
              className="mb-1.5 h-14 w-3/4 transition-all p-2 rounded-3xl cursor-pointer text-white bg-[#7395ae] hover:bg-[#6495b8]"
            >
              ثبت نام
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Auth;
