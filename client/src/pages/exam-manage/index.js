import UserTable from './UserTable';
import ExamTable from './ExamTable';
import TestExamTable from './TestExamTable';
import DoneExam from './DoneExam';

import AccountButtonComponent from './ActionButtonComponent';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';

export default function AccountComponent() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AccountButtonComponent />
            <div>
                <h4>DANH SÁCH ĐỀ THI</h4>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="DANH SÁCH ĐỀ THI SĂP TỚI" value="1" />4
                            <Tab label="DANH SÁCH ĐỀ THI THỬ" value="2" />
                            <Tab label="DANH SÁCH ĐỀ THI ĐÃ QUA" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ padding: 0 }}>
                        <ExamTable />
                    </TabPanel>
                    <TabPanel value="2" style={{ padding: 0 }}>
                        <TestExamTable />
                    </TabPanel>
                    <TabPanel value="3" style={{ padding: 0 }}>
                        <DoneExam />
                    </TabPanel>
                </TabContext>
            </div>
        </>
    );
}
