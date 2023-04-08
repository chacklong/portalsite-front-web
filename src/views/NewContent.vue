<template>
    <div class="profile-page">
        <div v-if="loading" class="loading">
            <i class="fa fa-spinner fa-spin"></i> 加载中...
        </div>
        <div v-else>
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-dark shape-skew alpha-3">
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
                <card shadow class="card-profile mt--300" style="margin-top: -550px !important;" no-body>
                    <div class="px-4">
                        <div class="text-center mt-5">
                            <div class="h3 mt-4">
                                <i class="ni business_briefcase-24 mr-2">
                                    {{newsDetail.newtitle}}
                                </i>
                                <div>
                                    <!-- <span style="font-size: 0.9rem;">作者：{{formattedDate}}</span> -->
                                </div>
                            </div>
                            <div style="float: left;margin-bottom: 12px;">
                                <i class="ni education_hat mr-2"></i>
                                <vue-markdown></vue-markdown>
                                发布时间：{{formattedDate}}
                            </div>
                        </div>
                        <div class="py-3 border-top text-center">
                        </div>
                        <div class="mt-4" style="margin-top: 40px !important;">
                            <p>
                                <vue-markdown>{{newsDetail.newcontent}}</vue-markdown>
                            </p>
                        </div>
                        <!-- 图片放置区 -->
                        <div class="img">
                            <img :src="newsDetail" alt="">
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
    </div>
</template>
<script>
import { getNewDetail } from '@/api/new';
import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown
    },
    data(){
        return {
            newsDetail: {
                newtitle: '',
                newcontent: '',
                newdate: '',
            },
            formattedDate:'',
            loading: true,
            // imgTag: '',
        }
    },
    async created(){
        try{
            const res = await getNewDetail(this.$route.params.id)
            this.newsDetail.newtitle = res.data.attributes.title
            this.newsDetail.newcontent = res.data.attributes.description
            this.newsDetail.newdate = res.data.attributes.date
            // console.log(this.newsDetail)

            //初始化格式date
            const date = new Date(this.newsDetail.newdate);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            this.formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            //loading
            this.loading =false
        }catch(err){
            console.log(err)
        }
    }
};
</script>
<style>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}
</style>
