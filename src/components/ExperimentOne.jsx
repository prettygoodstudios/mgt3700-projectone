import React, {Component} from "react";

export default class ExperimentOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {
                    title: "Assemble Chassis",
                    time: 20
                },
                {
                    title: "Assemble Skateboard",
                    time: 15
                },
                {
                    title: "Attach Chassis to Skateboard",
                    time: 10
                },
                {
                    title: "Attach Body Panels",
                    time: 20
                },
                {
                    title: "Paint Vechicle",
                    time: 5
                },
                {
                    title: "Install Windows and Windshields",
                    time: 10
                },
                {
                    title: "Install Interior",
                    time: 20
                },
                {
                    title: "Finishing Touches",
                    time: 5
                }
            ],
            taskOne: null,
            taskTwo: null,
            error: null,
            success: null
        }
    }

    submit = () => {
        const {taskOne, taskTwo, tasks} = this.state;
        if (taskOne == null || taskTwo == null){
            this.setState({
                error: "You must provide an end for both task one and two.",
                success: null
            });
        }else if (taskOne >= taskTwo) {
            this.setState({
                error: "The end of task one must come before the end of task two.",
                success: null
            });
        } else if (taskTwo == tasks.length-1) {
            this.setState({
                error: "You must leave some subtasks for task three.",
                success: null
            });
        } else {
            const taskOneTime = tasks.filter((task, index) => index <= taskOne).map(t => t.time).reduce((prev, curr) => prev + curr);
            const taskTwoTime = tasks.filter((task, index) => (index <= taskTwo && index > taskOne)).map(t => t.time).reduce((prev, curr) => prev + curr);
            const taskThreeTime = tasks.filter((task, index) => index > taskTwo).map(t => t.time).reduce((prev, curr) => prev + curr);
            console.log(taskOneTime, taskTwoTime, taskThreeTime);
            if (taskOneTime == taskTwoTime && taskThreeTime == taskOneTime) {
                this.setState({
                    error: null,
                    success: "You found the most optimal solution."
                });
            } else {
                this.setState({
                    error: "Your solution is suboptimal",
                    success: null
                });
            }
        }
    }

    render() {
        const { tasks, error, success } = this.state;
        return (
        <div className="expirement-one section">
            <h1 className="section__header">Let’s now see if you can design a
process?</h1>
            <p>Your tasked with designing the production process for the Tesla Model 3. Your draconian boss has dictated that the process must have 3 tasks. Your job is to split the sub tasks between the three tasks in a way that produces the most amount of cars possible. Use the radio inputs below to select the final subtask for task one and two.</p>
            <div className="experiment-one__selectors">
                <div className="expirement-one__selectors__one">
                    <h2>Task One</h2>
                    {
                        tasks.map(({title, time}, i) => {
                            return (
                                <div key={i} onChange={() => this.setState({taskOne: i})}>
                                    <input type="radio" id="taskOneSelector" name="taskOneSelector"/>
                                    {title}, {time} mins
                                </div>
                            )
                        })
                    }
                </div>
                <div className="expirement-one__selectors__one">
                    <h2>Task Two</h2>
                    {
                        tasks.map(({title, time}, i) => {
                            return (
                                <div key={i} onChange={() => this.setState({taskTwo: i})}>
                                    <input type="radio" id="taskTwoSelector" name="taskTwoSelector"/>
                                    {title}, {time} mins
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className="experiment-one__submit btn-default" onClick={this.submit}>Check Solution</button>
            {   error &&
                <div className="experiment-one__error">{error}</div>
            }
            {   success &&
                <div className="experiment-one__success">{success}</div>
            }
        </div>
        )
    }
}