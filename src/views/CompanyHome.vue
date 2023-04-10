<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-dark shape-skew">
                    <!-- <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> -->
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                    rounded></icon>
                            </div>
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">我们的服务
                                    <span class="display-4">Our Services</span>
                                </h1>
                                <p class="lead text-white">
                                    我们的技术支持服务旨在帮助客户解决IT技术方面的各种问题，包括硬件故障、软件问题、网络问题、安全问题等。我们的技术支持团队拥有丰富的技术知识和经验，能够为客户提供及时、专业的技术支持服务。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">技术咨询</h6>
                                    <p class="description mt-3">我们能够为客户提供各种技术咨询与服务，包括软件咨询、硬件咨询、网络咨询等，帮助客户更好地了解和应用相关技术</p>
                                    <div>
                                        <badge type="primary" rounded>软件</badge>
                                        <badge type="primary" rounded>硬件</badge>
                                        <badge type="primary" rounded>网络</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">网络问题解决</h6>
                                    <p class="description mt-3">我们能够帮助客户解决各种安全问题，包括网络安全、数据安全、设备安全等，确保客户的信息安全</p>
                                    <div>
                                        <badge type="success" rounded>信息安全</badge>
                                        <!-- <badge type="success" rounded></badge> -->
                                        <badge type="success" rounded>数据安全</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">软件问题解决</h6>
                                    <p class="description mt-3">我们能够帮助客户解决各种软件问题，包括安装、配置、升级、维护及设备诊断、维修、更换等，确保客户的设备正常运行</p>
                                    <div>
                                        <badge type="warning" rounded>软件安装</badge>
                                        <badge type="warning" rounded>软件配置</badge>
                                        <badge type="warning" rounded></badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="text-center">
                    <h1>企业资讯</h1>
                    <span class="display-4">Corporate news</span>
                </div>
                <div v-for="(item,index) in newList.slice(0,4)" :key="index" class="row row-grid align-items-center align-items-center-top">
                    <div class="col-md-6 order-md-2">
                        <img :src="'http://192.168.31.30:1337'+item.attributes.image.data.attributes.url" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-tag" class="mb-5" size="lg" type="success" shadow rounded></icon>
                            <h4>{{ item.attributes.title }}</h4>
                            <p class="lead">{{ item.attributes.description.slice(0,82)+'...' }}</p>
                            <!-- <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">经验丰富</h6>
                                    </div>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-dark">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-0 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1" style="z-index: 999;">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-briefcase-24" size="lg" class="bg-gradient-white" color="primary" shadow
                                    rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">人才招聘</h4>
                                <p class="text-white">列举公司为不同行业提供的解决方案，让访客对公司在不同领域的专业性和解决问题的能力有一个初步了解</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 col-md-6 col-sm-12" v-for="(item,index) in jobList.slice(0,3)" :key="index" style="margin-top: 22px;">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-briefcase-24" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">{{ item.attributes.title }}</h6>
                                    <p class="description mt-3"><vue-markdown>{{ item.attributes.description.slice(0,90) }}</vue-markdown></p>
                                    <div>
                                        <badge v-for="(keyword,index) in jobKeywords[index]" :key="index" type="primary" rounded>{{ keyword }}</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">企业优质的团队力量</h2>
                        <p class="lead text-muted">我们的技术支持团队拥有丰富的技术知识和经验，能够为客户提供专业的技术支持服务.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mr.Honney</span>
                                    <small class="h6 text-muted">高级工程师</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weibo" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mr.Chack</span>
                                    <small class="h6 text-muted">高级工程师</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weibo" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mr.Jack</span>
                                    <small class="h6 text-muted">高级工程师</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weibo" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/theme/team-4-800x800.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 200px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mr.Mary</span>
                                    <small class="h6 text-muted">高级工程师</small>
                                </h5>
                                <div class="mt-3">
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weibo" rounded
                                        icon-only></base-button>
                                    <base-button tag="a" href="#" type="primary" icon="fa fa-weixin" rounded
                                        icon-only></base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="dark" no-body shadow-size="lg" class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">加入我们</h3>
                                <p class="lead text-white mt-3">介绍公司的招聘信息和职业发展机会，让访客有机会了解公司的文化、价值观和发展前景</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="http://localhost:8080/Jobs" type="white" block size="lg">
                                    加入我们
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 bg-gradient-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="text-center">
                <base-button outline type="primary" @click="showContent1">section one</base-button>
                <base-button outline type="primary" @click="showContent2">section tow</base-button>
            </div>
            <transition name="fade">
                <div id="content1" class="container pt-lg pb-300" v-if="showContent === 1" key="content1">
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="display-3 text-white">我们的技术服务流程</h2>
                            <p class="lead text-white">技术服务流程是我们公司为客户提供技术支持和服务的整个过程，从客户咨询到问题解决、服务结束.</p>
                        </div>
                    </div>
                    <div class="row row-grid mt-5">
                        <div class="row">
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-2">提交问题</h5>
                                <p class="text-white mt-3">客户通过电话、邮件、在线聊天等方式提交技术性问题</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary">
                                </icon>
                                <h5 class="text-white mt-2">问题确认</h5>
                                <p class="text-white mt-3">我们技术支持人员会与客户进行联系，确认问题得到具体情况，并进行初步分析</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-2">问题解决</h5>
                                <p class="text-white mt-3">我们的技术支持人员会根据问题的具体情况，提供相应的解决方案，帮助客户解决问题</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content2" class="container pt-lg pb-300" v-else>
                    <div class="row text-center justify-content-center">
                        <div class="col-lg-10">
                            <h2 class="display-3 text-white">技术支持服务优势</h2>
                            <p class="lead text-white">技术服务流程是我们公司为客户提供技术支持和服务的整个过程，从客户咨询到问题解决、服务结束.</p>
                        </div>
                    </div>
                    <div class="row row-grid mt-5">
                        <div class="row">
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-2">专业团队</h5>
                                <p class="text-white mt-3">我们的技术支持团队拥有丰富的技术知识和经验，能够为客户提供专业的技术支持服务</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary">
                                </icon>
                                <h5 class="text-white mt-2">快速响应</h5>
                                <p class="text-white mt-3">我们能够在最短的时间内响应客户的技术支持请求，并提供相应的解决方案</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                                <h5 class="text-white mt-2">贴心服务</h5>
                                <p class="text-white mt-3">我们始终把客户放在第一位，为客户提供贴心、周到的服务</p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-8">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">联系我们</h4>
                            <p class="mt-0">您的安全问题对我们非常重要。</p>
                            <form>
                                <base-input ref="inputNameRef" v-model="inputName" class="mt-5" alternative placeholder="姓名" addon-left-icon="ni ni-circle-08">
                                </base-input>
                                <base-input ref="inputPhoneRef" v-model="inputPhone" class="mt-0" alternative placeholder="手机号" addon-left-icon="ni ni-mobile-button">
                                </base-input>
                                <base-input ref="inputCompanyRef" v-model="inputCompany" class="mt-0" alternative placeholder="公司名称" addon-left-icon="ni ni-building">
                                </base-input>
                                <base-input ref="inputAddressRef" v-model="inputAddress" class="mt-0" alternative placeholder="地址" addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input ref="inputEmailRef" v-model="inputEmail" alternative placeholder="邮箱" addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4" cols="80"
                                        placeholder="提交备注信息..."></textarea>
                                </base-input>
                                <div class="error">{{ errorMsg }}</div>
                                <base-button type="default" round block size="lg" @click="submitForm">
                               提交
                                </base-button>
                            </form>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { VueMarkdown } from "vue-markdown";
