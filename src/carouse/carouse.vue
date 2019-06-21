<template>
   <div class="g-carouse"  
        ref="carouse" :style="[{
        height,
    }]">
        <div class="g-carouse-item-box" :style="[
            {
                transform: 'translateX('+ distance +'px)',
            },
            isAnimation ? {
                transition: '.3s ease-in-out'
            } : '',
            
        ]">
            <div class="item3">3</div>
            <div class="item1">1</div>
            <div class="item2">2</div>
            <div class="item3">3</div>
            <div class="item1">1</div>
        </div>
        <g-icon class="left" name="left"></g-icon>
        <g-icon class="right" name="right"></g-icon>
   </div>
</template>

<script>
import Icon from '../icon/icon.vue'
import { clearInterval, setInterval } from 'timers';
export default {
    name: 'g-carouse',
    components: {
        'g-icon': Icon
    },
    props: {
        height: {
            type: String,
            default: '150px'
        },
        duration: { // 轮播时间
            type: Number,
            default: 3000
        }
    },
    data () {
        return {
            // distance: 0,
            currentIndex: 1,
            isAnimation: true,
            carousWidth: null,
            interval: null
        }
    },
    methods: {
        move () {
            this.currentIndex = (this.currentIndex + 1)
            if (this.currentIndex % 4 === 0) {
                this.moveToFirst()
            }
        },
        // 移动到第一个
        moveToFirst () {
            setTimeout(() => {
                this.isAnimation = false
                this.currentIndex = 1
                setTimeout(() => {
                    this.isAnimation = true
                }, 300)
            }, 300)
        }
    },
    computed: {
        distance () {
            return -(this.currentIndex * this.carousWidth)
        },
    },
    mounted () {
        this.carousWidth = this.$el.offsetWidth
        this.interval = setInterval(() => {
            this.move()
        }, this.duration)
        window.onresize = () => {
            this.carousWidth = this.$el.offsetWidth
            clearInterval(this.interval)
            this.isAnimation = false
            this.interval = setInterval(() => {
                this.isAnimation = true
                this.move()
            }, this.duration)
        }
    }
}
</script>

<style lang="scss">
@import '../common/css/var.scss';
.g-carouse {
    // width: 100%;
    overflow: hidden;
    position: relative;
    .g-carouse-item-box {
        width: 500%;
        height: 100%;
        display: flex;
        div {
            flex: 1;
        }
        .item1 {
            background: $primary-color;
        }
        .item2 {
            background: $success-color;
        }
        .item3 {
            background: $warning-color;
        }
    }
    .left {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
        font-size: 24px;
        left: 15px;
        cursor: pointer;
    }
    .right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
        font-size: 24px;
        right: 15px;
        cursor: pointer;
    }

}
</style>
