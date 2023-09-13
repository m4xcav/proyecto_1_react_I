import Card from 'react-bootstrap/Card';
import { Tags } from './Tags';
import { PropTypes } from 'prop-types';

export const MyCard = ({url, pname, descripcion, tagcolor, name}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={url} />
    <Card.Body>
      <Card.Title>{pname}</Card.Title>
      <Card.Text>
        {descripcion}
      </Card.Text>
      <Tags name={name} tagcolor={tagcolor} />
    </Card.Body>
  </Card>
  )
};

MyCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    tagcolor: PropTypes.string.isRequired,
    pname: PropTypes.string.isRequired,

};
