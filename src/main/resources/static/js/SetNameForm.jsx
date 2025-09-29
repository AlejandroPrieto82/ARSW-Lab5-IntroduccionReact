class SetNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/setname?name=${encodeURIComponent(this.state.name)}`)
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({ message: result });
        },
        (error) => {
          this.setState({ message: "Error: " + error.message });
        }
      );
  };

  render() {
    return (
      <div>
        <h2>Set your name</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name"
          />
          <button type="submit">Save</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <SetNameForm />,
  document.getElementById("setname")
);
