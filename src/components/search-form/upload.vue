<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            action=""
            :show-file-list="showFileList"
            :http-request="upload"
            :file-list="fileList"
            :limit="limit"
            :multiple="multiple"
            :before-upload="beforeAvatarUpload"
            :on-success="success"
            :on-exceed="exceed"
            :on-remove="remove"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip" style="display: inline-block; margin-left: 20px;">可以上传{{accept || '任意'}}文件，且不超过{{size || 2}}M</div>
        </el-upload>
    </div>
</template>
<script>
    import Bus from './event.js';
    export default {
        data() {
            return {
                files: []
            };
        },
        props: {
            value: [String, Number],
            fileList: {
                type: Array,
                default () { return [] }
            },
            limit: Number,
            showFileList: {
                type: Boolean,
                default : true
            },
            accept: {
                type: String,
                default: ''
            },
            size: {
                type: Number,
                default: 2
            },
            multiple: {
                type: Boolean,
                default: false
            },
            responseObj: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            beforeAvatarUpload(file) {
                let isAccept = true;
                const isLt2M = file.size / 1024 / 1024 < this.size;
                if(this.accept) {
                    isAccept = file.type.indexOf(this.accept) >= 0;
                }

                if (!isAccept) {
                    this.$message.error('上传格式错误!');
                }
                if (!isLt2M) {
                    this.$message.error('上传大小不能超过 2MB!');
                }
                return isAccept && isLt2M;
            },
            upload(item) {
                let vm = this;
                let base = vm.s.getJ('baseInfo');
                let key = base.sid +  '/' + base.id + '/' + vm.getNowDate() + '/' + new Date().getTime() + '/' + item.file.name;
                vm.alyConfig.uploadToAliyun(item.file, key, function (p) {
                }).then(function (res) {
                    if(res.res.statusCode === 200) {
                        let url = res.res.requestUrls[0];
                        let index = url.indexOf('?');
                        if(index != -1) {
                            url = url.slice(0, index);
                        }

                        // url =  encodeURI(encodeURI(url, 'UTF-8'));
                        if(vm.responseObj) {
                            item.onSuccess({
                                url: url,
                                name: item.file.name
                            });
                        }else{
                            item.onSuccess(url);
                        }
                        // vm.pass(res.res.requestUrls[0]);
                    }
                }).catch(function (e) {
                    item.onError('上传失败')
                    this.$message('上传失败')
                })
            },
            success(realUrl, file, fileList) {
                file.url = realUrl;
                if(fileList.length <= 1) {
                    this.$emit('input', realUrl);
                }else{
                    let list = [];
                    for(let item of fileList) {
                        list.push(item.url);
                    }
                    this.$emit('input', list);
                }
            },
            exceed() {
                this.$message.error(`文件数不能超过${this.limit}个`);
            },
            remove(file, fileList) {
                if(fileList.length <= 1) {
                    this.$emit('input', fileList[0] && fileList[0].url || '');
                }else{
                    let list = [];
                    for(let item of fileList) {
                        list.push(item.url);
                    }
                    this.$emit('input', list);
                }
            },
            pass(url){
                // this.$emit('input', url);
            }
        },
        updated() {
            if(this.fileList.length <= 1) {
              this.$emit('input', this.fileList[0] && this.fileList[0].url || '');
            }else{
                let list = [];
                for(let item of this.fileList) {
                    list.push(item.url);
                }
                this.$emit('input', list);
            }
            // console.log(this.fileList)
            // this.$emit('input', this.fileList[0] && this.fileList[0].url || '');
        }
    }
</script>
<style lang="less" scoped>
    .upload{
        width: 400px;
    }
</style>

