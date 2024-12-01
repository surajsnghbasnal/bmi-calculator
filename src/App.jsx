import React, { useState } from 'react'
import './App.css'

const App = () => {

    // Making state of our application
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState()
    const [message, setMessage] = useState()
    const [show, setShow] = useState(false);


    //* BMI Calculation Logic
    const calBmi = (e) => {
        e.preventDefault();

        if (weight <= 0 || height <= 0) {
            alert('Kindly Enter valid Height and W eight.')
        } else {
            let bmi = (Number(weight) / (Number(height) * Number(height))) * 703;

            setBmi(bmi.toFixed(1))

            //
            setShow(true)
            if (bmi < 18.5) {
                setMessage("You're in the underweight category.");
            } else if (bmi >= 18.5 && bmi < 25) {
                setMessage("You're in the healthy weight category.");
            } else {
                setMessage("You're in the overweight category.");
            }
        }
    }

    //* Reload Logic
    const reload = () => {
        setShow(false)
        window.location.reload();
    }


    return (
        <div className="App">
            <div className="container">
                <div className="card">
                    <h1>BMI Calculator</h1>
                    <form onSubmit={calBmi}>
                        <div className="input-group">
                            <label>Weight (lbs)</label>
                            <input
                                type="text"
                                placeholder="Enter your weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Height (in)</label>
                            <input
                                type="text"
                                placeholder="Enter your height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="button-group">
                            <button className="btn" type="submit">
                                Submit
                            </button>
                            <button className="btn btn-outline" type="button" onClick={reload}>
                                Reload
                            </button>
                        </div>
                        {show && (
                            <div className="result">
                                <h3>Your BMI is {bmi}</h3>
                                <p>{message}</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
