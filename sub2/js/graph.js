// 생쌀발효 막걸리와 일반 막걸리의 아미노산 비교 (mg / 100ml)
// 출처: 한국산업미생물학회지 1990년 제18권 제5호 506쪽
const data = {
  labels: ['알기닌', '타이로신', '히스티딘', '루이신', '이소루이신'],
  datasets: [{
    label: '생쌀발효 막걸리',
    data: [26.59, 19.98, 19.94, 18.59, 17.96],
    backgroundColor: '#E67300',
    borderRadius: 2,
    barPercentage: 0.8,
    categoryPercentage: 0.7
  },
  {
    label: '일반 막걸리',
    data: [17.02, 8.71, 4.64, 9.90, 7.06],
    backgroundColor: '#6E655C',
    borderRadius: 2,
    barPercentage: 0.8,
    categoryPercentage: 0.7
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',               // 막대를 가로로 눕히기
    maintainAspectRatio: false,   // .graph_box 높이에 맞추기
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: { boxWidth: 12, boxHeight: 12, padding: 24, color: '#333', font: { size: 14 } }
      },
      tooltip: {
        callbacks: {
          label: function (item) { return item.dataset.label + ' : ' + item.raw + ' mg'; }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 30,
        ticks: { stepSize: 10, color: '#999' },
        grid: { color: '#F0F0F0' }
      },
      y: {
        ticks: { color: '#333', font: { size: 15 } },
        grid: { display: false }
      }
    }
  }
};

Chart.defaults.font.family = '"Noto Sans KR", sans-serif';

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
