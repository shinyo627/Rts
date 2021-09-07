import {Component} from 'react'

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name : '',
    user: undefined
  }

  clickHandler = () => {
    const foundUser = this.props.users.find(user => {
      return user.name === this.state.name;
    })

    this.setState({ user: foundUser})
  }

  render() {
    return (
      <div>
      User Search
      <input type="text" 
      name={this.state.name} 
      onChange={e => this.setState({name: e.target.value})} />
      <button onClick={this.clickHandler}>Find User</button>

      <div>
      {this.state.user && this.state.user.name}
      {this.state.user && this.state.user.age}
      </div>
      </div>
    )
  }
}