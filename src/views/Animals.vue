<template>

  <AnimalList :animals="arrayOfAnimals"/>


</template>

<script>
import AnimalList from "@/components/AnimalList.vue"
export default {
  name: "Animals",
  components: {
    AnimalList
  },
  computed: {
    arrayOfAnimals() {
      return this.$root.$data.animals;
    }
  },
};
</script>
