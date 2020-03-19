<template>

  <AnimalList :animals="$root.$data.animals"/>


</template>

<script>
import AnimalList from "@/components/AnimalList.vue"
export default {
  name: "Animals",
  components: {
    AnimalList
  },
};
</script>
