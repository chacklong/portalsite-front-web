<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="dark" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/brand/white.png" alt="logo"> -->
                科技有限公司
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="#">
                        <!-- <img src="img/brand/blue.png"> -->
                        科技有限公司
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">MENU1</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="#"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">MENU1-1</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                        <a href="#"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">MENU1-2</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                    compiling Scss, change brand colors and more.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">MENU2</span>
                    </a>
                    <router-link to="/Jobs" class="dropdown-item">招聘信息</router-link>
                    <router-link to="/News" class="dropdown-item">企业资讯</router-link>
                    <router-link to="/Contact" class="dropdown-item">联系我们</router-link>
                    <router-link to="/about" class="dropdown-item">关于我们</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on weixin">
                        <i class="fa fa-weixin"></i>
                        <span class="nav-link-inner--text d-lg-none">微信</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-weixin"></i>
                        <span class="nav-link-inner--text d-lg-none">微信</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on weixin">
                        <i class="fa fa-weixin"></i>
                        <span class="nav-link-inner--text d-lg-none">微信</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-weixin"></i>
                        <span class="nav-link-inner--text d-lg-none">微信</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="#" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <!-- <span class="btn-inner--icon">
                  <i class="ni ni-info mr-2"></i>
                </span> -->
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
  }
};
</script>
<style>
</style>
