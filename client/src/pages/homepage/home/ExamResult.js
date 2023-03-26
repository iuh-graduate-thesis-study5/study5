import CardExam from './CardExam';
import Grid from '@mui/material/Grid';
export default function ExamResult() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CardExam />
                </Grid>
            </Grid>
        </>
    );
}
