import BMF from "browser-md5-file";

const GetHash = (file, setHash) => {
  if (file === null) return;

  const bmf = new BMF();
  bmf.md5(
    file,
    (err, md5) => {
      setHash(md5)
    },
    (progress) => {}
  );
};

export default GetHash;
