import CardExam from './CardExam';
import Grid from '@mui/material/Grid';
export default function ExamResult({ listResult }) {
    return (
        <>
            <Grid container spacing={2}>
                {listResult?.map((e, i) => (
                    <Grid key={i} item xs={3}>
                        <CardExam result={e} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
