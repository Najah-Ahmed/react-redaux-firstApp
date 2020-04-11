import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { firstname, lastname, id }, deleteTech }) => {
  const onDeleted = () => {
    deleteTech(id);
    M.toast({ html: 'Technition Has Been Deleted' });
  };
  return (
    <li className='collection-item' style={{ listStyleType: 'none' }}>
      <div>
        {firstname} {lastname}
        <a href='#!' className='secondary-content' onClick={onDeleted}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
