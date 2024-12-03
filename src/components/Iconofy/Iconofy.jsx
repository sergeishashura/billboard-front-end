import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';


const Iconify = forwardRef(({ icon, width = 20, currentColor = '#9a9da1', sx, ...other }, ref) => (
  <Box
    ref={ref}
    component="span"
    sx={{
      width,
      height: width,
      display: 'inline-block',
      backgroundImage: `url(${icon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      currentColor,
      ...sx,
    }}
    {...other}
  />
));

Iconify.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;