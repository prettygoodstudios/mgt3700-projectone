import React, {Component} from "react";
import ExperimentOne from "./ExperimentOne.jsx";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import Learning from "./Learning.jsx";
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
            </div>
        );
    }
}

export default App;