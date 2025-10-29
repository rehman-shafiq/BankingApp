
import { useEffect, useState } from 'react';
import BankingApp from './Components/BankingApp'
import SendMoney from './Components/SendMoney';
import WithdrawMoney from './Components/WithdrawMoney';



function App() {
  const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModel] = useState(false);
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

  useEffect(() => {
    setShowSendMoneyModal(showSendMoneyModal);
  }, [showSendMoneyModal]);


  useEffect(() => {
    setShowWithdrawModel(showWithdrawModal);
  }, [showWithdrawModal]);


  return (
    <>
      <BankingApp
        onSendMoneyClick={() => showSendMoneyComponent()}
        onWithdrawClick={() => showWithdrawComponent()}
        onCheckBalance={() => alert(`Your current balance is ${currentAmount}`)}
        onbalance={currentAmount}
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
    </>
  )
}

export default App
