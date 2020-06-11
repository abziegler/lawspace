<template>
    <div id="spaces-list">
        <p>I am spaces list view</p>
         <ul>
            <router-link tag="li" to="/detail">Circle A</router-link>
            <router-link tag="li" to="/detail">Circle A</router-link>
            <router-link tag="li" to="/detail">Circle A</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SpaceList',
}
</script>

<style lang="scss" scoped>

</style>