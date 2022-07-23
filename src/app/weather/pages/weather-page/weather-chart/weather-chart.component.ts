import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-weather-chart',
    templateUrl: './weather-chart.component.html',
    styleUrls: ['./weather-chart.component.scss'],
})
export class WeatherChartComponent implements OnInit {
    options: any;

    constructor() {}

    ngOnInit(): void {
        this.options = {
            xAxis: {
                data: ['Now', '7 am', '8 am', '9 am', '10 am', '11 am'],
                axisLine: {
                    show: false,
                    color: '#fff',
                },
                axisTick: {
                    alignWithLabel: true,
                    show: false,
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 20,
                },
            },
            yAxis: {
                show: false,
                splitLine: false,
            },
            series: [
                {
                    data: [18, 18, 19, 21, 19, 18],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        type: 'dotted',
                        color: '#fff',
                        width: 2,
                    },
                    symobol: 'circle',
                    symbolSize: 12,
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 20,
                        distance: 15,
                        formatter: function (data: any) {
                            return `${data.value} °`;
                        },
                    },
                },
            ],
        };
    }
}
