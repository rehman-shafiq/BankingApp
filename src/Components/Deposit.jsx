import { use } from 'react';
import { useState, useEffect } from 'react'
import { Button, Modal, } from 'react-bootstrap';

const Deposit = ({ onDeposit, onbalance, showdepositprop }) => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [amount, setAmount] = useState("");
    const handleclose = () => setShow(false)

    const handleChange = (e) => {
        setInput(e.target.value)
        setAmount(Number(e.target.value));
    }
    const previewNum = (num) => {
        setInput((prev) => {
            const newVal = prev + num;
            setAmount(Number(newVal));
            return newVal;
        }
        );
    }
    const handleClear = () => {
        setInput("")
    }
    const handleSubmit = () => {
        onDeposit(amount)
        setShow(false);
        setInput("")
    }
    useEffect(() => {
        setShow(showdepositprop);
    }, [showdepositprop])
    return (
        <>
            <Modal
                show={show}
                onHide={handleclose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100">Deposit Money</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div
                        className="position-absolute left-0 top-0 end-0 m-3 badge bg-white fs-6"
                        style={{ borderRadius: "10px" }}
                    >
                        <p className="text-black mb-0"> Balance:{onbalance} </p>
                    </div>
                    <h4 className="text-center mb-4"></h4>
                    <div className="input-group mt-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Amount"
                            required
                            value={input}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary w-100 mt-2" type="button" onClick={() => handleSubmit()} >
                            Deposit
                        </button>
                        <div className="text-center mb-1">
                            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4"></div>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,].map((num, amount) => (
                                <button
                                    key={num}
                                    className="btn btn-outline-dark mb-2 "
                                    style={{ width: "100px", height: "60px", fontSize: "20px" }}
                                    onClick={() => previewNum(num, amount)}
                                >
                                    {num}
                                </button>
                            ))}
                            <button className="btn btn-outline-dark mb-2 "
                                style={{ width: "100px", height: "60px", fontSize: "20px" }}
                                onClick={() => handleClear()}>
                                Clear
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Deposit;