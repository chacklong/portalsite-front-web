<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-dark shape-skew alpha-4">
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
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-1">
                        <div class="row justify-content-center">
                        </div>
                        <div class="text-center mt-5">
                            <h3>
                                招聘职位
                            </h3>
                        </div>
                    </div>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="img-fluid rounded shadow-lg">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <div class="col-md-12">
                                        <base-input placeholder="搜索职位" addon-right-icon="ni ni-zoom-split-in"></base-input>
                                        <!-- <base-button type="default" size="sm" class="col">Message</base-button> -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">最新发布</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">简历提交</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative
                                Tim Officer</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div class="mt-5 py-5 border-top">
                        </div>
                    </div>
                </card>
                <div class="row row-grid">
                    <div class="col-lg-12" style="margin-top: 12px;">
                        <card v-for="(work,index) in workList" :key="index" class="border-0 " hover shadow body-classes="py-5"  style="margin-top: 15px;">
                            <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                            </icon>
                            <h6 class="text-primary text-uppercase">{{ work.attributes.workname }}</h6>
                            <span class="footer-tag-time">{{ work.attributes.worktime }}</span>
                            <p class="description mt-3"><vue-markdown>{{ work.attributes.workcontent }}</vue-markdown></p>
                            <div>
                                <badge type="primary" rounded>linux</badge>
                                <badge type="primary" rounded>mysql</badge>
                                <badge type="primary" rounded>tcp/ip</badge>
                            </div>
                            <base-button block tag="a" type="primary" class="mt-4 btn-block-job"
                                @click="modals.modal = true">
                                立即投递
                            </base-button>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="row">
                <div class="col-md-4 connaction-b">
                    <modal :show.sync="modals.modal">
                        <h6 slot="header" class="modal-title" id="modal-title-default">运维工程师</h6>
                        <!-- 显示内容 -->
                        <base-input ref="contactInput" v-model="inputValue" @blur="updateInputValue"
                            placeholder="输入你的联系方式"></base-input>
                        <div class="text-center">
                            <span>上传你的附件简历</span>
                        </div>
                        <div class="from-upload">
                            <form action="">
                                <div class="from-group text-center">
                                    <input ref="resumeInput" type="file" class="from-control-file"
                                        id="exampleFormControlFiles">
                                </div>
                            </form>
                        </div>
                        <template slot="footer">
                            <base-button type="primary" @click="submitForm">提交简历</base-button>
                            <base-button type="link" class="ml-auto" @click="modals.modal = false">关闭
                            </base-button>
                        </template>
                    </modal>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import { getWorkList } from '@/api/work'
import VueMarkdown from 'vue-markdown'

export default {
    components: {
        Modal,
        VueMarkdown
    },
    data() {
        return {
            inputValue: '',
            workList: [],
            modals: {
                modal: false,
            }
        };
    },
    mounted(){
        this.fetchWorkList()
    },
    methods: {
        submitForm() {
            const contact = this.$refs.contactInput.value;
            if (!contact) {
                alert('请填写联系方式');
                return;
            }

            //验证上传的文件
            const resume = this.$refs.resumeInput.value;
            if (!resume) {
                alert('请上传简历');
                return;
            }
            alert('上传成功');
        },
        updateInputValue() {
            this.inputValue = this.$refs.contactInput.value
        },
        async fetchWorkList(){
            try{
                const res = await getWorkList()
                this.workList = res.data
            }catch(err){
                console.error(err)
            }
        }
    },
};
</script>
<style>
.connaction-b {
    margin-left: 220px;
    margin-top: 14px;
}

.modal-sm {
    max-width: 600px !important;
}

.btn-block-job {
    width: 12% !important;
    /* margin-top: 12px; */
}

.from-upload {
    margin-top: 12px;
}
.footer-tag-time{
    width: 100%;
    display: flex;
    float: left;
    margin-left: 1px;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 0.9rem;
}
</style>
