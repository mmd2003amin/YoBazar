const useNamePage = () => {
  const page = window.location.pathname;
  const namePage =
    page === "/man"
      ? "مردانه"
      : page === "/woman"
      ? "زنانه"
      : page === "/glasses"
      ? "عینک"
      : page === "/bag"
      ? "کیف"
      : page === "/watch"
      ? "ساعت"
      : "کفش";
  return namePage;
};

export { useNamePage };
