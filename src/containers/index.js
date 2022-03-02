
import { useState } from 'react';
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import Login from '../components/login';
import Signup from '../components/signup';

const SignInOutContainer = () => {

    const paperStyle = {
        width: 340,
        // height: '74vh',
        m: "20px auto",
        // p: "30px 20px"
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={10} square sx={paperStyle} >
            <Tabs
                value={value}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChange}
                aria-label="basic tabs example">

                <Tab label="SignIn" />
                <Tab label="SignUp" />

            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>

        </Paper>
    );

}
export default SignInOutContainer;