import { useMoralis, useChain } from "react-moralis";

import walletIcon from "./wallet-icon.png";
import chainIcon from "./chain-icon.png";

const style = {
  main: "w-screen h-screen flex flex-col",
  navbar:
    "w-screen h-auto bg-blue-500 flex justify-between items-center px-20 py-4",
  title: "text-center text-white font-xl font-bold",
  content:
    "w-screen h-full flex flex-grow-1 bg-red-50 justify-center items-center",
  button:
    "bg-white px-10 h-auto rounded-lg text-blue-500 hover:bg-gray-200 transiton duration-300",
  card: "w-2/3 h-2/3 bg-white border-4 border-blue-500 rounded-lg px-10 py-20",
  walletTitle: "flex items-center gap-2",
  cardTitle: "text-4xl font-extrabold",
};

export default function Dashboard() {
  const { logout, user } = useMoralis();
  const { chain } = useChain();

  const unAuth = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <div className={style.title}>
          <p>React</p>
          <p>Walletconnect</p>
        </div>
        <button onClick={unAuth} className={style.button}>
          log out
        </button>
      </div>
      <div className={style.content}>
        <div className={style.card}>
          <div>
            <div className={style.walletTitle}>
              <img className="h-10 w-10" src={walletIcon} alt="Wallet Icon" />
              <p className={style.cardTitle}>Wallet Address</p>
            </div>
            <p>{user.get("ethAddress")}</p>
          </div>
          <div className="mt-10">
            <div className={style.walletTitle}>
              <img className="h-10 w-10" src={chainIcon} alt="Chain Icon" />
              <p className={style.cardTitle}>Chain</p>
            </div>
            <p>{chain?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
