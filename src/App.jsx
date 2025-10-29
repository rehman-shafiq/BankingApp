
import { useEffect, useState } from 'react';
import BankingApp from './Components/BankingApp'
import SendMoney from './Components/SendMoney';
import WithdrawMoney from './Components/WithdrawMoney';


function App() {
  const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModel] = useState(false);
  /* const [balance, setBalance] = useState(``); */

  const showSendMoneyComponent = () => {
    if (!showSendMoneyModal) {
      setShowSendMoneyModal(true);
    } else {
      setShowSendMoneyModal(false);
    }
  }
  const showWithdrawComponent = () => {
    if (!showWithdrawModal) {
      setShowWithdrawModel(true);
    } else {
      setShowWithdrawModel(false);
    }
  }


  const handleSend = () => {
    alert(`You have successfully sent money.`);
    console.log(`hello`)
  }

  useEffect(() => {
    setShowSendMoneyModal(showSendMoneyModal);
  }, [showSendMoneyModal]);


  useEffect(() => {
    setShowWithdrawModel(showWithdrawModal);
  }, [showWithdrawModal]);


  return (
    <>
     {/*  <div>{balance}</div> */}
      <BankingApp
        onSendMoneyClick={() => showSendMoneyComponent()}
        onWithdrawClick={() => showWithdrawComponent()}
      />

      <SendMoney
        showComponentProp={showSendMoneyModal}
        onSend={handleSend}
      />
      <WithdrawMoney
      withdrawprop={showWithdrawModal}
      
      />
    </>
  )
}

export default App
