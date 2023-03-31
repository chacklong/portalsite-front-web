<template>
    <!-- Modals -->
    <div class="row">
        <div class="col-md-4 connaction-b">
            <base-button block type="default" class="mb-3 mb-sm-0" @click="modals.modal3 = true">
                联系我们
            </base-button>

            <modal :show.sync="modals.modal3"
                   body-classes="p-2"
                   modal-classes="modal-dialog-centered modal-sm modal-sm">
                <template>
                    <div class="col-lg-12">
                        <card gradient="secondary" shadow body-classes="p-lg-5">
                            <h4 class="mb-1">联系我们</h4>
                            <p class="mt-0">您的安全问题对我们非常重要。</p>
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
                            <base-button type="default" round block size="lg" @click="submitForm">
                               提交
                            </base-button>
                        </card>
                    </div>
                </template>
            </modal>
        </div>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
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
.connaction-b{
    margin-left: 220px;
    margin-top: 14px;
}
.modal-sm{
    max-width: 600px !important;
}
</style>
