import * as React from "react";
import {useState} from "react";
import axios from "axios";

const Top = (props) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);
    const [engineerName, setEngineerName] = useState("");
    const [isStartAnimation, setIsStartAnimation] = useState(false);

    const handleClickVisibilityFormToggleSwitch = () => {
        setIsStartAnimation(!isStartAnimation);
        setIsVisibleForm(!isVisibleForm);
    }

    const handleChangeEngineerName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEngineerName(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (engineerName === "") {
            alert('GitHubのIDを入力してください');
            return;
        }

        try {
            const data = new FormData();
            const token = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
            data.append("engineer[name]", engineerName);

            const res = await axios.post("/engineers.json", data, {headers: {"X-CSRF-Token": token }});
            console.log(res)
            setEngineerName("");
            alert("https://sugoi.engineer/" + engineerName + "/ の作成に成功しました");

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div id="sugoi-content-container">
                <div id="sugoi-title" className={isStartAnimation ? 'start-animation' : ''}>
                    <h1><span className="sugoi-rainbow" onClick={handleClickVisibilityFormToggleSwitch}>sugoi</span>.engineer
                    </h1>
                </div>
                {isVisibleForm &&
                <>
                    <form id="sugoi-form-engineer" className={isStartAnimation ? 'start-animation' : ''}>
                        /
                        <input type="text" placeholder="GitHub ID" value={engineerName}
                               onChange={handleChangeEngineerName}/>
                    </form>
                    <div id="sugoi-message" className={isStartAnimation ? 'start-animation' : ''}>
                        <span className="sugoi-rainbow">sugoi.engineer/{engineerName}</span>からgithub.com/{engineerName}へリダイレクト出来るようになります。
                        <br/>(リンクは不定期に消える可能性があります)
                    </div>
                    <div id="sugoi-form-submit" onClick={handleSubmit}
                         className={isStartAnimation ? 'start-animation' : ''}>
                        <input type="submit" value="登録"/>
                    </div>

                </>
                }


            </div>
        </>
    );
}

const App = () =>
{
    return (
        <Top

        ></Top>
    );
}
;

export default App;