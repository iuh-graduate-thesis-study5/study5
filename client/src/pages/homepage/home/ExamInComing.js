import CardExamIncoming from './CardExamIncoming';
import Grid from '@mui/material/Grid';
export default function ExamInComing() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CardExamIncoming />
                </Grid>
            </Grid>
        </>
    );
}
