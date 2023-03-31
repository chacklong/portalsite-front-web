<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="#" alt="logo">
                <span>公司名称</span>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                       <span>公司名称</span>
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">主页</span>
                </a>
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">技术支持与服务</span>
                    </a>
                    <div class="row row-3 text-center" style="width: 808px;margin-top: 15px;margin-bottom: 15px;">
                        <div class="col">
                            <a href="">软件开发与定制化</a>
                        </div>
                        <div class="col">
                            <a href="">软件问题解决</a>
                        </div>
                        <div class="col">
                            <a href="">网络问题解决</a>
                        </div>
                        
                    </div>
                    <div class="row row-3 text-center" style="width: 808px;margin-top: 15px;margin-bottom: 15px;">
                        <div class="col">
                            <a href="">云计算服务</a>
                        </div>
                        <div class="col">
                            <a href="">安全问题解决</a>
                        </div>
                        <div class="col">
                            <a href="">技术咨询</a>
                        </div>         
                    </div>
                </base-dropdown>
                <!-- <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link>
                </base-dropdown> -->
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href=""
                       target="_blank" rel="noopener" data-toggle="tooltip" title="weixin">
                        <!-- <i class="fa fa-weixin"></i> -->
                        <span class="nav-link-inner--text d-lg-none">微信</span>
                        <p class="dispaly4 text-center">{{ HeaderWeixinPhone }}</p>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="#" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">menu</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data(){
    return{
        // 企业联系方式header展示栏
        HeaderWeixinPhone: '17685363757'
    }
  }
  
};
</script>
<style>
</style>
