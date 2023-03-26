import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import ListQuestion from './ListQuestion';

export default function DoExam() {
    return (
        <div style={{ margin: '2rem -7rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <TabPartExam />
                </Grid>
                <Grid item xs={2}>
                    <ListQuestion />
                </Grid>
            </Grid>
        </div>
    );
}
