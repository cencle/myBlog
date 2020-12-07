import React from 'react';
import './App.less'
import {Button} from "antd";

type IProps = Readonly<{
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    onChange?: Function;
}>

const initialState = {
    count: 0
}
type IState = Readonly<typeof initialState>
export default class App extends React.Component<IProps, IState> {
    readonly state: IState = initialState
    setCount = () =>{
        this.setState({
           count: this.state.count + 1
        })
    }
    render() {
        return (
            <div className="App">
                <div>{this.state.count}</div>
                <div>{process.env.REACT_APP_INFO}</div>

                <Button type='primary' onClick={this.setCount}>点击</Button>
            </div>
        )
    }
}
