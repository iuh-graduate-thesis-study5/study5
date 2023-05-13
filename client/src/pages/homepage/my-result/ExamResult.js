import CardExam from './CardExam';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as result_action from 'actions/result.action';
export default function ExamResult() {
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.account.userAuth);
    const rsByUserId = useSelector((state) => state.result.listResultByUserId);
    useEffect(() => {
        if (user_id) {
            dispatch(result_action.getResultByUserId(user_id));
        }
    }, [user_id]);
    return (
        <>
            <Grid container spacing={2}>
                {rsByUserId?.map((e, i) => (
                    <Grid key={i} item xs={3}>
                        <CardExam result={e} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
