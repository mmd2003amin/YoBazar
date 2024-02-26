const firstLitter = (data) => {
  return data.data.name.split("")[0].toUpperCase();
};

export default firstLitter;