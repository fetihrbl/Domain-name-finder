import React, { useState } from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";


const name = require("@rstacruz/startup-name-generator");

const App = () => {

    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!(inputText.length>0));
        setSuggestedNames(inputText.length > 0 ? name(inputText) : []);
    };
    return(
        <div>
            <Header headTitle="Just Name It!!" headerExpanded={headerExpanded}/>
            <SearchBox onInputChange={handleInputChange}/>
            <ResultContainer suggestedNames={suggestedNames}/>
        </div>
    )
}

export default App;