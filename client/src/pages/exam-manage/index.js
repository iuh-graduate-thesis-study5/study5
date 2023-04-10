import UserTable from './UserTable';
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
                            <Tab label="DANH SÁCH ĐỀ THI SẮP TỚI" value="1" />
                            <Tab label="DANH SÁCH ĐỀ THI ĐÃ QUA" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ padding: 0 }}>
                        <UserTable />
                    </TabPanel>
                    <TabPanel value="2" style={{ padding: 0 }}>
                        <UserTable />
                    </TabPanel>
                </TabContext>
            </div>
        </>
    );
}
