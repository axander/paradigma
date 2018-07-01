import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../spinner/Spinner';
import { showPhones } from '../../actions'

class phones extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'details':false,
      'detailsData':null
    }
    this.showDetails = this.showDetails.bind(this);
  }

  componentWillMount() {
    this.props.showPhones()
  }

  showDetails(_event, _details){
    var details = _details ? _details : this.state.detailsData
    this.setState({
      'details':!this.state.details,
      'detailsData':details
    })
  }
  
  renderPhonesList() {
    console.log(this.props);
    return this.props.phones.map((phone) => {
      return (
        <div className="col-xs-12 col-md-4 col-lg-3">
          <div key={phone.id} className="phone-item">
              <div>{phone.id}. <span className="phone-name-item">{phone.name}</span></div>
              <div className="phone-pvp-item" >{phone.pvp}</div>
              <div><img src={phone.image} className="phone-image-item" /></div>
              <div className="phone-details-item" onClick={ (event, _details) => this.showDetails(event, phone) } >Detalles ></div>
          </div>
        </div>
      )
    })
    //this.endRequest();
  }
  
  render() {

    let details;
    this.state.detailsData
    ? details = <div>
                  <div>{this.state.detailsData.id}. <span className="phone-name-item">{this.state.detailsData.name}</span></div>
                  <label>Capacidad</label>
                  <div>{this.state.detailsData.capacidad}</div>
                  <label>Precio</label>
                  <div className="phone-pvp-item" >{this.state.detailsData.pvp}</div>
                  <label>Dimensiones</label>
                  <div>{this.state.detailsData.dims}</div>
                  <label>Pantalla</label>
                  <div>{this.state.detailsData.screen}</div>
                  <label>Resistencia</label>
                  <div>{this.state.detailsData.resistance}</div>
                  <label>Chip</label>
                  <div>{this.state.detailsData.chip}</div>
                  <div className="phone-close-details-item" onClick={ (event, _details) => this.showDetails(event, null) } >x</div>
                </div>
    : details = '';

    let localSpinner;
    this.props.loaded
    ? localSpinner = ''
    : localSpinner = <Spinner />;

    return (
      <div>
        <h2>Phones List</h2>
        <div className="row">
            { this.renderPhonesList() }
        </div>
        <div className={this.state.details ? "phone-details-container details-show" : "phone-details-container details-hide" } >
          {details}  
        </div>  
        {localSpinner}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phones: state.phone.list,
    loaded: state.phone.loaded
  }
}

export default connect(mapStateToProps, { showPhones })(phones)