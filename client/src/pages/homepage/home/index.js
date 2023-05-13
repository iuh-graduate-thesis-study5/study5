import ExamResult from './ExamResult';
import ExamInComing from './ExamInComing';
import { useState, useEffect } from 'react';
import PracticeTest from './PracticeTest';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/exam.action';
import * as result_action from 'actions/result.action';
import poster from '../../../assets/logo/poster.png';
import Button from '@mui/material/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Home() {
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.exam.listExam);
    const user_id = useSelector((state) => state.account.userAuth);
    const examByUserId = useSelector((state) => state.exam.listExamByUserId);
    const rsByUserId = useSelector((state) => state.result.listResultByUserId);
    useEffect(() => {
        if (user_id) {
            dispatch(actions.getExamByUserId(user_id));
            dispatch(result_action.getResultByUserId(user_id));
        }
    }, [user_id]);

    const [listExam, setListExam] = useState([]);
    const [listTestExam, setListTestExam] = useState([]);
    const [listResult, setListReSult] = useState([]);
    useEffect(() => {
        if (rsByUserId) {
            if (rsByUserId.length > 4) {
                setListReSult(rsByUserId.slice(0, 4));
            } else {
                setListReSult(rsByUserId);
            }
        }
    }, [rsByUserId]);
    useEffect(() => {
        dispatch(actions.getAllExam());
    }, []);
    useEffect(() => {
        if (exams) {
            setListTestExam(exams.filter((item) => item.loaidethi === 1));
        }
    }, [exams]);
    useEffect(() => {
        if (examByUserId) {
            const listNowExam = [];
            examByUserId.forEach((e) => {
                var date = Date.now();
                var formattedDateExam = moment(e.thoigianthi).format('MM-DD-YYYY');
                var formattedDateNow = moment(date).format('MM-DD-YYYY');
                const newDateObj = moment(e.thoigianthi).add(15, 'm').toDate();
                if (e.loaidethi === 0 && formattedDateExam === formattedDateNow && moment(date).isBefore(newDateObj)) {
                    if (moment(date).isBefore(moment(e.thoigianthi))) {
                        e.trangThai = 0;
                        listNowExam.push(e);
                    } else {
                        e.trangThai = 1;
                        listNowExam.push(e);
                    }
                }
                setListExam(listNowExam);
            });
        }
    }, [examByUserId]);
    return (
        <>
            <div>
                <h1 style={{ color: '#35509a', marginTop: 50 }}>Xin chào!</h1>
                <h2 style={{ color: '#35509a' }}>Lịch thi hôm nay</h2>
                <p style={{ color: '#1a1a1a', fontSize: 16 }}>
                    <i>
                        {listExam.length ? (
                            <>
                                Bạn có {listExam.length} lịch thi hôm nay. Vui lòng vào <a href="/home/my-schedule">Lịch thi của tôi</a> để
                                xem thêm lịch thi.
                            </>
                        ) : (
                            <>
                                Bạn không có lịch thi hôm nay. Vui lòng vào <a href="/home/my-schedule">Lịch thi của tôi</a> để xem thêm
                                lịch thi.
                            </>
                        )}
                    </i>
                </p>
                <h2 style={{ color: '#35509a' }}>Bài thi sắp diễn ra</h2>
                {listExam.length > 0 ? (
                    <ExamInComing listExam={listExam} />
                ) : (
                    <p style={{ color: '#1a1a1a', fontSize: 16 }}>
                        <i>Bạn không có bài thi hôm nay.</i>
                    </p>
                )}
                <h2 style={{ color: '#35509a' }}>Kết quả thi của bạn</h2>
                {rsByUserId?.length > 0 ? (
                    <ExamResult listResult={listResult} />
                ) : (
                    <p style={{ color: '#1a1a1a', fontSize: 16 }}>
                        <i>Bạn chưa có kết quả thi nào.</i>
                    </p>
                )}
                {rsByUserId?.length > 4 ? (
                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                        <Link to={'/home/my-result'} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                            <Button style={{ textTransform: 'uppercase' }} variant="outlined">
                                Xem thêm &#62;&#62;
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <></>
                )}

                <img src={poster} alt="poster" style={{ width: '100%', margin: '5rem 0' }} />
                <div style={{ textAlign: 'center' }}>
                    <h1>Đề thi thử</h1>
                </div>
                <PracticeTest listTestExam={listTestExam} />
            </div>
        </>
    );
}
