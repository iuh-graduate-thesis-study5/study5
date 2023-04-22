import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
export default function ListAnswer() {
    const list_number = [];
    for (let i = 1; i <= 51; i++) {
        list_number.push(i);
    }
    return (
        <>
            {list_number.map((e, i) => (
                <>
                    {e === 1 ? (
                        <Grid item xs={12} key={e + '*'}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 1</h4>
                        </Grid>
                    ) : e === 4 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 2</h4>
                        </Grid>
                    ) : e === 7 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 3</h4>
                        </Grid>
                    ) : e === 16 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 4</h4>
                        </Grid>
                    ) : e === 25 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 5</h4>
                        </Grid>
                    ) : e === 28 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 6</h4>
                        </Grid>
                    ) : e === 40 ? (
                        <Grid item xs={12}>
                            <h4 style={{ marginBlockEnd: 8 }}>Part 7</h4>
                        </Grid>
                    ) : (
                        <></>
                    )}
                    <Grid item xs={4} key={i}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <strong className="number-question">{e}</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: 15 }}>
                                <span style={{ fontWeight: 'bold', color: '#35509a' }}>A: </span>&nbsp;A <CheckIcon color="success" />
                            </div>
                        </div>
                    </Grid>
                </>
            ))}
        </>
    );
}
