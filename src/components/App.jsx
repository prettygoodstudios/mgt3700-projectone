import React, {Component} from "react";
import Connections from "./Connections.jsx";
import ExperimentOne from "./ExperimentOne.jsx";
import ExperimentTwo from "./ExperimentTwo.jsx";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import Learning from "./Learning.jsx";
import Methods from "./Methods.jsx";
import Process from "./Process.jsx";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Intro/>
                <Process/>
                <ExperimentOne/>
                <Learning/>
                <ExperimentTwo/>
                <Methods/>
                <Connections/>
            </div>
        );
    }
}

export default App;