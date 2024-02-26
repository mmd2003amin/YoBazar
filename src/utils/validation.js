import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, "!نام کاربری کوتاه است")
    .max(30, "!نام کاربری بلند است")
    .required("!نام کاربری الزامی است"),

  email: Yup.string().email("!ایمیل نامعتبر است").required("!ایمیل الزامی است"),

  password: Yup.string()
    .min(6, "!پسورد باید شامل حداقل 6 کاراکتر باشد")
    .matches(passwordRules, {
      message: "!رمز عبور باید شامل : حروف کوچک , حروف بزرگ و اعداد باشد",
    })
    .required("!رمز عبور الزامی است"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "!پسورد مطابق پسورد بالا نیست")
    .required("!تکرار رمز عبور الزامی است"),
});

export { signUpSchema };
