<template>
    <div id="controls">
        <ul>
            <router-link tag="li" to="/">Circles</router-link>
            <router-link tag="li" to="/list">List</router-link>
            <router-link tag="li" to="/maps">Map</router-link>
            <router-link tag="li" to="/user">User</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Controls',
}
</script>

<style lang="scss" scoped>
    #controls {
        background-color: $text-color;
        color: $background-color;
        height: 100%;
    }

</style>