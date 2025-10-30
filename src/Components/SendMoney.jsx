
import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const SendMoney = ({ showComponentProp, onSend, onbalance }) => {

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [amount, setAmount] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [showInput2, setShowInput2] = useState(false);
    const [text, setText] = useState("")

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
        });
    }

    const handleClear = () => {
        setInput("");
    }
    const handleSubmit = () => {
        onSend(amount);
        setShow(false);
        setInput("");
        setShowInput(true);
        setShowInput2(false);
        setText("");


        if (amount <= onbalance) {
            alert(`Sending ${input} to account ${text}`);

        }

    }
    const AccountNumberValidate = () => {
        /*       autoclose(); */
        if (input === "") {
            alert("First Enter Account Number")
            return;
        }
        if (input.length < 13) {
            alert("Account Number Requried to 13 digits")
            setInput("");
            return;
        }
        if (!input === "") {
            setInput("");
            return;
        }
        setText(input);
        setInput("");
        setShowInput(false);
        setShowInput2(true);

    }

    useEffect(() => {
        setShow(showComponentProp);
    }, [showComponentProp]);


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
                    <Modal.Title className="text-center w-100">Send Money</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div
                        className="position-absolute left-0 top-0 end-0 m-3 badge bg-white fs-6"
                        style={{ borderRadius: "10px" }}
                    >
                        <p className="text-black mb-0"> AccNo: {text}  </p>
                        <p className="text-black mb-0"> Balance:{onbalance}  </p>
                    </div>
                    <h4 className="text-center mb-4"></h4> 
                    <div className="input-group mt-4">
                        {showInput && <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Account Number To Send Money"
                            required
                            value={input}
                            onChange={handleChange}
                        />}{showInput &&
                            <button className="btn btn-primary w-100 mt-2" type="button" onClick={() => AccountNumberValidate()}>
                                Enter
                            </button>
                        }
                    </div>
                    <div className="input-group mt-4">
                        {showInput2 && <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Amount"
                            required
                            value={input}
                            onChange={handleChange}
                        />}{showInput2 &&
                            <button className="btn btn-primary w-100 mt-2" type="button" onClick={() => handleSubmit()}>
                                Send
                            </button>
                        }
                        <div className="text-center  mb-1">
                            <div className="d-flex flex-wrap justify-content-center mb-4"></div>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,].map((num) => (
                                <button
                                    key={num}
                                    className="btn btn-outline-dark mb-2  "
                                    style={{ width: "100px", height: "60px", fontSize: "20px" }}
                                    onClick={() => previewNum(num)}
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
    );
}
export default SendMoney;