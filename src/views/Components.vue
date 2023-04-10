<template>
    <div>
        <HomeHeadPage></HomeHeadPage>
        <CompanyHome></CompanyHome>
        <CooperateBox></CooperateBox>
    </div>
</template>
<script>
import HomeHeadPage from "./components/HomeHeadPage";
import CooperateBox from "./components/CooperateBox";
import CompanyHome from "./CompanyHome.vue";

export default {
  name:'components',
  components: {
    HomeHeadPage,
    CooperateBox,
    CompanyHome
  }
};
</script>
