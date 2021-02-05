import React, {Component} from "react";

export default class ExperimentTwo extends Component {
    render(){
        return (
            <div className="experiment-two section">
                <h1 className="section__header">Now that you know a little about processes try to identify the problem?</h1>
                <p>Station A is hardly working and has little work to do. In contrast, station B is constantly working and never has a break. What should you do in this situation? Hover over the option you believe is correct.</p>
                <h2>Options:</h2>
                <div className="experiment-two__options">
                    <div className="experiment-two__options__option">
                        <div className="experiment-two__options__option__visible">
                        Fire station A’s manager for their poor performance.
                        </div>
                        <div className="experiment-two__options__option__answer">
                            Sike, you made the same mistake Elon made on the Tesla Model 3 production line.
                            <a className="btn-default" href="https://blogs.anderson.ucla.edu/global-supply-chain/2018/10/can-elon-musk-learn-from-lucille-ball.html">Read More</a>
                        </div>
                    </div>
                    <div className="experiment-two__options__option">
                        <div className="experiment-two__options__option__visible">
                        Provide station B with additional resources and training.
                        </div>
                        <div className="experiment-two__options__option__answer">
                        Correct, Station B is being fully utilized due to the work in progress (WIP) building up behind it. WIP is inventory that is sitting idle in the production process. Therefore, Station B is the bottleneck. Option one is a poor choice, since increasing the production of station A would only lead to additional WIP.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}