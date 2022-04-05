class StatusBox extends Reactr.Component{
    constructor(props) {
        super(props);

        this.state = {
            enabled: true,
            message: 'State is enables'

        }
        this.showMassage = this.showMessage.bind(this);

    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(state => ({
            enabled: state.enabled

        }));
    }
    showMessage() {
        if (this.state.enabled) {
            alert('are you sure you want to disable this?')
            this.setState({
                message: 'state is disabled'
            });
        }
            else {

            alert('are you sure you want to enable this?')
            this.setState({
                message: 'state is enabled'
            });



        }
    }
    render() {
        return (
            <div>
                <div className = "box">
                    {this.state.message}

                </div>
                <button classNamen = "button"
                onClick = {(e) => {
                    this.handleClick(e);
                    this.showMassage();
                }}>
                                       {this.state.enabled ? 'Disabled' : 'Enable'}
                                       </button>
                                       </div>
                

        
    
    );

}
    }
    ReactDOM.render(<StatusBox />, document.getElementById('react-event-toggle'));