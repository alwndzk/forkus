/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

const ItemThreadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  authUser: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export { ItemThreadShape };
