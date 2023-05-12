import detectEthereumProvider from "@metamask/detect-provider";
import Swal from "sweetalert2";

const ConnectWallet = async (setWallet) => {
  const provider = await detectEthereumProvider();
  if (provider) {
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
      // console.log(accounts[0]);
    } catch (err) {
      Swal.fire({
        title: "Connection Error!",
        text: "Please login to metamask to continue",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  } else {
    console.log("Please install MetaMask!");
  }
};

export default ConnectWallet;
