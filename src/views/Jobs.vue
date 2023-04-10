<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-6 shape-primary alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body style="margin-top: -350px !important;">
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <div class="col-md-12">
                                        <base-input placeholder="职位搜索" addon-right-icon="ni ni-zoom-split-in"></base-input>
                                        <!-- <base-button type="default" size="sm" class="col">Message</base-button> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">职位</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">发布</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>人才招聘</div>
                            <div><i class="ni education_hat mr-2"></i>Talent recruitment</div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 mt--100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4" v-for="(item,index) in workList" :key="index" style="margin-top: 32px
                            ;">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-briefcase-24" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">{{ item.attributes.title }}</h6>
                                    <p class="description mt-3"><vue-markdown>{{ item.attributes.description.slice(0,90) }}</vue-markdown></p>
                                    <div>
                                        <badge v-for="(keyword,index) in jobKeywords[index]" :key="index" type="primary" rounded>{{ keyword }}</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        投递
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { VueMarkdown } from 'vue-markdown';
import { getWorkList } from '@/api/work';

export default {
    components:{
        VueMarkdown
    },
    data(){
        return {
            jobKeywords: '',
            workList:[],
        }
    },
    mounted(){
        this.fetchNewList()
    },
    computed:{
        limitedContent(){
            const maxLength = 100;
            if(this.newList.length > 0 && this.newList[0].attributes.description.length > maxLength){
                return this.newList[0].attributes.description.slice(0,maxLength)+'...'
            }else{
                return this.newList[0].attributes.description
            }
        }
    },
    methods: {
        async fetchNewList(){
            try{
                const res = await getWorkList()
                this.workList = res.data
                this.jobKeywords = this.workList.map(item =>item.attributes.keywords.split('/'))
            }catch(err){
                console.log(err)
            }
        }
    }
};
</script>
<style>
.card-profile-image{
    margin-bottom: 22px;
}
</style>
