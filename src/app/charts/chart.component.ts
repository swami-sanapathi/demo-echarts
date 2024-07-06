import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import { NgxEchartsDirective, provideEcharts } from "ngx-echarts";

@Component({
  selector: "app-chart",
  standalone: true,
  template: `
    <div class="parent-container">
      <div echarts [options]="options" class="demo-chart"></div>
    </div>
  `,
  styles: [
    `
      .parent-container {
        display: flex;
        justify-content: center; /* Centers children horizontally */
        align-items: center; /* Centers children vertically */
        height: 100vh; /* Example height, adjust as needed */
      }
      .demo-chart {
        width: 600px;
        height: 400px;
        margin: 0 auto;
      }
    `,
  ],
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
})
export default class ChartComponent {
  options: EChartsOption;

  constructor() {
    this.options = {
      title: {
        text: "ECharts entry example",
      },
      tooltip: {},
      legend: {
        data: ["Sales"],
      },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
      },
      yAxis: {},
      series: [
        {
          name: "Sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
  }
}
