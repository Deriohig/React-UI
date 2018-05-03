import React, { Component } from 'react';

class AlertsListItem extends Component {
  render() {
    let importance;
    switch(this.props.importance) {
    case 0:
          importance = <div>
                          <span>None</span>
                          <div className="signal-bars">
                            <div className="first-bar bar no-bar"></div>
                            <div className="second-bar bar no-bar"></div>
                            <div className="third-bar bar no-bar"></div>
                          </div>
                        </div>
        break;
    case 1:
    importance = <div>
                    <span>low</span>
                    <div className="signal-bars">
                      <div className="first-bar bar"></div>
                      <div className="second-bar bar no-bar"></div>
                      <div className="third-bar bar no-bar"></div>
                    </div>
                  </div>
        break;
    case 2:
        importance = <div>
                        <span>Middle</span>
                        <div className="signal-bars">
                          <div className="first-bar bar"></div>
                          <div className="second-bar bar "></div>
                          <div className="third-bar bar no-bar"></div>
                        </div>
                      </div>
        break;
    case 3:
        importance = <div>
                        <span>High</span>
                        <div className="signal-bars">
                          <div className="first-bar bar"></div>
                          <div className="second-bar bar"></div>
                          <div className="third-bar bar "></div>
                        </div>
                      </div>
        break;
    default:
      importance = <div>
                      <span>low</span>
                      <div className="signal-bars">
                        <div className="first-bar bar"></div>
                        <div className="second-bar bar no-bar"></div>
                        <div className="third-bar bar no-bar"></div>
                      </div>
                    </div>
}

    return (
      <div className='alerts-list-item'>
        <div className='alerts-list-item-wrap'>
          <div className='alerts-list-item-name'>
            <div className='alerts-list-item-type'>
              <i className="fa fa-birthday-cake"></i>
            </div>
            <h4>{this.props.name}</h4>
          </div>
          <div className='alerts-list-item-description'>
            <p>
              {this.props.desc}
            </p>
          </div>
          <div className='alerts-list-item-date'>
            <p>
              {this.props.date}
            </p>
          </div>
          <div className='alerts-list-item-importance'>
            {importance}
          </div>
        </div>
      </div>
    );
  }
}

export default AlertsListItem;
