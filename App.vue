<template>
  <div class="p-6">
    <div class="text-2xl mb-4 font-semibold">{{ message }}</div>
    <div class="flex text-center">
      <div v-for="num in legends" class="w-20 mr-1 last:mr-0">{{ num }}</div>
    </div>
    <div class="flex">
      <swatch v-for="color in scale" :hexCode="color" />
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import chroma from "chroma-js";
import defaultTheme from "tailwindcss/defaultTheme";

const baseRed = chroma(defaultTheme.colors.red["600"]);

import Swatch from "./Swatch";

export default {
  components: {
    Swatch,
  },
  data() {
    const scale = chroma
      .scale([
        baseRed.desaturate(2).brighten(3.5),
        "#EF4444",
        baseRed,
        chroma("#7F1D1D").set("lch.h", 10),
      ])
      .mode("lab")
      .colors(9);

    const legends = _.range(100, 1000, 100);

    return {
      baseRed,
      scale,
      legends,
      message: "David's color scheme",
    };
  },
};
</script>
