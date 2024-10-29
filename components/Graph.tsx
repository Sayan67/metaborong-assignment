import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const Graph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: '$',
                data: [1000, 2000, 1500, 2000, 2500, 3000, 4000],
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                fill: true,
                stepped: true,
                borderWidth: 1.5,
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#ffffff99',
                },
            },
            y: {
                grid: {
                    color: '#ffffff22',
                },
                ticks: {
                    color: '#ffffff99',
                    callback: (value) => `$${(value as number) / 1000}K`, 
                },
            },
        },
    };

    return (
        <div className=" rounded-xl">
            <Line data={data} options={options} />
        </div>
    );
};

export default Graph;
