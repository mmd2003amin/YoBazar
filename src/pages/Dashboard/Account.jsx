import React, { useState } from "react";
import Notify, { notify } from "../../utils/Notify";
import EditProfile from "./EditProfile";
import firstLetter from "../../helper/firstLetter";

import { FaPlus } from "react-icons/fa";
import { PiPencilLineFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Account = (data) => {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const uploadImageHandler = (e) => {
    const file = e.target.files[0];

    if (file.type.includes("image")) {
      navigate("/dashboard");
      localStorage.setItem("profile", URL.createObjectURL(file));
      notify("success", "پروفایل آپلود شد!");
    } else {
      notify("error", "لطفا یک عکس را انتخاب کنید!");
    }
  };

  const profile = localStorage.getItem("profile") || null;

  return (
    <div className="w-11/12 xs:w-4/5 lg:w-2/3 mx-auto mt-5 sm:mt-10 sm:mr-10 p-4 shadow-2xl rounded-2xl centering justify-between flex-col-reverse lg:flex-row">
      <Notify />
      <div className="account items-start centering flex-col">
        <div>
          <h1>نام :</h1>
          <p>{data.data.name}</p>
        </div>
        <div>
          <h1>ایمیل :</h1>
          <p>{data.data.email}</p>
        </div>
        <div>
          <h1>پسورد :</h1>
          <p>{data.data.password}</p>
        </div>
      </div>

      <div className="mb-8 lg:mb-0 size-36 sm:size-48 bg-slate-500 text-2xl rounded-full centering relative text-white">
        {profile ? (
          <img
            className="w-full h-full rounded-full"
            src={profile}
            alt="profile"
          />
        ) : (
          firstLetter(data)
        )}

        <PiPencilLineFill
          onClick={() => setEdit(true)}
          className={`${!profile && "hidden"} edit-profile z-[1]`}
        />
        <FaPlus className={`${profile && "hidden"} edit-profile`} />
        <input
          type="file"
          onChange={uploadImageHandler}
          className="size-9 rounded-full absolute bottom-2.5 right-2.5 opacity-0"
        />
      </div>

      {edit && <EditProfile setEdit={setEdit} data={data} />}
    </div>
  );
};

export default Account;
