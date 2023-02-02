import { TextField } from '@mui/material';

const Search = props => {
  const { onChange, value } = props;

  return (
    <TextField
      type='search'
      value={value}
      onChange={onChange}
      id='standard-basic'
      label='Search'
      variant='standard'
      fullWidth
      sx={{ mb: '1.2rem' }}
    />
  );
};

export default Search;
