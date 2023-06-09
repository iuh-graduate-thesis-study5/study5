import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import questionRouter from './routes/question.js';
import answerRouter from './routes/answer.js';
import groupQuestionRouter from './routes/groupQuestion.js';
import examRouter from './routes/exam.router.js';
import examStudent from './routes/examStudent.router.js';
import uploadRouter from './routes/upload.js';
import resultRouter from './routes/result.router.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage });

app.use('/api/upload', uploadRouter);
app.use('/api/exam', examRouter);
app.use('/api/account', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/question', questionRouter);
app.use('/api/groupquestion', groupQuestionRouter);
app.use('/api/answer', answerRouter);
app.use('/api/result', resultRouter);
app.use('/api/exam-student', examStudent);

app.listen(8800, () => {
    console.log('The server starting in localhost:8800!');
});
