<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="height: 100vh;width: 100vw;">
            <div class="shape shape-style-6 shape-primary alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-0" style="margin-top: 32px;">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-briefcase-24" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">{{ workDetail.jobtitle }}</h6>
                                    <div>
                                        <badge type="primary" rounded>薪资:{{ workDetail.jobsalary }}</badge>
                                    </div>
                                    <div>
                                        <badge type="primary" rounded>学历:{{ workDetail.jobdiploma }}</badge>
                                    </div>
                                    <p class="description mt-3"><vue-markdown>{{ workDetail.jobcontent }}</vue-markdown></p>
                                    <div>
                                        <badge type="primary" rounded>{{ workDetail.jobkeywords }}</badge>
                                    </div>
                                    <base-button type="primary" class="mt-4">
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
import { getWorkDetail } from '@/api/work';

export default {
    components:{
        VueMarkdown
    },
    data(){
        return {
            key: '',
            // workList:[],
            workDetail:{
                jobtitle:'',
                jobcontent:'',
                jobsalary:'',
                jobdiploma:'',
                jobkeywords:''
            }
        }
    },
    async created(){
        try{
            const res = await getWorkDetail(this.$route.params.id)
            this.workDetail.jobtitle = res.data.attributes.title
            this.workDetail.jobcontent = res.data.attributes.description
            this.workDetail.jobsalary = res.data.attributes.salary
            this.workDetail.jobdiploma = res.data.attributes.diploma
            this.workDetail.jobkeywords = res.data.attributes.keywords
        }catch(err){
            console.log(err)
        }
    }
};
</script>
<style>
.card-profile-image{
    margin-bottom: 22px;
}
</style>
