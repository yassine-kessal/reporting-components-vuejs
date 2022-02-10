function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function tooltipFormatter(params, total) {
  const param = params[0];
  const percent = ((param.data * 100) / total).toFixed(2);

  return `
    <div class="mb-2 font-bold">${param.name}</div>
    <div class="flex justify-between gap-4">
      <div class="flex gap-2 items-center">
        <div class="h-3 w-3 rounded-full" style="background: ${
          param.color
        }"></div>
        <div>${param.seriesName}</div>
      </div>

      <div class="font-bold">
        ${numStr(param.data)} (${percent}%)
      </div>
    </div>
    `;
}

function useUnit() {
  const unit = Vue.ref(2);

  const set = (newUnit) => {
    unit.value = newUnit;
  };

  return [unit, set];
}

const BarChart = {
  props: {
    collection: {
      required: true,
    },
    title: {
      required: true,
    },
    // unit : 1 = clics, 2 = ouvertures
    unit: {
      required: false,
      default: 2,
    },
  },
  data() {
    return {
      elID: null, // unique id for chart
      categoryData: [], // all categories data xaxis
      valueData: [], // all values data yaxis
      totalData: 0, // sum of all valueData
      reduceData: true, // mask or no data
      reduceTo: 1, // value in percent
      colors: {}, // colors of bar
    };
  },
  emits: ["dataCounted"],
  methods: {
    formatData() {
      var newCategoryData = [],
        newValueData = [],
        newTotalData = 0,
        newColors = {},
        reduceTo = this.reduceTo,
        unit = this.unit,
        collection = this.collection.filter((item) => item.type == unit);

      collection.forEach((item) => {
        newCategoryData.push(item.key);
        newValueData.push(item.value);
        newTotalData += item.value;

        newColors[item.key] = getRandomColor();
      });

      if (this.reduceData) {
        var maskedValueData = 0;

        newCategoryData = [];
        newValueData = [];

        collection.forEach((item, i) => {
          if ((item.value * 100) / newTotalData > reduceTo) {
            newCategoryData.push(item.key);
            newValueData.push(item.value);
          } else {
            maskedValueData += item.value;
          }
        });

        newCategoryData.push("Masked");
        newValueData.push(maskedValueData);
        newColors["Masked"] = getRandomColor();
      }

      this.categoryData = newCategoryData;
      this.valueData = newValueData;
      this.totalData = newTotalData;
      this.colors = newColors;

      this.$emit("dataCounted", newTotalData);
    },
    updateChart() {
      var chart = echarts.getInstanceByDom(document.getElementById(this.elID));

      chart.setOption({
        xAxis: {
          data: this.categoryData,
        },
        series: [
          {
            data: this.valueData,
          },
        ],
      });
    },
    toggleReduceData() {
      this.reduceData = !this.reduceData;
    },
  },
  watch: {
    reduceData(value) {
      this.formatData();

      this.updateChart();
    },
    unit(value) {
      this.formatData();

      this.updateChart();
    },
  },
  mounted() {
    this.elID = "chart-" + Vue.getCurrentInstance().uid;

    this.formatData();

    var option = {
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false,
          },
          saveAsImage: {
            pixelRatio: 2,
          },
          dataView: {},
        },
      },
      tooltip: {
        trigger: "axis",
        formatter: (params) => tooltipFormatter(params, this.totalData),
        axisPointer: {
          type: "shadow",
          animation: false,
        },
      },
      grid: {
        bottom: 150,
      },
      dataZoom: [
        {
          type: "inside",
        },
        {
          type: "slider",
        },
      ],
      xAxis: {
        data: this.categoryData,
        silent: false,
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        splitArea: {
          show: false,
        },
        axisLabel: {
          rotate: 45,
        },
      },
      series: [
        {
          name: "Valeur",
          type: "bar",
          data: this.valueData,
          large: true,
          itemStyle: {
            color: (param) => {
              return this.colors[param.name];
            },
          },
        },
      ],
    };

    this.$nextTick(() => {
      var chart = echarts.init(document.getElementById(this.elID));
      chart.setOption(option);
    });
  },
  template: `
  <div>
    <div class="flex items-center justify-between">
      <span class="text-xl font-bold text-gray-600 dark:text-gray-400">
        {{ title }}
      </span>
      <div class="flex gap-4 items-center">
        <span
          class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded">
          <template v-if="unit == 2">Ouverture</template>  
          <template v-if="unit == 1">Clic</template>  
        </span>

        <a href="#" @click.prevent="toggleReduceData">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" v-if="!reduceData">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" v-else>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
    </div>

    <div :id="elID" class="mt-8 overflow-visible" style="width: auto;min-height:500px;"></div>
  </div>
  `,
};
