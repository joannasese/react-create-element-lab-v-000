import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const list = React.createElement('ul', {},
  [
    React.createElement('li', {}, 'Javascript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream')
  ]
)
const meInReact = React.createElement('div', {}, [title, paragraph, list])

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
