import Badge from 'react-bootstrap/Badge';
import { PropTypes } from 'prop-types';

export const Tags = ({tagcolor, name}) => {
  return (
    <Badge bg={tagcolor}>{name}</Badge>
  )
;}

Tags.propTypes = {
  name: PropTypes.string.isRequired,
  tagcolor: PropTypes.string.isRequired,
};