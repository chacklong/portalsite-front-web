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
                                        <base-input placeholder="文章搜索" addon-right-icon="ni ni-zoom-split-in"></base-input>
                                        <!-- <base-button type="default" size="sm" class="col">Message</base-button> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">阅读量</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">阅读量</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">阅读量</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>新闻资讯</div>
                            <div><i class="ni education_hat mr-2"></i>news information</div>
                        </div>
                        <!-- <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>瑞安是一位相当广泛的艺术家，这是墨尔本长大的名字， 布鲁克林的尼克·墨菲（Nick Murphy）——创作、表演和录制他自己的所有音乐， 通过坚固的凹槽结构赋予它温暖、亲密的感觉。艺术家 相当大的范围</p>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </card>
                    <div class="mt-5 py-5 text-center">
                        <div v-for="(item,index) in newList" :key="index" class="row justify-content-center">
                            <div class="card-profile-image">
                                <img :src="'http://192.168.31.30:1337'+item.attributes.image.data.attributes.url" alt=" news image" width="700px" height="250px">
                            </div>
                            <div class="col-lg-9">
                                <h4>{{ item.attributes.title }}</h4>
                                <p class="display2">{{ limitedContent }}</p>
                                <!-- <a href="#">Show more</a> -->
                                <router-link :to="{ name: 'newcontent', params: { id: item.id } }">阅读更多</router-link>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    </div>
</template>
<script>
import { VueMarkdown } from 'vue-markdown';
import { getNewDefault } from '@/api/new';

export default {
    components:{
        VueMarkdown
    },
    data(){
        return {
            newList:[],
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
                const res = await getNewDefault()
                this.newList = res.data
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
