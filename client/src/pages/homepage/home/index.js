import ExamResult from './ExamResult';
import ExamInComing from './ExamInComing';
import { useState, useEffect } from 'react';
import PracticeTest from './PracticeTest';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'actions/exam.action';
import poster from '../../../assets/logo/poster.png';

export default function Home() {
    const dispatch = useDispatch();
    const exams = useSelector((state) => state.exam.listExam);
    const [listExam, setListExam] = useState([]);
    const [listTestExam, setListTestExam] = useState([]);
    useEffect(() => {
        dispatch(actions.getAllExam());
    }, []);
    useEffect(() => {
        if (exams) {
            setListExam(exams.filter((item) => item.loaidethi === 0));
            setListTestExam(exams.filter((item) => item.loaidethi === 1));
        }
    }, [exams]);
    return (
        <>
            {/* <AccountButtonComponent /> */}
            <div>
                <h1 style={{ color: '#35509a', marginTop: 50 }}>Xin chào</h1>
                <h2 style={{ color: '#35509a' }}>Lịch thi hôm nay</h2>
                <p style={{ color: '#1a1a1a', fontSize: 16 }}>
                    <i>
                        Bạn không có lịch thi hôm nay. Vui lòng vào <a href="/home/my-schedule">Lịch thi của tôi</a> để xem thêm lịch thi.
                    </i>
                </p>
                <h2 style={{ color: '#35509a' }}>Bài thi sắp diễn ra</h2>
                <ExamInComing listExam={listExam} />
                <h2 style={{ color: '#35509a' }}>Kết quả thi của bạn</h2>
                <ExamResult listExam={listExam} />
                <img src={poster} alt="poster" style={{ width: '100%', margin: '5rem 0' }} />
                <div style={{ textAlign: 'center' }}>
                    <h1>Đề thi thử</h1>
                </div>
                <PracticeTest listTestExam={listTestExam} />
            </div>
        </>
    );
}
