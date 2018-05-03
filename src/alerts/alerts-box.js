import React, {
  Component
} from 'react';
import AlertsListItem from './alert-item.js';


class AlertsBox extends Component {
  constructor(props) {
    super();
    this.state = {
      moreAlerts: 5,
      totalAlerts: 0,
      hideFilter: false,
      sorter: 'desc'
    };
    this.handleMoreAlerts = this.handleMoreAlerts.bind(this);
    this.handleAllAlerts = this.handleAllAlerts.bind(this);
    this.performSort = this.performSort.bind(this);
  }
  //Click EVENTS
  handleMoreAlerts() {
    const moreAlertsAdded = this.state.moreAlerts + 5;
    if (moreAlertsAdded >= this.state.totalAlerts) {
      this.setState({
        moreAlerts: moreAlertsAdded,
        hideFilter: true
      });
    } else {
      this.setState({
        moreAlerts: moreAlertsAdded
      });
    }
  }
  performSort(key, order) {
    if (undefined !== this.state.alert && this.state.alert.length) {
      const newArray = this.state.alert.sort(this.compareValues(key, order));
      const sort = this.state.sorter.indexOf('desc') > -1 ? 'asc' : 'desc';
      this.setState({
        alert: newArray,
        sorter: sort
      });
    }
  }
  handleAllAlerts() {
    const allAlertsAdded = this.state.totalAlerts;
    if (allAlertsAdded >= this.state.totalAlerts) {
      this.setState({
        moreAlerts: allAlertsAdded,
        hideFilter: true
      });
    }
  }
  //HELPER FUNCTIONS
  compareValues(key, order = 'asc') {
    return function(a, b) {
      if (!a.hasOwnProperty(key) ||
        !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ?
        (comparison * -1) : comparison
      );
    };
  }
  //Lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (undefined !== nextProps.data && nextProps.data.length) {
      const totalAlertsFromProps = nextProps.data.length;
      this.setState({
        alert: nextProps.data,
        totalAlerts: totalAlertsFromProps
      });
    }
  }
  componentWillMount() {
    let list = < p > there are no items < /p>;
  }

  //Render
  render() {
    const display = this.state.hideFilter ? "none" : "block";
    const iconType = this.state.sorter.indexOf('desc') > -1 ? 'down' : 'up';
    let splitAlertArray;
    if (undefined !== this.state.alert && this.state.alert.length) {
      splitAlertArray = this.state.alert.slice(0, this.state.moreAlerts);
      this.list = splitAlertArray.length ? (
        splitAlertArray.map(function(item, i) {
          return ( <
            AlertsListItem key = {
              i
            }
            type = {
              item.type
            }
            name = {
              item.name
            }
            desc = {
              item.description
            }
            date = {
              item.date
            }
            importance = {
              item.important
            }
            />
          );
        })) : ( <p > there are no items here < /p>
      );
    }
    return (
      <div className='alerts-box'>
        <div className='heading-bar'>
           <div className='heading-bar-title-container'>
              <h4 className='heading-bar-title'>
                Alerts
              </h4>
              <h5> Latest alerts ({this.state.totalAlerts}) </h5>
            </div>
            <div className='heading-bar-navigation'>
              <div className='heading-bar-options'>
                <i className="fa fa-pie-chart"></i>
                <i className="fa fa-filter"></i>
                <i className="fa fa-undo"></i>
                <i className="fa fa-cog"></i>
                <div className='heading-bar-save'>
                  <span>SAVE</span>
                  <i className="fa fa-caret-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='alerts-list-container'>
            <div className='alerts-list-items'>
              <div onClick={()=>this.performSort('important', this.state.sorter)} className='alerts-list-filter'>
                <span>importance</span>
                <i className={"fa fa-caret-" + iconType}></i>
              </div>
              {this.list}
              <div className='alerts-list-more' style={{"display": display}}>
                <div className='alerts-list-more-button-wrapper'>
                  <div onClick={this.handleMoreAlerts} className='alerts-list-more-button'>
                    <span>see more</span><i className="fa fa-caret-down"></i>
                  </div>
                </div>
                <div onClick={this.handleAllAlerts} className='alerts-list-all-button'>
                  <span>View All</span>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default AlertsBox;
