import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../config/Firebase.config";

const UploadFile = (foldername, filename, file, setUrl) => {
  const imageRef = ref(storage, `${foldername}/${filename}`);
  uploadBytes(imageRef, file).then((snapshot) => {
    getDownloadURL(snapshot.ref)
      .then((url) => {
        setUrl(url)
      })
  }).catch((err) => {
    console.log(err)
  })
}

export default UploadFile;