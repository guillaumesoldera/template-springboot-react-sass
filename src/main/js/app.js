import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss'
import { MyButton } from './components/button';


function callApi(handler) {
    fetch('/api/hello')
        .then(r => r.text())
        .then(value => {
            handler(value)
        })
}

function App(props) {
    const [message, setMessage] = useState("")
    return (
        <div className="main-wrapper">
            <label>Hello from React</label>
            <div className="button-container">
                Click on <MyButton label={"Clever Button"} onClick={() => callApi(setMessage)}></MyButton> to have a message : 
            </div>
            {message && <span>{message}</span>}
        </div>
    )
}

export function mountApp(props) {
    ReactDOM.render(
        <App />,
        document.getElementById(props.containerId)
        )
}