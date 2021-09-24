<template>
  <div
    :class="[
      'w-20 h-20 mr-1 last:mr-0 py-1 px-2',
      { 'text-white': color.luminance() < 0.2 },
    ]"
    :style="{ backgroundColor: color.hex() }"
  >
    <div class="font-mono text-xs">
      {{ color.hex() }}
    </div>
    <div class="font-mono text-xs">
      {{ Number.parseFloat(color.luminance()).toPrecision(3) }}
    </div>
    <div class="font-mono text-xs">B: {{ blackContrast }}</div>
    <div class="font-mono text-xs">W: {{ whiteContrast }}</div>
  </div>
</template>

<script>
import chroma from "chroma-js";

export default {
  props: ["hexCode"],

  data() {
    const color = chroma(this.hexCode);
    return {
      color,
    };
  },

  computed: {
    blackContrast() {
      return Number.parseFloat(
        chroma.contrast(this.color, "black")
      ).toPrecision(3);
    },
    whiteContrast() {
      return Number.parseFloat(
        chroma.contrast(this.color, "white")
      ).toPrecision(3);
    },
  },
};
</script>
