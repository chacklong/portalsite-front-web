<template>
    <section class="section section-lg section-nucleo-icons pb-250">
        <div class="container" @mouseleave="showIconsAnimation = false">
            <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                <div class="col-lg-8 text-center">
                    <h2 class="display-3">合作蓝图</h2>
                    <p class="lead">
                        这将是我们打向世界市场得到重要方向之一.
                    </p>
                    <!-- <div class="btn-wrapper">
                        <a href="#"
                           class="btn btn-primary">点击</a>
                    </div> -->
                </div>
            </div>
            <div class="blur--hover">
                <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
                    <div class="icons-container blur-item mt-5" :class="{'on-screen': showIconsAnimation}">
                        <!-- Center -->
                        <i class="icon ni ni-diamond"></i>
                        <!-- Right 1 -->
                        <i class="icon icon-sm ni ni-album-2"></i>
                        <i class="icon icon-sm ni ni-app"></i>
                        <i class="icon icon-sm ni ni-atom"></i>
                        <!-- Right 2 -->
                        <i class="icon ni ni-bag-17"></i>
                        <i class="icon ni ni-bell-55"></i>
                        <i class="icon ni ni-credit-card"></i>
                        <!-- Left 1 -->
                        <i class="icon icon-sm ni ni-briefcase-24"></i>
                        <i class="icon icon-sm ni ni-building"></i>
                        <i class="icon icon-sm ni ni-button-play"></i>
                        <!-- Left 2 -->
                        <i class="icon ni ni-calendar-grid-58"></i>
                        <i class="icon ni ni-camera-compact"></i>
                        <i class="icon ni ni-chart-bar-32"></i>
                    </div>
                    <span class="blur-hidden h5 text-success">目前已有2500+合作企业</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      showIconsAnimation: false
    };
  },
  methods: {
    onScroll(evt) {
      console.log(evt);
    }
  }
};
</script>
<style>
</style>
