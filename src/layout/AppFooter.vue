<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-3">
                    <h5 class="text-dark font-weight-light mb-3 ml-4">公众号</h5>
                    <img src="../../public/weixin.jpg" width="120px" height="130px" alt="">
                </div>
                <div class="col-lg-3">
                    <h5 class="text-dark font-weight-light mb-6 ml-4">联系方式</h5>
                    <p class="lead">座机：0851-177888901</p>
                    <p class="lead">电话：1898465790</p>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a target="_blank" rel="noopener">备案信息</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener">快捷入口</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener">快捷入口</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener">快捷入口</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" rel="noopener">快捷入口</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
.footer.has-cards:before{
    top: 450px !important;
    background: #fff !important;
    height: auto !important;
}
.mb-6{
    margin-bottom: 40px;
}
</style>
