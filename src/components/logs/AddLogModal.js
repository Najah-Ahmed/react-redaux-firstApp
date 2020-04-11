import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLogs } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOption from '../techs/TechSelectOption';

const AddLogModal = ({ addLogs }) => {
  const [msg, setMsg] = useState('');
  const [att, setAtt] = useState(false);
  const [tech, setTech] = useState('');
  const onSubmit = () => {
    if (msg === '' || tech === '') {
      M.toast({ html: 'Please Enter a message and tech' });
    } else {
      const newlog = {
        msg,
        att,
        tech,
        date: new Date(),
      };
      addLogs(newlog);
      M.toast({ html: `Log add by ${tech}` });
      //clear fields
      setMsg('');
      setTech('');
      setAtt(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input'>
            <input
              type='text'
              name='msg'
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
            <label htmlFor='msg' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => {
                setTech(e.target.value);
              }}
            >
              <option value='' disabled>
                Select Techincian
              </option>
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={att}
                  value={att}
                  onChange={(e) => {
                    setAtt(!att);
                  }}
                />
                <span>Need Attention</span>
              </label>
            </p>
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

AddLogModal.propType = {
  addLogs: PropTypes.func.isRequired,
};
const modalStyle = {
  width: '75%',
  height: '75%',
};
export default connect(null, { addLogs })(AddLogModal);
