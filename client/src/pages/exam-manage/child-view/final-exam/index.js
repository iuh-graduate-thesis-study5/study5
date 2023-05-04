import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardExam from './CardExam';
import CardPoint from './CardPoint';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as actions from 'actions/result.action';
import * as exam_actions from 'actions/exam.action';
import ExamTable from 'pages/exam-manage/ExamTable';
import PieChartExam from './PieChart';
import FinalExamTable from './FinalExamTable';
import moment from 'moment';

import * as XLSX from 'xlsx';
import { useState } from 'react';
export default function DoExam() {
    const { id } = useParams();
    const result = useSelector((state) => state.result.listResultByExamId);
    const exam_by_id = useSelector((state) => state.exam.examById);
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(actions.getResultByExamId(id));
            dispatch(exam_actions.getExamById(id));
        }
    }, [id]);
    const [listExport, setListExport] = useState([]);
    const [listPoint, setListPoint] = useState([]);
    const [listChart, setListChart] = useState([]);
    console.log(exam_by_id);
    useEffect(() => {
        if (result) {
            const listExportResult = [];
            const points = [];
            let weak = 0;
            let good = 0;
            let very_good = 0;
            result.forEach((e, i) => {
                if (e.tongdiem <= 150) {
                    weak += 1;
                } else if (e.tongdiem > 150 && e.tongdiem < 400) {
                    good += 1;
                } else if (e.tongdiem >= 400) {
                    very_good += 1;
                }
                let export_excel = {
                    'Số thứ tự': i + 1,
                    'Tên thí sinh': e?.dethithisinh?.taikhoan?.nguoidung?.tennguoidung,
                    'Số câu đúng': e.socaudung,
                    'Số câu sai': e.socausai,
                    'Số câu bỏ qua': e.socauboqua,
                    'Tổng điểm': e.tongdiem,
                    'Thời gian nộp bài': moment(e?.thoigiannopbai).format('hh:mm - MM/DD/YYYY')
                };
                points.push(e.tongdiem);
                listExportResult.push(export_excel);
            });
            setListChart([weak, good, very_good]);
            setListExport(listExportResult);
            setListPoint(points);
        }
    }, [result]);
    console.log(listChart);
    const downloadExcel = () => {
        const headerTitle = 'Danh sách điểm sinh viên đề thi';
        const worksheet = XLSX.utils.json_to_sheet([{}], {
            header: [headerTitle]
        });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.sheet_add_json(worksheet, listExport, { origin: 'A3' });
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'DataSheet.xlsx');
    };
    const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
    return (
        <div>
            <div style={{ textAlign: 'left' }}>
                <h4>
                    {exam_by_id?.madethi} - {exam_by_id?.tieude}
                </h4>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardExam
                        header={'Thông tin bài thi'}
                        createUser={exam_by_id?.taikhoan?.nguoidung?.tennguoidung}
                        size={exam_by_id?.dethithisinhs?.length}
                        join={result?.length}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardPoint
                        header={'Sơ lược điểm'}
                        max={Math.max(...listPoint)}
                        min={Math.min(...listPoint)}
                        avg={parseFloat(average(listPoint)).toFixed(2)}
                    />
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <Button onClick={downloadExcel} variant="contained" startIcon={<FileDownloadIcon />}>
                        XUẤT KẾT QUẢ
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <FinalExamTable />
                </Grid>
                <Grid item xs={4}>
                    <PieChartExam listChart={listChart} />
                </Grid>
            </Grid>
        </div>
    );
}
