import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Part1 from './Part1/index';
import Part2 from './Part2/index';
import Part3 from './Part3/index';
import Part4 from './Part4/index';
import Part5 from './Part5/index';
import Part6 from './Part6/index';
import Part7 from './Part7/index';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

export default function TabPartExam({ exam }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [listQuestion, setListQuestion] = React.useState([]);
    const [listComponent, setListComponent] = React.useState([]);
    const part1 = [];
    const part2 = [];
    const part3 = [];
    const part4 = [];
    const part5 = [];
    const part6 = [];
    const part7 = [];

    const listTab = [0, 1, 2, 3, 4, 5, 6];

    React.useEffect(() => {
        if (exam.dethicauhois) {
            setListQuestion(exam.dethicauhois);
        }
    }, [exam]);
    React.useEffect(() => {
        for (let i = 0; i < listQuestion.length; i++) {
            if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 1) {
                part1.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 2) {
                part2.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 3) {
                part3.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 4) {
                part4.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 5) {
                part5.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 6) {
                part6.push(listQuestion[i]);
            } else if (listQuestion[i]?.nhomcauhoi?.phancauhoi === 7) {
                part7.push(listQuestion[i]);
            }
        }
        setListComponent([
            <Part1 question={part1} />,
            <Part2 question={part2} />,
            <Part3 question={part3} />,
            <Part4 question={part4} />,
            <Part5 question={part5} />,
            <Part6 question={part6} />,
            <Part7 question={part7} />
        ]);
    }, [listQuestion]);
    const handleChange = (event, newValue, isScroll = false) => {
        setValue(newValue);
        if (isScroll) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    const nextButton = (value) => {
        return (
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                <Button
                    style={{ backgroundColor: 'white', color: '#35509A', fontSize: 16 }}
                    variant="text"
                    onClick={(e) => handleChange(e, value, true)}
                >
                    TIẾP THEO <ChevronRightIcon />
                </Button>
            </div>
        );
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
            {listTab.map((e) => (
                <TabPanel value={value} index={e} key={e}>
                    {listComponent[e]}
                    {e < 6 ? nextButton(e + 1) : <></>}
                </TabPanel>
            ))}
        </Box>
    );
}
