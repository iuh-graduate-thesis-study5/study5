import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
    chart: {
        type: 'bar',
        height: 500,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '45%',
            borderRadius: 4
        }
    },
    dataLabels: {
        enabled: false
    }
};

// ==============================|| MONTHLY BAR CHART ||============================== //

const PieChartExam = ({ account }) => {
    const [options, setOptions] = useState(barChartOptions);
    const [series, setSeries] = useState([44, 55, 20]);
    useEffect(() => {
        if (account) {
            console.log(account);
            let countStudent = 0;
            let countTeacher = 0;
            let countAdmin = 0;
            account.forEach((e) => {
                if (e.quyen === 'STUDENT') {
                    countStudent += 1;
                } else if (e.quyen === 'ADMIN') {
                    countAdmin += 1;
                } else {
                    countTeacher += 1;
                }
            });
            setSeries([countTeacher, countStudent, countAdmin]);
        }
    });

    useEffect(() => {
        setOptions({
            chart: {
                width: 500,
                type: 'pie'
            },
            labels: ['GIÁO VIÊN', 'HỌC SINH', 'ADMIN'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="chart" style={{ height: '100%' }}>
            <ReactApexChart options={options} series={series} type="pie" height={500} />
        </div>
    );
};

export default PieChartExam;
