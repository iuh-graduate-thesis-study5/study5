import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import 'css/button-exam.css';
export default function ListQuestion() {
    const ListQuestion = [];
    for (let i = 1; i <= 200; i++) {
        ListQuestion.push(i);
    }
    return (
        <div style={{ margin: '2rem 0' }}>
            <h3>Thời gian còn lại</h3>
            <h4>120:00</h4>
            <div style={{ margin: '1rem 0' }}>
                <Button variant="outlined" color="primary" fullWidth>
                    NỘP BÀI
                </Button>
            </div>
            <Grid container spacing={1}>
                {ListQuestion.map((e) => (
                    <>
                        {e === 1 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 1</h3>
                            </Grid>
                        ) : e === 7 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 2</h3>
                            </Grid>
                        ) : e === 32 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 3</h3>
                            </Grid>
                        ) : e === 71 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 4</h3>
                            </Grid>
                        ) : e === 101 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 5</h3>
                            </Grid>
                        ) : e === 131 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 6</h3>
                            </Grid>
                        ) : e === 147 ? (
                            <Grid item xs={12} key={e}>
                                <h3>Part 7</h3>
                            </Grid>
                        ) : (
                            <></>
                        )}
                        <Grid item xs={2} key={e}>
                            <input className="inputColor" value={e} type="button" style={{ width: 35 }} />
                        </Grid>
                    </>
                ))}
            </Grid>
        </div>
    );
}
