import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import ListQuestion from './ListQuestion';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/exam.action';
export default function DoExam() {
    const { id } = useParams();
    const exam = useSelector((state) => state.exam.examById);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(actions.getExamById(id));
        }
    }, []);
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2>ĐỀ THI ĐÁNH GIÁ NĂNG LỰC</h2>
                <h4>ETS TOEIC 2022 Test 2</h4>
            </div>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 5,
                        background: 'white',
                        boxShadow: '0 4px 0 0 rgba(143,156,173,.2)'
                    }}
                >
                    <TabPartExam exam={exam} />
                </Grid>
            </Grid>
        </div>
    );
}
