<template>
    <section class="position-relative py-5 bg-dark">
        <span class="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary"></span>
        <div class="position-relative dark-mode container my-lg-5 my-md-4 my-3 py-xl-3">
          <h2 class="h1 mb-md-4 mb-3 text-center">title.demo</h2>
          <p class="mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2 mx-auto text-center" style="max-width: 32.875rem;">this.title</p>
            <!-- Swiper item -->
            <div class="row card-bg">
                <div class="card-menu-news">
                    <div class="col card-title-font">
                        <span class="display-3">demo title</span>
                    </div>
                    <div class="card-content">
                       <blockquote class="lockquote">
                        <p class="mb-0">this my text content-box</p>
                       </blockquote>
                    </div>
                </div>
            </div>
            <!-- Swiper pagination -->
            <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock" _mstvisible="0"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            </div>
          <span class="swiper-notification"></span>
        </div>
      </section>
</template>
<script>
export default {};
</script>
<style>
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
}
.card-bg{
    background-color: hsla(0, 0%, 95%, 0.548);
}
.card-menu-news{
    width: 300px;
    height: 450px;
    border: 1px #472ddb solid;
    border-radius: 12px;
}
.card-title-font{
    display: block;
    text-align: center;
    margin-top: 17px;
}
.card-content{
    display: block;
    text-align: center;
    margin-top: 22px;
}
</style>
