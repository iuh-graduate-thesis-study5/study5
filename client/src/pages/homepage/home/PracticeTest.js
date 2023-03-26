import CardPractice from './CardPractice';
import Grid from '@mui/material/Grid';
export default function PracticeTest() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <Grid container spacing={3}>
                {list.map((e) => (
                    <Grid item xs={3} key={e}>
                        <CardPractice />
                    </Grid>
                ))}
            </Grid>
            <br />
        </>
    );
}
