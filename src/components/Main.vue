<template>
    <div id="main">
        <controls></controls>
        <router-view></router-view>
    </div>
</template>

<script>
import Controls from './Controls';

export default {
    name: 'Main',
    components: {
        controls: Controls
    }
}
</script>

<style lang="scss" scoped>
    #main {
        display: grid;
        grid-template-columns: 10% auto;
    }

</style>