import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import ListQuestion from './ListQuestion';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/exam.action';
import * as action from 'actions/question.action';

export default function DoExam() {
    const { id } = useParams();
    const exam = useSelector((state) => state.exam.examById);
    const dispatch = useDispatch();
    useEffect(() => {
        if (exam) {
            const listCorrectAnswer = [];
            let count = 1;
            exam?.dethicauhois?.forEach((ex) => {
                ex?.nhomcauhoi?.cauhois?.forEach((ch) => {
                    const question = {
                        numberQuestion: count,
                        isChoosen: false,
                        answer: '',
                        className: 'inputColor',
                        dap_an_dung: ch.dapandung,
                        id_question: ch.id
                    };
                    count = count + 1;
                    listCorrectAnswer.push(question);
                });
            });
            dispatch(action.chooseQuestion(listCorrectAnswer));
        }
    }, [exam]);
    useEffect(() => {
        if (id) {
            dispatch(actions.getExamById(id));
        }
    }, []);
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    function handleBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = '';
    }
    return (
        <div style={{ margin: '2rem -7rem' }}>
            <div style={{ textAlign: 'center' }}>
                {exam?.loaidethi ? <h2>ĐỀ ÔN TẬP CHO THÍ SINH</h2> : <h2>ĐỀ THI ĐÁNH GIÁ NĂNG LỰC</h2>}

                <h3 style={{ textTransform: 'uppercase' }}>{exam?.tieude}</h3>
                <h4 style={{ textTransform: 'uppercase' }}>{exam?.madethi}</h4>
            </div>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={9.8}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 5,
                        background: 'white',
                        boxShadow: '0 4px 0 0 rgba(143,156,173,.2)'
                    }}
                >
                    <TabPartExam exam={exam} />
                </Grid>
                <Grid item xs={0.2}></Grid>
                <Grid
                    item
                    xs={1.8}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 5,
                        background: 'white',
                        boxShadow: '0 4px 0 0 rgba(143,156,173,.2)',
                        padding: '1rem 1rem'
                    }}
                >
                    <ListQuestion exam={exam} />
                </Grid>
            </Grid>
        </div>
    );
}
