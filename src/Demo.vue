<template>
    <div id="demo">
        <div>
            <g-button disabled>disabled</g-button>
            <g-button loading>loading</g-button>
            <g-button type="primary">primary</g-button>
            <g-button type="success">success</g-button>
            <g-button type="warning">warning</g-button>
            <g-button type="danger">danger</g-button>
            <g-button icon="test" type="success">放个图标</g-button>
            <g-button icon="test" type="success"></g-button>
        </div>
        <div>
            <g-button-group>
            </g-button-group>
            <g-button-group>
                <g-button type="success">success</g-button>
                <g-button type="primary">primary</g-button>
                <g-button type="success">success1</g-button>
            </g-button-group>
            <!--<g-button-group>
                <span>212</span>
                <g-button type="success">success1</g-button>
            </g-button-group>-->
        </div>
        <div class="demo-layout">
            <g-row>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
            </g-row>
            <g-row :gutter='20'>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1"><div class="bg-purple-light"></div></g-col>
                <g-col :span="1"><div class="bg-purple" ></div></g-col>
                <g-col :span="1" :offset="2"><div class="bg-purple-light"></div></g-col>
            </g-row>
            <g-row>
                <!-- 响应式布局 屏幕小于575.98px 时 占据 20/24 偏移 4/24-->
                <!-- xs 接收一个对象 所以要用v-bind -->
                <g-col :span="12" :xs="{span: 20, offset: 4}"><div class="bg-purple" ></div></g-col>
            </g-row>
        </div>
        <g-container style="margin-top: 20px">
            <g-header style="text-align: center">头部</g-header>
            <g-main>内容</g-main>
        </g-container>
        <g-container style="margin-top: 20px">
            <g-header style="text-align: center">头部</g-header>
            <g-main>内容</g-main>
            <g-footer style="text-align: center">尾部</g-footer>
        </g-container>
        <g-container style="margin-top: 20px">
            <g-aside style="width: 200px">侧边栏</g-aside>
            <g-main>内容</g-main>
        </g-container>
        <g-container style="margin-top: 20px">
            <g-header style="text-align: center">头部</g-header>
            <g-container>
                <g-aside style="width: 200px">侧边栏</g-aside>
                <g-main>内容</g-main>
            </g-container>
        </g-container>
        <g-container style="margin-top: 20px">
            <g-header style="text-align: center">头部</g-header>
            <g-container>
                <g-aside style="width: 200px">侧边栏</g-aside>
                <g-main>内容</g-main>
            </g-container>
        </g-container>
        <g-container style="margin-top: 20px">
            <g-aside style="width: 200px">侧边栏</g-aside>
            <g-container>
                <g-main>内容</g-main>
                <g-footer style="text-align: center">尾部</g-footer>
            </g-container>
        </g-container>
        <div>
            <g-input></g-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demo',
}
</script>

<style lang="scss">
    .demo-layout .bg-purple {
        background: #d3dce6;
        height: 40px;
    }
    .demo-layout .bg-purple-light {
        background: #e5e9f2;
         height: 40px;
    }
    .demo-layout .g-col {
        border-radius: 4px;
        overflow: hidden;
    }
</style>