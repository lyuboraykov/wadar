import React from 'react';

import {Analyzer} from './analyzer';
import {Radar} from './radar';
import {FireBaseClient} from './firebase-client';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredArticle: '',
      message: ''
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
      <h3 isRendered={this.state.message !== ''}>{this.state.message}</h3>
      <button type="button" className="btn btn-default" onClick={this.drawLocalAnalytics.bind(this)}>
        Анализ на текста
      </button>
      <button type="button" className="btn btn-primary" onClick={this.drawGlobalAnalytics.bind(this)}>
        Всички резултати
      </button>
      <button type="button" className="btn btn-info" onClick={this.submitAnalytics.bind(this)}>
        Изпрати резултат
      </button>
      <div id='radar'></div>
      <div id='ref-table'></div>
    </div>);
  }

  onTextChange(e) {
    this.setState({
      enteredArticle: e.target.value
    });
  }

  drawGlobalAnalytics() {
    FireBaseClient.getTechnologies(this.renderAnalytics,
                                   this.errorConnectingToDB.bind(this));
  }

  renderAnalytics(technologies) {
    Radar.draw(technologies);
  }

  errorConnectingToDB(err) {
    this.showTemporaryMessage(`Неуспешна връзка с базата данни: ${err}`);
  }

  drawLocalAnalytics() {
    let analyzer = new Analyzer(this.state.enteredArticle);
    Radar.draw(analyzer.technologies);
  }

  submitAnalytics() {
    let analyzer = new Analyzer(this.state.enteredArticle),
        currentTechnologies = analyzer.technologies;
    FireBaseClient.getTechnologies(this.doSubmitAnalytics.bind(this, currentTechnologies),
                                   this.errorConnectingToDB.bind(this));
  }

  doSubmitAnalytics(currentTechnologies, globalTechnologies) {
    let technologies = {};
    Object.keys(globalTechnologies).forEach(category => {
      technologies[category] = {};
      Object.keys(globalTechnologies[category]).forEach(technology => {
        let globalCount = globalTechnologies[category][technology],
            currentCount = currentTechnologies[category][technology];
        technologies[category][technology] = globalCount + currentCount;
      });
    });
    FireBaseClient.submitTechnologies(technologies,
                                      this.successSubmittingTechnologies.bind(this),
                                      this.errorConnectingToDB.bind(this));
  }

  successSubmittingTechnologies() {
    this.showTemporaryMessage('Успешно изпратен!');
  }

  showTemporaryMessage(msg) {
    this.setState({
      message: msg
    });
    setTimeout(() => {
      this.setState({
        message: ''
      });
    }, 1000);
  }
}
