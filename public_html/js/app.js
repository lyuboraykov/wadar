import React from 'react';

import {Analyzer} from './analyzer';
import {Radar} from './radar';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredArticle: ''
    };
  }

  render() {
    return (<div className='container'>
      <div className='jumbotron'>
        <h1>Вадар</h1>
      </div>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Въведи статия</h3>
        </div>
        <div className='panel-body'>
          <textarea className='form-control' rows='10' onChange={this.onTextChange.bind(this)}></textarea>
        </div>
      </div>
      <button type="button" className="btn btn-default" onClick={this.analyzeText.bind(this)}>Давай</button>
      <div id='radar'></div>
      <div id='ref-table'></div>
    </div>);
  }

  onTextChange(e) {
    this.setState({
      enteredArticle: e.target.value
    });
  }

  analyzeText() {
    var analyzer = new Analyzer(this.state.enteredArticle);
    Radar.draw(analyzer.technologies);
  }
}
