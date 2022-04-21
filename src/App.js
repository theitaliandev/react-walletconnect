import { useChain, useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated, authenticate, logout, user } = useMoralis();
  const { chain } = useChain();

  const walletconnectAuth = async () => {
    try {
      await authenticate({
        provider: "walletconnect",
        signingMessage: "Walletconnect Auth required by theItalianDev",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const logoutHandler = async () => {
    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-screen h-screen py-20 flex flex-col items-center bg-gradient-to-br from-blue-200 to-blue-400">
      {!isAuthenticated ? (
        <button
          onClick={walletconnectAuth}
          className="bg-white hover:bg-gray-100 px-6 py-2 rounded-md text-xl text-blue-500 font-bold transition duration-300"
        >
          Walletconnect Auth
        </button>
      ) : (
        <div className="flex flex-col itmes-center gap-2">
          <p className="font-bold">Wallet address: {user.get("ethAddress")}</p>
          <p className="font-bold">Chain: {chain?.name}</p>
          <button
            onClick={logoutHandler}
            className="bg-white hover:bg-gray-100 px-6 py-2 rounded-md text-xl text-blue-500 font-bold transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
