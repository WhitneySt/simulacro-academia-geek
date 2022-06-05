import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(props.tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/simulacro-academia-geek');
    } 

    if (newValue === 1) {
      navigate('/add');
    } 
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Movies Home" />
        <Tab label="Add Movie" />
      </Tabs>
    </div>
  )
}

export default Navbar