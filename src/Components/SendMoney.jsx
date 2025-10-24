
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import BankingApp from './BankingApp';

const SendMoney = () => {

    const [show, setShow] = useState(false);

    const ModelTigger = () => {
        console.log("Send button clicked!")
       if(!show){
        setShow(true)
       }
    }

    const handleclose = () => setShow(false)
    return (
        <>
            <div className="container mt-5" >
                <h2 className="text-center mb-4">Send Money</h2>

            </div>

            <Modal
                show={show}
                onHide={handleclose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <BankingApp onSendMoneyClick={ModelTigger} />

        </>
    );
}
export default SendMoney;