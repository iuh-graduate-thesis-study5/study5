import CardPractice from './CardPractice';
import Grid from '@mui/material/Grid';
export default function PracticeTest({ listTestExam }) {
    return (
        <>
            <Grid container spacing={3}>
                {listTestExam?.map((e, i) => (
                    <Grid item xs={3} key={i}>
                        <CardPractice listTestExam={e} />
                    </Grid>
                ))}
            </Grid>
            <br />
        </>
    );
}
