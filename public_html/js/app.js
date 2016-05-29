import React from 'react';


export class App extends React.Component {
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
          <textarea className='form-control' rows='10'></textarea>
        </div>
      </div>
      <button type="button" className="btn btn-default">Давай</button>
      <div id='radar'></div>
      <div id='ref-table'></div>
    </div>);
  }
}
