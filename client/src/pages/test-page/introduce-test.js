import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import poster from '../../assets/logo/introduce.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function TestIntroduce() {
    return (
        <div style={{ margin: '2rem 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div>
                        <span>#TOEIC</span>
                    </div>
                    <h1>ETS TOEIC 2022 Test 6</h1>
                    <Chip
                        label="Thông tin đề thi"
                        color="primary"
                        style={{ borderRadius: 5, height: 18, padding: 0, marginBottom: 10, fontSize: 13 }}
                    />
                    <div>
                        <span>
                            <strong>Bộ đề thi: ETS TOEIC 2022</strong>
                        </span>
                    </div>
                    <div>
                        <span>
                            <b>Người ra đề:</b> Ms Nguyễn Thị Sơn Tùng
                        </span>
                    </div>
                    <div>
                        <span>
                            <b>Thời gian làm bài:</b> 120 phút
                        </span>{' '}
                        | <span>7 phần thi</span> | <span>200 câu hỏi</span>
                    </div>
                    <h3>Sơ lược bài thi</h3>

                    <p>Đề thi TOEIC gồm 2 phần là Listening (Nghe Hiểu) và Reading (Đọc Hiểu), với mỗi phần gồm 100 câu trắc nghiệm.</p>
                    <p>Thời gian thi TOEIC là 120 phút cho 2 phần thi. Cụ thể như sau:</p>
                    <p>- &nbsp;45 phút cho phần Listening, với 100 câu trắc nghiệm</p>
                    <p>- &nbsp;75 phút cho phần Reading, với 100 câu trắc nghiệm </p>
                    <p>Lưu ý: Bài thi Listening sẽ diễn ra trước và được tiếp nối ngay lập tức bởi bài thi Reading.</p>
                </Grid>
                <Grid item xs={4}>
                    <img src={poster} alt="imagea" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                    <p>
                        Tổng điểm tối đa cho mỗi phần thi là 495 điểm. Vậy nghĩa là điểm tối đa cho cả bài thi TOEIC là 99. Cách tính điểm
                        TOEIC dựa trên các câu đúng rồi quy thành điểm tương ứng và không trừ điểm cho những câu sai.
                    </p>
                    <p>Mọi hành vi gian lận sẽ bị chúng tôi hủy kết quả ngay lập tức. Chúc các thí sinh có 1 buổi thi thành công</p>
                    <Link to={'/home/do-exam'} style={{ textDecoration: 'none', color: 'black', width: '100%' }}>
                        <Button variant="contained" size="large">
                            Làm bài thi ngay
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
