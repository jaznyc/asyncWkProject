import React from 'react';
import firestore from './Firestore';

class TextEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      userList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.displayUsers = this.displayUsers.bind(this);
  }

  handleNameInput(evt) {
    console.log(evt.target.value);
    this.setState({ name: evt.target.value });
    console.log(this.state);
  }
  handleEmailInput(evt) {
    console.log(evt.target.value);
    this.setState({ email: evt.target.value });
    console.log(this.state);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const db = firestore.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection('users').add({
      fullname: this.state.name,
      email: this.state.email,
    });
    this.setState({
      name: '',
      email: '',
    });
    this.displayUsers();
  }

  displayUsers() {
    let cat = [];
    const db = firestore.firestore();
    let allUsers = db
      .collection('users')
      .get()
      .then(function (querySnapshot) {
        return querySnapshot.docs.map((doc) => doc.data());
      })
      .then((users) => this.setState({ userList: users }));
  }

  componentDidMount() {
    this.displayUsers();
  }

  render() {
    console.log('this is the userlist', this.state.userList);
    return (
      <div id="main">
        <div className="formData">
          <div className="formTitle">
            <h2>Add To Firebase</h2>
          </div>
          <div className='forms'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fullname"></label>
            <input
              className="text"
              placeholder="enter name here"
              value={this.state.name}
              onChange={this.handleNameInput}
            />
            <label htmlFor="email"></label>
            <input
              className="text"
              placeholder="enter email here"
              value={this.state.email}
              onChange={this.handleEmailInput}
            />
            <button id="submit">Submit</button>
          </form>
          </div>
        </div>
        <div className="usersPapa">
          <div className="users">
            <h2>User List</h2>
            {this.state.userList.length > 0 ? (
              this.state.userList.map((user, index) => {
                return (
                  <h4 key={index}>
                    name: {user.fullname}, email: {user.email}
                  </h4>
                );
              })
            ) : (
              <h3>No Current Users</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TextEntry;
