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
            <g-button-group>
                <span>212</span>
                <g-button type="success">success1</g-button>
            </g-button-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'demo',
}
</script>