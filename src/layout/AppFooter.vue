<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
        </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">感谢您对我们的支持！</h3>
                    <h4 class="mb-0 font-weight-light">让我们在这些平台上取得联系。
</h4>
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
</style>
