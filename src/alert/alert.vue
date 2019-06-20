<template>
    <div class="g-alert-box">
        <div class="g-alert">
            <div class="g-alert-header">
                <div class="g-alert-title"><span>消息</span></div>
                <g-icon class="g-alert-close" name="close"></g-icon>
            </div>
            <div class="g-alert-content">
                <span>我是内容</span>
            </div>
            <div class="g-alert-btns">
                <g-button type="primary" size="small">确定</g-button>
            </div>
        </div>
        <div class="g-alert-curtain">
        </div>
    </div>
</template>

<script>
import Icon from '../icon/icon.vue'
import Button from '../button/button.vue'
export default {
    name: 'g-alert',
    components: {
        'g-icon': Icon,
        'g-button': Button
    }
}
</script>

<style lang="scss">
    @import '../common/css/var.scss';
    .g-alert {
        position: relative;
        display: inline-block;
        width: 420px;
        padding-bottom: 5px;
        background: #409eff;
        z-index: 1;
        vertical-align: middle;
        box-shadow: $box-shadow;
        border-radius: $border-radius;
        background: #ffffff;
        text-align: left;
        
        .g-alert-header {
            position: relative;
            padding: $box-header-padding;
            .g-alert-title {
                font-size: 16px;
                line-height: 1;
                color: $color-title;
            }
            .g-alert-close {
                position: absolute;
                cursor: pointer;
                top: 15px;
                right: 15px;
                font-size: 12px;
                color: $color-close;
                &:hover {
                    color: $primary-color;
                }
            }
        }
        .g-alert-content {
            padding: $box-content-padding;
            color: $color-content;
            font-size: 12px;
            word-break: break-all;
        }
        .g-alert-btns {
            padding: $box-btns-padding;
            text-align: right;
        }
    }

    .g-alert-curtain {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
    }

    .g-alert-box {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        &:after {
            content: '';
            display: inline-block;
            height: 100%;
            width: 0;
            vertical-align: middle;
        }
    }
</style>