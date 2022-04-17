import waves from "./bg-waves.png";
import network from "./img-login.png";

const style = {
  main: "w-screen h-screen flex bg-red-50",
  leftSide: "flex-1",
  rightSide: "flex-1",
  wavesImage: "w-full h-full object-cover",
  networkImage: "w-1/2 h-auto mt-4 ml-52",
  content: "ml-32 flex flex-col items-center",
  title: "text-5xl font-extrabold text-blue-500",
  loginButton:
    "bg-blue-500 hover:bg-blue-700 text-white w-auto px-10 py-2 text-2xl mt-4 rounded-md transition duration-300",
};

export default function Login() {
  return (
    <div className={style.main}>
      <div className={style.leftSide}>
        <img
          className={style.networkImage}
          src={network}
          alt="Blockchain Network Representation"
        />
        <div className={style.content}>
          <p className={style.title}>React</p>
          <p className={style.title}>Walletconnect</p>
          <button className={style.loginButton}>Log in</button>
        </div>
      </div>
      <div className={style.rightSide}>
        <img
          className={style.wavesImage}
          src={waves}
          alt="Waves Pattern Background"
        />
      </div>
    </div>
  );
}
