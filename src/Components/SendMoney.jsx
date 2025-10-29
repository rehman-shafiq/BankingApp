
import { Button, Modal } from 'react-bootstrap';
import { use, useEffect, useState } from 'react';

const SendMoney = ({ showComponentProp }) => {

    const [show, setShow] = useState(false);
    const handleclose = () => setShow(false)
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    useEffect(() => {
        setShow(showComponentProp);
    }, [showComponentProp]);


/*     useEffect(() => {
        alert(`You have $${amount} remaining after this transaction.`);
    }, [input]); */
    const previewNum = (num) => {
        setInput((pre) => pre + num)
    }
    const handleClear = () => {
        setInput("")

    }

    const handleSubmit = () => {
        if (input === "") {
            alert("Enter Amount First")
            return;
        } else if (input >= 50001) {
            alert("You can not send more than 50000 at a time")
            setInput("")
            return;
        }

        else if (input !== "") {
            alert(`You have successfully sent ${input} amount`)
            setInput("")
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleclose}
                backdrop="static"
                keyboard={false}
                size='md'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Send Money</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div
                        className="position-absolute left-0 top-0 end-0 m-3 badge bg-white fs-6"
                        style={{ borderRadius: "10px" }}
                    >
                          {/*  <p className="text-black mb-0">  </p> */} 
                    </div>
                    <h4 className="text-center mb-4">Bank Actions</h4>
                    <div className="input-group mb-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Amount"
                            required
                            value={input}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary" type="button"   onClick={handleSubmit}>
                            Send
                        </button>
                        <div className="text-center mb-1">
                            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4"></div>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,].map((num) => (
                                <button
                                    key={num}
                                    className="btn btn-outline-dark mb-2 "
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