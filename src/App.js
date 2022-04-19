function App() {
  const isAuthenticated = false;
  return (
    <div className="w-screen h-screen py-20 flex flex-col items-center bg-gradient-to-br from-blue-200 to-blue-400">
      {!isAuthenticated ? (
        <button className="bg-white hover:bg-gray-100 px-6 py-2 rounded-md text-xl text-blue-500 font-bold transitiond duration-300">
          Walletconnect Auth
        </button>
      ) : (
        <div className="flex flex-col itmes-center gap-2">
          <p className="font-bold">
            Wallet address: 00000000000000000000000000000
          </p>
          <p className="font-bold">Chain: Rinkeby Testnet</p>
          <button className="bg-white hover:bg-gray-100 px-6 py-2 rounded-md text-xl text-blue-500 font-bold transitiond duration-300">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