import { getNewDefault } from '@/api/new'
import { getWorkList } from '@/api/work'
import Badge from '../components/Badge.vue';
export default {
    name:'companyhome',
    components: {
        BCarousel,
        BCarouselSlide,
        VueMarkdown,
        Badge
    },
    data() {
        return {
            showContent: 1,
            inputName: '',
            inputCompany: '',
            inputAddress:'',
            inputEmail:'',
            inputPhone:'',
            errorMsg: '',
            newList:[],
            jobList:[],
            jobKeywords:[],
        }
    },
    mounted(){
        this.fetchNewList()
        this.fetchJobList()
    },
    methods: {
        showContent1() {
            this.showContent = 1
        },
        showContent2() {
            this.showContent = 2
        },
        submitForm(){
        const phoneReg = /^1[3-9]\d{9}$/;
        const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/i;

        if(!this.inputName){
            // alert('请输入姓名');
            this.errorMsg = '请输入姓名'
            this.$refs.inputNameRef.focus();
            return;
        }
        if(!this.inputPhone){
            // alert('请输入手机号')
            this.errorMsg = '请输入手机号'
            this.$refs.inputPhoneRef.focus();
            return;
        }
        if(!phoneReg.test(this.inputPhone)){
            // alert('手机号格式不对');
            this.errorMsg = '手机格式不对'
            return;
        }
        if(!this.inputEmail){
            alert('请输入邮箱');
            this.$refs.inputEmailRef.focus();
        }
        if(!emailReg.test(this.inputEmail)){
            // alert('邮箱格式不对');
            this.errorMsg = '邮箱格式不对'
            return;
        }
        if(!this.inputCompany){
            alert('请输入公司名称');
            this.$refs.inputCompanyRef.focus();
            return;
        }
        if(!this.inputAddress){
            alert('请输入地址');
            this.$refs.inputAddressRef.focus();
            return;
        }
        alert('提交成功');
        },  
        async fetchNewList(){
            try{
                const res = await getNewDefault()
                    this.newList = res.data
                }catch(err){
                    console.log(err)
            }
        },
        async fetchJobList(){
            try{
                const res = await getWorkList()
                this.jobList = res.data
                this.jobKeywords = this.jobList.map(item => item.attributes.keywords.split('/'))
                console.log(this.jobKeywords)
            }catch(err){
                console.log(err)
            }
        },
    },
    // computed: {
    //     filteredJobList(){
    //         return this.jobList.slice(0,3)
    //     }
    // },
};
</script>
<style>
.fade-enter-active,
.fade-enter-active {
    transition: opacity 10s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.text-p{
    margin-left: 46px !important;
}
.row-change{
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
}
.row-change::-webkit-scrollbar{
    display: none !important;
}
.col-change{
    flex: 0 0 auto !important;
}
.align-items-center-top{
    margin-top: 75px;
}
.error{
    display: flex;
    margin: auto 0;
    color: red;
}
</style>
