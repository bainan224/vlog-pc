<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">今日成果</h2>
        <div>
          学习vuetify组件！！！它太好看了，完成自己的任务！！！
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>


<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '12-8',
        },
        {
          color: 'green',
          year: '12-9',
        },
        {
          color: 'pink',
          year: '12-10',
        },
        {
          color: 'amber',
          year: '12-11',
        },
        {
          color: 'orange',
          year: '12-12',
        },
      ],
    }),
  }
</script>