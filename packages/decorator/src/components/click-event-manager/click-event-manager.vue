<template>
    <div class="click-event-manager">
        <el-divider>{{title}}</el-divider>
        <el-form class="click-event-manager">
            <el-form-item label="类型">
                <el-radio-group v-model="form.type" @change="propertyChange">
                    <el-radio :label="0">导航</el-radio>
                    <el-radio :label="1">提示框</el-radio>
                    <el-radio :label="2">对话框</el-radio>
                    <el-radio :label="3">自定义</el-radio>
                </el-radio-group>
            </el-form-item>
            <div class="nav-config" v-show="form.type==0">
                <el-alert
                        title="注意!"
                        type="info"
                        description="如果配置了 [导航页面] 优先级则高于 [网址]">
                </el-alert>
                <el-form-item label="导航页面">
                    <el-input type="text" v-model="form.navigationConfig.page"
                              placeholder="app或小程序的页面链接,如:/pages/a/b"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="导航类型">
                    <el-radio-group v-model="form.navigationConfig.type" @change="propertyChange">
                        <el-radio :label="0">普通页面</el-radio>
                        <el-radio :label="1">底部导航页面</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="网址">
                    <el-input type="text" v-model="form.navigationConfig.url"
                              placeholder="外部网址,如: http://xxx.com"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
            <div class="toast-config" v-show="form.type==1">
                <el-alert
                        title="注意!"
                        type="info">
                    1. 提示内容建议简短明了<br>2. 显示蒙层可以防止用户点击到后面的内容<br>3. 显示时间为毫秒,1秒=1000毫秒
                </el-alert>
                <el-form-item label="提示内容">
                    <el-input type="text" v-model="form.toastConfig.title" placeholder="如:hello akira!"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-radio-group v-model="form.toastConfig.icon" @change="propertyChange">
                        <el-radio label="success">成功</el-radio>
                        <el-radio label="loading">加载</el-radio>
                        <el-radio label="none">无</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="位置">
                    <el-radio-group v-model="form.toastConfig.position" @change="propertyChange">
                        <el-radio label="top">顶部</el-radio>
                        <el-radio label="center">居中</el-radio>
                        <el-radio label="bottom">底部</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="显示蒙层">
                    <el-switch v-model="form.toastConfig.mask" @change="propertyChange"></el-switch>
                </el-form-item>
                <el-form-item label="显示时间">
                    <el-input-number v-model="form.toastConfig.duration" :step="100" size="small"
                                     @change="propertyChange"></el-input-number>
                </el-form-item>
            </div>
            <div class="modal-config" v-show="form.type==2">
                <el-form-item label="标题">
                    <el-input type="text" v-model="form.modalConfig.title" placeholder="如:提示"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="text" v-model="form.modalConfig.content" placeholder="如:hello akira!"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="显示取消按钮">
                    <el-switch v-model="form.modalConfig.showCancel" @change="propertyChange"></el-switch>
                </el-form-item>
                <el-form-item label="取消按钮文字">
                    <el-input type="text" v-model="form.modalConfig.cancelText" placeholder="如:取消"
                              @input="propertyChange"></el-input>
                </el-form-item>
                <el-form-item label="确认按钮文字">
                    <el-input type="text" v-model="form.modalConfig.confirmText" placeholder="如:确定"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
            <div class="custom-config" v-show="form.type==3">
                <el-form-item label="方法名">
                    <el-input type="text" v-model="form.custom.methodName" placeholder="如:onClick"
                              @input="propertyChange"></el-input>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "click-event-manager",
        props: {
            title: {
                type: String,
                default: '点击事件设置'
            },
            config: {
                type: Object
            }
        },
        created() {
            if (this.config) {
                this.form = this.config
            }
        },
        data() {
            return {
                form: {
                    type: 0,
                    debug: true,
                    navigationConfig: {
                        page: '',
                        url: '',
                        type: 0
                    },
                    toastConfig: {
                        title: 'hello akira!',
                        icon: 'none', //success , loading,none
                        mask: false,
                        duration: 1500,
                        position: 'center' //top ,center,bottom

                    },
                    modalConfig: {
                        title: '提示',
                        content: 'hello akira!',
                        showCancel: true,
                        cancelText: '取消',
                        confirmText: '确定'
                    },
                    custom: {
                        methodName: ''
                    }
                }
            }
        },
        methods: {
            propertyChange() {
                this.$emit('propertyChange', this.form)
            }
        }
    }
</script>

<style scoped>

</style>
