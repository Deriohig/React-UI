import React, { Component } from 'react';

class ClientsBox extends Component {

  render() {
    if(this.props.data){
      const toalAmountOfClients = this.props.data.total;
      const totalAmountOfActiveClients = this.props.data.active;
      const percentageOfActive = Math.round((totalAmountOfActiveClients / toalAmountOfClients) * 100);
      const increase = toalAmountOfClients - totalAmountOfActiveClients ;
      const previousMounts = this.props.data.mounts.map(function(item, i){
        const percentage = Math.round((item / toalAmountOfClients) * 100);
        return (
          <div key={i} className="day" data-value={percentage}></div>
        );
      });
      return (
        <div className='clients-box'>
          <div className='heading-bar'>
            <div className='heading-bar-title-container'>
              <h4 className='heading-bar-title'>
                Clients
                <i className="fa fa-caret-right"></i>
              </h4>
            </div>
            <div className='heading-bar-navigation'>
              <div className='heading-bar-options'>
                <i className="fa fa-cog"></i>
              </div>
            </div>
          </div>
          <div className='visualistation-bar'>
            <div className="pie-container">
                <div className="pie-wrapper">
                   <div className="arc" data-value={percentageOfActive}></div>
                   <h4 className="number">{totalAmountOfActiveClients}</h4>
                </div>
                <h6>Active clients</h6>
            </div>
            <div className='bar-chart-container'>
              <div className="bar-chart">
                <div className="graph">
                  {previousMounts}
                </div>
              </div>
              <h6>Last 12 mounts</h6>
            </div>
            <div className='increase-amount'>
              <div className='increase-amount-wrapper'>
                <i className="fa fa-angle-double-up"></i>
                <h4>{increase}</h4>
              </div>
              <h6>Increase</h6>
            </div>
          </div>
        </div>

      );
    }else{
      return(

        <p> loading </p>
      );
    }
  }
}

export default ClientsBox;
