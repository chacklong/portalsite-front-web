<template>
    <div class="profile-page">
      <section class="section-shaped section-profile-cover my-0" style="height: 100vh;width: 100vw;">
        <div class="shape shape-style-1 shape-dark">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container">
          <card shadow class="card-profile" effect="light" no-body style="margin-top:100px;height: 500px;">
            <!-- <div class="card-content-bg text-center">
             <p class="display-4">关于我们</p>
            </div> -->
            <div class="text-center" style="margin-top: 145px;">
              <p class="lead">内容展示区</p>
            </div>
          </card>
        </div>
      </section>
    </div>
</template>

<script>
import AppHeader from '../layout/AppHeader.vue';
export default {
  components:{
    AppHeader
  }
}
</script>

<style>
.card-content-bg{
  background-color: #fff;
  margin-top: 5px;
}
</style>