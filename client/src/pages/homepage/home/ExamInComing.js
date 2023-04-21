import CardExamIncoming from './CardExamIncoming';
import Grid from '@mui/material/Grid';
export default function ExamInComing({ listExam }) {
    return (
        <>
            <Grid container spacing={2}>
                <CardExamIncoming listExam={listExam} />
            </Grid>
        </>
    );
}
