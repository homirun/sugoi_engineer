import * as React from "react";
import { useState } from "react"


const Top = (props) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [engineerName, setEngineerName] = useState("")
    const [isStartAnimation, setIsStartAnimation] = useState(false)

    const handleClickVisibilityFormToggleSwitch = () => {
        setIsStartAnimation(!isStartAnimation)
        setIsVisibleForm(!isVisibleForm)
    }

    const handleChangeEngineerName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEngineerName(event.target.value)
    }

    return (
        <>
            <div id="sugoi-content-container">
                <div id="sugoi-title" className={isStartAnimation ? 'start-animation': ''}>
                    <h1><span className="sugoi-rainbow" onClick={handleClickVisibilityFormToggleSwitch}>sugoi</span>.engineer</h1>
                </div>
                { isVisibleForm &&
                <form id="sugoi-form">
                    /
                    <input type="text" placeholder="Name!!" value={engineerName} onChange={handleChangeEngineerName} />
                    <input type="submit" value="Post" className="btn btn-primary"/>
                </form> }
            </div>
        </>
    );
}


const App = () => {
    return (
        <Top

        ></Top>
    );
};

export default App;