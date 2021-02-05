import React, {Component} from "react";


export default class Quiz extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    prompt: "The theory of constraints states",
                    answers: [
                        "The least utilized tasks are the constraints.",
                        "Every process has a constraint.",
                        "Improving the speed of tasks that are not the constraint will improve cycle time."
                    ],
                    solution: 1,
                    answer: null,
                    error: null
                }, 
                {
                    prompt: "The Toyota Production System",
                    answers: [
                        "Increases the amount of WIP.",
                        "Decreases the amount of inventory in the production system.",
                        "Disregards constraints."
                    ],
                    solution: 1,
                    answer: null,
                    error: null
                },
                {
                    prompt: "WIP can be described as",
                    answers: [
                        "The amount of inventory in a production system.",
                        "The amount of time it takes to produce a unit.",
                        "Positively correlated with efficiency."
                    ],
                    solution: 0,
                    answer: null,
                    error: null
                },
                {
                    prompt: "What is Six Sigma?",
                    answers: [
                        "A optimization algorithim.",
                        "A set of key statistics that describe a production system.",
                        "A quality assurance system."
                    ],
                    solution: 2,
                    answer: null,
                    error: null
                }
            ],
            success: false,
            error: false
        }
    }

    update = (question, answer) => {
        const {questions} = this.state;
        questions[question].answer = answer;
        this.setState({
            questions
        })
    }

    submit = () => {
        const {questions} = this.state;
        let passed = true;
        questions.forEach((q, i) => {
            if(q.answer != q.solution) {
                passed = false
                questions[i].error = "Sorry your answer was incorrect."
            } else {
                questions[i].error = null;
            }
        })
        this.setState({
            questions,
            success: passed,
            error: !passed
        })
    }
    
    render(){
        const {questions, success, error} = this.state;
        return <div className="quiz section">
            <h1 className="section__header">Let's see if you can give Elon a run for his money?</h1>
            <div className="quiz__questions">
                {
                    questions.map((q, i) => {
                        const {prompt, answers, error} = q;
                        return <div className="quiz__questions__question" key={i}>
                            <h3>{i+1}. {prompt}</h3>
                            <div className="quiz__questions__answers">
                                {
                                    answers.map((a, aI) => {
                                        return <div className="quiz__questions__answers__answer" key={aI}>
                                                <input type="radio" id={"quiz__question__"+i} name={"quiz__question__"+i} onChange={() => this.update(i, aI)}/>
                                                {a}
                                            </div>
                                    })
                                }
                                {error && 
                                    <div className="quiz__error">
                                        {error}
                                    </div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
            <br />
            <button className="btn-default" onClick={this.submit}>Submit</button>
            {   success &&
                <div className="quiz__success">
                    Looks like Elon should probably hand you the keys to the Gigafactory.
                </div>
            }   
            {
                error && 
                <div className="quiz__error">
                    You still have a bit more to learn.
                </div>
            }
        </div>
    }
}