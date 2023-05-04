import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as result_action from 'actions/result.action';
import moment from 'moment';
const LineChart = () => {
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.account.userAuth);
    const rsByUserId = useSelector((state) => state.result.listResultByUserId);
    const avg = (arr) => Math.round(arr.length ? arr.reduce((p, c) => p + c, 0) / arr.length : 0);

    useEffect(() => {
        if (user_id) {
            dispatch(result_action.getResultByUserId(user_id));
        }
    }, [user_id]);
    const [series, setSeries] = useState([
        {
            name: 'Desktops',
            data: [10]
        }
    ]);
    console.log(rsByUserId);
    useEffect(() => {
        if (rsByUserId) {
            const listChartValue = [];
            [0, 1].forEach((type) => {
                const t1 = [];
                const t2 = [];
                const t3 = [];
                const t4 = [];
                const t5 = [];
                const t6 = [];
                const t7 = [];
                const t8 = [];
                const t9 = [];
                const t10 = [];
                const t11 = [];
                const t12 = [];
                rsByUserId.forEach((e) => {
                    if (e.dethithisinh.dethi.loaidethi == type) {
                        const month = moment(e.thoigiannopbai).format('MM/YYYY');
                        const currentYear = new Date().getFullYear();
                        if ('01/' + currentYear === month) {
                            t1.push(e.tongdiem);
                        } else if ('02/' + currentYear === month) {
                            t2.push(e.tongdiem);
                        } else if ('03/' + currentYear === month) {
                            t3.push(e4tongdiem);
                        } else if ('04/' + currentYear === month) {
                            t4.push(e.tongdiem);
                        } else if ('05/' + currentYear === month) {
                            t5.push(e.tongdiem);
                        } else if ('06/' + currentYear === month) {
                            t6.push(e.tongdiem);
                        } else if ('07/' + currentYear === month) {
                            t7.push(e.tongdiem);
                        } else if ('08/' + currentYear === month) {
                            t8.push(e.tongdiem);
                        } else if ('09/' + currentYear === month) {
                            t9.push(e.tongdiem);
                        } else if ('10/' + currentYear === month) {
                            t10.push(e.tongdiem);
                        } else if ('11/' + currentYear === month) {
                            t11.push(e.tongdiem);
                        } else if ('12/' + currentYear === month) {
                            t12.push(e.tongdiem);
                        }
                    }
                });
                listChartValue.push({
                    name: type ? 'Bài thi thử' : 'Bài kiểm tra',
                    data: [avg(t1), avg(t2), avg(t3), avg(t4), avg(t5), avg(t6), avg(t7), avg(t8), avg(t9), avg(t10), avg(t11), avg(t12)]
                });
            });

            setSeries(listChartValue);
        }
    }, [rsByUserId]);
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },

        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            }
        },
        xaxis: {
            categories: [
                'Tháng 1',
                'Tháng 2',
                'Tháng 3',
                'Tháng 4',
                'Tháng 5',
                'Tháng 6',
                'Tháng 7',
                'Tháng 8',
                'Tháng 9',
                'Tháng 10',
                'Tháng 11',
                'Tháng 12'
            ]
        }
    });

    return (
        <div id="chart">
            <p>
                <b>Sơ đồ phân bố điểm trung bình hàng tháng trong năm {new Date().getFullYear()}</b>
            </p>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default LineChart;
