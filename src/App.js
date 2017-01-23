import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Bio extends Component {
  render() {
    const { name, description, icon } = this.props;
    return (
      <section className="Bio-header">
        <header>
          <h2>{name}</h2>
          <p>{description}</p>
        </header>
        <p>Feel free to <a href="mailto:hi@bresnik.org">reach out</a> or view repositories on <a href="https://github.com/brez/">Github</a></p>
        <p className="Github">This is ReactJS, <a href="https://github.com/brez/react-portfolio">Check it out.</a></p>
      </section>
    );
  }
}

class Project extends Component {
  render() {
    const { title, description, image, color, backgroundColor } = this.props;
    return(
      <div className="Project">
        <div className="Project-img">
          {image}
        </div>
        <div className="Project-title">
          {title}
        </div>
        <div className="Project-desc">
          {description}
        </div>
      </div>
    );
  }
}

class Portfolio extends Component {
  render() {
    const works = this.props.portfolio.map(function (work, i) {
      return(
        <Project
          key={i}
          title={work.title}
          description={work.description}
          image={work.image}
          color={work.color}
          backgroundColor={work.bgColor}
        />
      );
    });
    return(
      <ul className="Portfolio-list">
        {works}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bio {...this.props} />
        <Portfolio {...this.props} />
      </div>
    );
  }
}

export default App;
