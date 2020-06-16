<template>
<div>
  <vc-donut
    background="white" foreground="grey"
    :size="200" unit="px" :thickness="30"
    has-legend legend-placement="top"
    :sections="sections" :total="100"
    :start-angle="0" :auto-adjust-text-size="true"
    @section-click="handleSectionClick">
    <h1>{{porcentajeTotalsobreStock}}%</h1>
  </vc-donut>
  <button @click="sumaruno"> + </button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sections: [
          { label: 'Red section', value: 20, color: 'red' },
          { label: 'Green section', value: 20, color: 'green' },
          { label: 'Blue section', value: 20, color: 'yellow' },
          { label: 'Blue section', value: 20, color: 'blue' },
          { label: 'Blue section', value: 20, color: 'pink' }
        ],
        porcentajeTotalsobreStock:80
      };
    },
    methods: {
      handleSectionClick(section) {
        console.log(`${section.label} clicked.`);
      },
      sumaruno(){
        this.porcentajeTotalsobreStock=+this.porcentajeTotalsobreStock+1;
      }
    }
  };
</script>