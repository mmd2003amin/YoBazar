const authHandler = () => {
  const user = localStorage.getItem("user");
  const url = location.href;

  if (
    (user && url.includes("auth")) ||
    (!user && url.includes("dashboard"))
  ) {
    location.assign("/");
  }
};

export default authHandler;
