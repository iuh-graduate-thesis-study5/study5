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

const PieChartExam = ({ listChart }) => {
    const [options, setOptions] = useState(barChartOptions);
    const [series, setSeries] = useState([44, 55, 20]);
    useEffect(() => {
        setSeries(listChart);
    }, [listChart]);
    console.log(series);
    useEffect(() => {
        setOptions({
            chart: {
                width: 500,
                type: 'pie'
            },
            labels: ['Kém', 'Khá', 'Giỏi'],
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
            <ReactApexChart key={JSON.stringify(series)} options={options} series={series} type="pie" height={500} />
        </div>
    );
};

export default PieChartExam;
