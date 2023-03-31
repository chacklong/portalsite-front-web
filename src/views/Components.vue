<template>
    <div>
        <hero></hero>
        <Ladding></Ladding>
        <icons></icons>
    </div>
</template>
<script>
import Hero from "./components/Hero";
// import BasicElements from "./components/BasicElements";
// import Inputs from "./components/Inputs";
// import CustomControls from "./components/CustomControls";
// import Navigation from "./components/Navigation";
// import JavascriptComponents from "./components/JavascriptComponents";
// import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
// import Examples from "./components/Examples";
// import DownloadSection from "./components/DownloadSection";
// import TabsSection from "./components/JavascriptComponents/TabsSection.vue";
import Ladding from "./Landing.vue";

export default {
  name: "components",
  components: {
    Hero,
    Icons,
    Ladding
  }
};
</script>
