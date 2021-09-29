<template>
  <div class="grid">
    <slider></slider>
    <demo-publishers></demo-publishers>
    <artists></artists>
    <demos></demos>
    <releases></releases>
    <top-publisher></top-publisher>
  </div>
</template>

<script>
import slider from "./Slider/Slider";
import artists from "./Statistic Cards/Artists";
import demos from "./Statistic Cards/Demos";
import releases from "./Statistic Cards/Releases";
import DemoPublishers from "./Statistic Cards/DemoPublishers";
import TopPublisher from "./Statistic Cards/TopPublisher";
export default {
  components: {
    slider,
    artists,
    demos,
    releases,
    DemoPublishers,
    TopPublisher
  }
}
</script>

<style scoped>

</style>
