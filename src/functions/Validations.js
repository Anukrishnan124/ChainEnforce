const handlePhone = (e, setNum) => {
  const value = e.replace(/\D/g, "");
  setNum(value);
};

export {handlePhone};
