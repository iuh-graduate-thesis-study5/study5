import ExamResult from './ExamResult';
import ExamInComing from './ExamInComing';

import PracticeTest from './PracticeTest';

import poster from '../../../assets/logo/poster.png';

export default function Home() {
    return (
        <>
            {/* <AccountButtonComponent /> */}
            <div>
                <h1 style={{ color: '#35509a', marginTop: 50 }}>Xin chào, Thotran!</h1>
                <h2 style={{ color: '#35509a' }}>Lịch thi hôm nay</h2>
                <p style={{ color: '#1a1a1a', fontSize: 16 }}>
                    <i>
                        Bạn không có lịch thi hôm nay. Vui lòng vào <a href="/studyplan/">Lịch thi của tôi</a> để xem thêm lịch thi.
                    </i>
                </p>
                <h2 style={{ color: '#35509a' }}>Bài thi sắp diễn ra</h2>
                <ExamInComing />
                <h2 style={{ color: '#35509a' }}>Kết quả thi của bạn</h2>
                <ExamResult />
                <img src={poster} alt="poster" style={{ width: '100%', margin: '5rem 0' }} />
                <div style={{ textAlign: 'center' }}>
                    <h1>Đề thi thử</h1>
                </div>
                <PracticeTest />
            </div>
        </>
    );
}