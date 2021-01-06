// installed axios - npm i axios. What does axios do? axios makes HTTP requests (calls)
  // import axios
// installed react router - npm i react-router-dom. What does router do? Router generates urls.
  // import react-reactor-dom
import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/654c19/wines/';
const PEOPLE_URL = 'http://myapi-profstream.herokuapp.com/api/f551c4/persons/';
const BOOK_URL = 'http://myapi-profstream.herokuapp.com/api/4e5a3d/books/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wines">Wines</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/wines">
              <Wines />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

class Wines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getWines() {
    try {
      const res = await axios.get(WINES_URL);
      this.setState({ wines: res.data });
    } catch (e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    this.getWines();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name, year, grapes, country, region, description, picture, price } = this.state;
    const wine =  { name, year, grapes, country, region, description, picture, price };
    try{
      const res = await axios.post(WINES_URL, wine);
      console.log(res.data);

      const updateRes = await axios.get(WINES_URL);
      this.setState({ wines: updateRes.data })
    } catch(e) {
      console.error(e);
    }

  }

  async handleDelete(id) {
    try {
      const res = await axios.delete(WINES_URL + id); // target wine id
      console.log(res.data);

      const updateRes = await axios.get(WINES_URL);
      this.setState({ wines: updateRes.data});
    } catch(er) {
      console.error(er.message);
    }
  }

  render() {
    return(
      <div className='wines'>
        <ul>
          { 
            this.state.wines && this.state.wines.map(wine => (
              <li>
                { wine.name } 
                Price: { wine.price } 
                <button onClick={ () => this.handleDelete(wine.id) }>Delete wine</button>
              </li>
            ))
          }
        </ul>
        <form className="new-wine-form"
          onChange = { this.handleChange }
          onSubmit = { this.handleSubmit }>
          <label>
            Wine Name:
            <input type="text" name="name" />
          </label>
          <label>
            Wine Year:
            <input type="text" name="year" />
          </label>
          <label>
            Grapes Used:
            <input type="text" name="grapes" />
          </label>
          <label>
            Country of Wine:
            <input type="text" name="country" />
          </label>
          <label>
            Region of Wine:
            <input type="text" name="region" />
          </label>
          <label>
            Description of Wine:
            <input type="text" name="description" />
          </label>
          <label>
            Picture:
            <input type="text" name="picture" />
          </label>
          <label>
            Price:
            <input type="text" name="price" />
          </label>
          <input type ="submit" />
        </form>
      </div>
    )
  }
}

class People extends App {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getPeople() {
    try{
      const res = await axios.get(PEOPLE_URL);
      this.setState({ people: res.data })
    } catch(e) {
      console.error(e.message);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState( { [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, username} = this.state;
    const person = { firstname, lastname, email, username};

    try {
      const res = await axios.post(PEOPLE_URL, person);
      console.log(res.data);

      const updateRes = await axios.get(PEOPLE_URL);
      this.setState( { people: updateRes.data });
    } catch(er) {
      console.error(er.message);
    }
  }

  async handleDelete(id) {
    try {
      const res = await axios.delete(PEOPLE_URL + id);
      console.log(res.data);

      const updateRes = await axios.get(PEOPLE_URL);
      this.setState({ people: updateRes.data });
    } catch(er) {
      console.error(er.message);
    }
  }

  componentDidMount() {
    this.getPeople();
  }

  render () {
    return(
      <div className="people-div">
        <ul>
          {
            this.state.people && this.state.people.map(person => (
              <li>
                { person.firstname } 
                { person.lastname }
                <button onClick= { () => this.handleDelete(person.id) }>Delete Person</button>
              </li>
            ))
          }
        </ul>
        <form className="new-people-form"
          onChange = { this.handleChange }
          onSubmit = { this.handleSubmit }>
          <label>
            First Name: 
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name: 
            <input type="text" name="lastname" />
          </label>
          <label>
            Email Address: 
            <input type="text" name="email" />
          </label>
          <label>
            Username: 
            <input type="text" name="username" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

class Books extends App {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  async getBooks() {
    try {
      const res = await axios.get(BOOK_URL);
      this.setState({ books: res.data });
    } catch(e) {
      console.error(e.message);
    }    
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return(
      <div className="books">
        <ul>
          { this.state.books && this.state.books.map( book => (
            <li>
              <b>{ book.title }</b> By: <i>{ book.author }</i>
            </li>
          ))}
        </ul>
        <form className="new-books-form"
          onChange = { this.handleChange }
          onSubmit = { this.submitChange }>
          <label>
            
          </label>
        </form>
      </div>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
