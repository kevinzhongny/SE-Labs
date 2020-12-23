class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                tardis: {
                    name: 'Time and Relative Dimension in Space',
                    caps: false,
                }
            };
        this.changeIt = this.changeIt.bind(this);
        }
    
    changeIt = () => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis: {
                    name: 'Time and Relative Dimension in Space'.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis: {
                    name: 'Time and Relative Dimension in Space'.toUpperCase(),
                    caps: true
                }
            })
        }
    }
    render() {
        return (
            <div>
                <DivOne parentMethod={this.changeIt} tardisParent={this.state.tardis}/>
            </div>
        )
    }
}

class DivOne extends React.Component {
    render() {
        return (
            <div>
                <DivTwo parentMethod={this.props.parentMethod} tardisParent={this.props.tardisParent}/>
            </div>
        )
    }
}

class DivTwo extends React.Component {
    render() {
        return (
            <div>
                <DivThree parentMethod={this.props.parentMethod} tardisParent={this.props.tardisParent}/>
                <DivThree parentMethod={this.props.parentMethod} tardisParent={this.props.tardisParent}/>
            </div>
        )
    }
}

class DivThree extends React.Component {
    render() {
        return (
            <div>
                <h3 onClick={() =>this.props.parentMethod()}>{this.props.tardisParent.name}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,document.getElementById('container')
)