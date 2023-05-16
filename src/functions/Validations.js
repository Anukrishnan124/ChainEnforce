const handleNum = (e, setNum) => {
  const value = e.replace(/\D/g, "");
  setNum(value);
};

export {handleNum};
