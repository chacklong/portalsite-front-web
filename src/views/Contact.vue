<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4 class="mb-1">联系我们</h4>
                                <p class="mt-0">您的安全问题对我们非常重要。</p>
                            </div>
                            <form role="form">
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
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" @click="submitForm" style="width: 70%;">提交</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
    return {
      inputName: '',
      inputCompany: '',
      inputAddress:'',
      inputEmail:'',
      inputPhone:'',
      modals: {
        modal1: false,
        modal2: false,
        modal3: false
      }
    };
  },
  methods: {
    submitForm(){
        const phoneReg = /^1[3-9]\d{9}$/;
        const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/i;

        if(!phoneReg.test(this.inputPhone)){
            alert('手机号格式不对');
            return;
        }
        if(!emailReg.test(this.inputEmail)){
            alert('邮箱格式不对');
            return;
        }
        if(!this.inputName){
            alert('请输入姓名');
            this.$refs.inputNameRef.focus();
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
        if(!this.inputEmail){
            alert('请输入邮箱');
            this.$refs.inputEmailRef.focus();
        }
        if(!this.inputPhone){
            alert('请输入手机号')
            this.$refs.inputPhoneRef.focus();
            return;
        }
        alert('提交成功')
    }
  }
};
</script>
<style>
</style>
