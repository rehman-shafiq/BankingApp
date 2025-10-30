
import { use, useEffect, useState } from 'react';
import BankingApp from './Components/BankingApp'
import SendMoney from './Components/SendMoney';
import WithdrawMoney from './Components/WithdrawMoney';
import Deposit from './Components/Deposit';



function App() {
  const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModel] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(10000)

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

  const handleSend = (amount) => {
    if (amount <= currentAmount) {
      setCurrentAmount(currentAmount - amount)
      alert(`you have successfully sent ${amount}`)
    } else {
      alert('Insufficient balance!')
    }
  }
  const handleWithdraw = (amount) => {
    if (amount <= currentAmount) {
      setCurrentAmount(currentAmount - amount);
      alert(`You have successfully withdraw ${amount}`);
    } else {
      alert('Insufficient balance!');
    }
  };
  const handledepositComponent = () => {
    if (!showDepositModal) {
      setShowDepositModal(true);
      console.log("Deposit Modal Opened");
    } else {
      setShowDepositModal(false);
    }
  }

  useEffect(() => {
    setShowSendMoneyModal(showSendMoneyModal);
  }, [showSendMoneyModal]);

  useEffect(() => {
    setShowWithdrawModel(showWithdrawModal);
  }, [showWithdrawModal]);

  useEffect(() => {
    setShowDepositModal(showDepositModal);
  }, [showDepositModal]);

  return (
    <>
      <BankingApp
        onSendMoneyClick={() => showSendMoneyComponent()}
        onWithdrawClick={() => showWithdrawComponent()}
        onCheckBalance={() => alert(`Your current balance is ${currentAmount}`)}
        onbalance={currentAmount}
        onDepositBalance={() => handledepositComponent()}
      />
      <SendMoney
        showComponentProp={showSendMoneyModal}
        onSend={(amount) => handleSend(amount)}
        onbalance={currentAmount}
      />
      <WithdrawMoney
        withdrawprop={showWithdrawModal}
        onWithdraw={(amount) => handleWithdraw(amount)}
        onbalance={currentAmount}
      />
      <Deposit
        onDeposit={(amount) => setCurrentAmount(currentAmount + amount)}
        onbalance={currentAmount}
        showdepositprop={showDepositModal}
      />
    </>
  )
}

export default App
