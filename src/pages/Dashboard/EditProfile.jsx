import React from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/Notify";
import firstLetter from "../../helper/firstLetter";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const EditProfile = ({ setEdit, data }) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const profile = localStorage.getItem("profile") || null;

  const deleteProfile = () => {
    if (profile) {
      navigate("/dashboard");
      localStorage.removeItem("profile");
      notify("success", "تصویر پروفایل با موفقیت حذف شد!");
    }
  };

  const editProfileHandler = (e) => {
    const file = e.target.files[0];

    if (file.type.includes("image")) {
      navigate("/dashboard");
      localStorage.setItem("profile", URL.createObjectURL(file));
      notify("success", "پروفایل آپلود شد!");
    } else {
      notify("error", "لطفا یک عکس را انتخاب کنید!");
    }
  };

  return (
    <div className="bg-header size-full z-10 absolute bottom-0 right-0 centering">
      <div className="w-11/12 sm:w-2/3 lg:w-1/3 h-4/5 bg-white rounded-xl shadow-2xl centering flex-col justify-start p-5">
        <div className="w-full centering justify-between border-b pb-5">
          <p>تصویر پروفایل</p>
          <IoClose
            onClick={() => setEdit(false)}
            className="size-7 transition-all hover:bg-gray-100 cursor-pointer rounded-full p-1"
          />
        </div>

        <div className="size-40 rounded-full my-5 bg-slate-500 centering text-xl text-white">
          {profile ? (
            <img
              src={profile}
              alt="profile"
              className="size-full rounded-full"
            />
          ) : (
            firstLetter(data)
          )}
        </div>

        <p className="text-lg">{data.data.name}</p>

        <div className="w-11/12 sm:w-2/3 mt-10 relative">
          <input
            onChange={editProfileHandler}
            type="file"
            className="absolute top-2 w-full p-3 z-[1] opacity-0"
          />
          <div className="absolute top-2 mb-1 centering w-full cursor-pointer p-3 rounded-md text-white bg-green-500">
            <p>تغییر تصویر پروفایل</p>
            <FaPencilAlt className="mr-1.5 size-4" />
          </div>
          <div
            onClick={deleteProfile}
            className={`${
              !profile ? "opacity-55" : "cursor-pointer"
            } absolute top-16  centering w-full p-3 rounded-md text-white bg-red-500`}
          >
            <p>حذف تصویر پروفایل</p>
            <FaTrash className="mr-1.5 size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
