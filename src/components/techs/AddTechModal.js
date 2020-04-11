import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please Enter The First Name and Last Name' });
    } else {
      addTech({
        firstname,
        lastname,
      });
      M.toast({
        html: ` ${firstname} ${lastname} was   Added as Tech`,
      });
      //clear fields
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician </h4>
        <div className='row'>
          <div className='input'>
            <input
              type='text'
              name='firstName'
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input'>
            <input
              type='text'
              name='lastName'
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-#00695c teal darken-3 btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.protoTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
