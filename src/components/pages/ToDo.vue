<template>
  <div class="page">
    <table>
      <tr>
        <th
          v-for="(headerName, headerIndex) in headerList"
          :key = "headerIndex"
        >
          {{headerName}}
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
// import strage from '@/mixins/strage.js'
export default {

  data() {
    return {
      headerList: ['No', '', 'コメント', '状態', '-'],
      recordList: [
        {
          things: 'やること1',
          ing: false,
        },
        {
          things: 'やること2',
          ing: true,
        },
      ],
      point: ''
    }
  },
  mounted() {
    // this.recordList.forEach (value)
    // localStorage.setItem('point', JSON.stringify(this.recordList))
    // this.point = JSON.parse(localStorage.getItem('point'))
    // console.log(this.point[1])
  },


}
</script>

<style>

</style>