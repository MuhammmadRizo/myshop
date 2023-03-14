import { useEffect, useState } from "react";
import Translation from './Data.json'

function TranslateLanguages() {
    const [language, setLanguage] = useState(["UZB"]);
    const [content, setContent] = useState({});

    useEffect(() => {
        if (language=="UZB"){
            setContent(Translation.UZB);
        } else if(language==("ENG")){
            setContent(Translation.ENG);            
        } else if(language==("RUS")){
            setContent(Translation.RUS);            
        }
    })
    
    return(
        <div>
            <select value={language} onChange={(e) => {setLanguage(e.target.value)}}>
                <option value="UZB">UZB</option>
                <option value="EN">EN</option>
                <option value="RUS">RUS</option>
            </select>
        </div>
    );

}