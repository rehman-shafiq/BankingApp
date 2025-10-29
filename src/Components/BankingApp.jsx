import { useState } from 'react'
import './BankingApp.css'
function BankingApp({ onSendMoneyClick, onCheckBalanceClick }) {

    /* Hooks */
    const [text, setText] = useState("")
    const [input, setInput] = useState("")
    const [show, setShow] = useState(true)
    const [balance, setBalance] = useState(10000);



    /* Custom Method */
    const onCheckBalance = () => {
        alert(`Your current balance is $${balance}`)
    }


    const ShowButton = () => {
        if (input.length >= 13) {
            setShow(true)
        } else {
            setShow(false)
        }
    }


    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        ErrorValidation();
        setText(input);
        ShowButton();
        setInput("");
    }
    const handleNumberClick = (num) => {
        setInput((pre) => pre + num)

    }
    const handleClear = () => {
        setInput("")

    }
    const ErrorValidation = () => {
        if (input === "") {
            alert("Input is Required")
            return;
        }
        if (input.length < 13) {
            alert("Account Number Requried to 13 digits")
            setInput("")
            text = "";
            return;
        }
        if (!input === "") {
            setInput("")
        }

    }
    const handleprop = `${input === text ? " " : " Account Number :"} ${text}`;
    const handleprop2 = `${input === text ? " " : " Balance :"} ${text === "" ? "" : balance}`;





    return (
        <>
            <div className="container mt-5 p-4 border rounded shadow-sm" style={{ maxWidth: "400px" }}>
                <div
                    className="position-absolute left-0 top-0 end-0 m-3 badge bg-white fs-6"
                    style={{ borderRadius: "10px" }}
                >
                    <p className="text-black mb-0" > {handleprop} </p>
                    <p className="text-black mb-0"> {handleprop2}  </p>
                </div>
                <h4 className="text-center mb-4">Bank Actions</h4>
                <div className="input-group mb-4">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Bank Account Number"
                        required
                        onChange={handleChange}
                        value={input}
                    />
                    <button className="btn btn-primary" onClick={handleClick} type="button">
                        Enter
                    </button>
                </div>


                <div className="text-center mb-4">
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                            <button
                                key={num}
                                className="btn btn-outline-dark"
                                style={{ width: "70px", height: "60px", fontSize: "20px" }}
                                onClick={() => handleNumberClick(num)}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            className="btn btn-outline-dark"
                            style={{ width: "70px", height: "60px", fontSize: "20px" }}
                            onClick={() => handleClear()}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                {(show &&
                    <div className="container text-center mt-4">
                        <div className="d-flex flex-wrap justify-content-center gap-5">

                            <button className="btn btn-primary action-btn" onClick={onSendMoneyClick}>
                                <i className="bi bi-send"></i>
                                <span>Send</span>
                            </button>

                            <button className="btn btn-success action-btn">
                                <i className="bi bi-arrow-down-left-circle"></i>
                                <span>Withdraw</span>
                            </button>

                            <button className="btn btn-warning action-btn">
                                <i className="bi bi-arrow-up-right-circle"></i>
                                <span>Deposit</span>
                            </button>

                            <button className="btn btn-info action-btn" onClick={onCheckBalance}>
                                <i className="bi bi-wallet2"></i>
                                <span>Balance</span>
                            </button>

                        </div>
                    </div>
                )}

            </div>


        </>
    )
}

export default BankingApp;
