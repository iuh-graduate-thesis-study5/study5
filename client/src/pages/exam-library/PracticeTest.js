import CardPractice from './CardPractice';
import Grid from '@mui/material/Grid';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/exam.action';

export default function PracticeTest() {
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.exam.listExam);
    const [listTestExam, setListTestExam] = useState([]);
    useEffect(() => {
        dispatch(actions.getAllExam());
    }, []);
    useEffect(() => {
        if (exams) {
            setListTestExam(exams.filter((item) => item.loaidethi === 1));
        }
    }, [exams]);
    return (
        <>
            <Grid container spacing={3}>
                {listTestExam?.map((e, i) => (
                    <Grid item xs={4} key={i}>
                        <CardPractice listTestExam={e} />
                    </Grid>
                ))}
            </Grid>
            <br />
        </>
    );
}
