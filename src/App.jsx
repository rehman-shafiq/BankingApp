
import { useEffect, useState } from 'react';
import BankingApp from './Components/BankingApp'
import SendMoney from './Components/SendMoney';

function App() {
  const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);  

  const showSendMoneyComponent = () => {
    if (!showSendMoneyModal) {
      setShowSendMoneyModal(true);
    } else {
      setShowSendMoneyModal(false);
    }
  }
  useEffect(() => {
    setShowSendMoneyModal(showSendMoneyModal);
  }, [showSendMoneyModal]);

  return (
    <>
      <BankingApp
        onSendMoneyClick={() => showSendMoneyComponent()
        }
      />
      <SendMoney
        showComponentProp={showSendMoneyModal}
        amount={"1000"}
      />
    </>
  )
}

export default App
