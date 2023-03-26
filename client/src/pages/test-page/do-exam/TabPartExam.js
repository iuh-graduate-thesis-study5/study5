import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    indicator: {
        backgroundColor: 'white'
    },
    tabRoot: {
        '&:hover': {}
    },
    selectedTab: {
        color: 'black',
        backgroundColor: '#E8F2FF'
    }
}));

export default function TabPartExam() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" classes={{ indicator: classes.indicator }}>
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 1" {...a11yProps(0)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 2" {...a11yProps(1)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 3" {...a11yProps(2)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 4" {...a11yProps(3)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 5" {...a11yProps(4)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 6" {...a11yProps(5)} />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="Part 7" {...a11yProps(6)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Part 1
            </TabPanel>
            <TabPanel value={value} index={1}>
                Part 2
            </TabPanel>
            <TabPanel value={value} index={2}>
                Part 3
            </TabPanel>
            <TabPanel value={value} index={3}>
                Part 4
            </TabPanel>
            <TabPanel value={value} index={4}>
                Part 5
            </TabPanel>
            <TabPanel value={value} index={5}>
                Part 6
            </TabPanel>
            <TabPanel value={value} index={6}>
                Part 7
            </TabPanel>
        </Box>
    );
}
