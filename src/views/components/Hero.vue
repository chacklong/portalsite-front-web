<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <!-- <img src="img/brand/white.png" style="width: 200px;" class="img-fluid"> -->
                        <h1 class="display-1 text-white">新型IT技术服务中心</h1>
                        <p class="lead text-white mt-4 mb-5">我们是专家，为您的业务发展提供最广泛的IT服务和解决方案。</p>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="default"
                                         >
                                开始咨询
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="row nav-tag">
                        <div class="col-sm">
                            <span>产品与技术服务</span>
                        </div>
                        <div class="col-sm">
                            <span>行业解决方案分析</span>
                        </div>
                        <div class="col-sm">
                            <span>企业团队协作</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
.section-hero {
    background-image: url(../../../public/hero-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
}
.col-sm{
    width: 158px !important;
    margin-top: 200px;
}
</style>
