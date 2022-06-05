import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = (props) => {
    const [value, setValue] = React.useState(props.tab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="Movies Home" href="/simulacro-academia-geek" />
                <Tab label="Add Movie" href="/simulacro-academia-geek/add" />
            </Tabs>
        </div>
    )
}

export default Navbar