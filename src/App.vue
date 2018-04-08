<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import header from './components/header.vue';
import list from './components/list.vue';
import movie from './components/movie.vue';
import series from './components/series.vue';
import logIn from './components/logIn.vue';


export default {
    components: {
        'app-header': header,
        'list': list,
        'movie': movie,
        'series': series,
        'logIn': logIn,
    },

    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang='scss'>
@import '../node_modules/normalize.css/normalize.css'; 
@import 'assets/scss/_variables'; 

// general
html {
    box-sizing: border-box;}

*, *:before, *:after {
    box-sizing: inherit;}

html,
body {
    color: $color_text;
    font-family: $main_font;
    background: $color_bg--darken;
    height: 100%;
}

figure,
figcaption {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color:inherit;
}

input {
    padding: 0 ;
    color: $color_text;
    font-size: 16px;
    border: 0;
    background: transparent;
    outline: 0;
    &::placeholder {
        color: $color_text;
        font-size: 14px;
    }
}

// buttons
button {
    background: transparent;
    border: 0;
    outline: none;
    color: inherit;
    cursor: pointer;
}

.btn {
    background: $color-bg;
    padding: 15px 10px;
    border-radius: 50px;
        &--main {
        margin: 20px 0;
        font-size: 16px;
        font-weight: 400;
        transition: 0.5s;
        &:hover {
            background: $color_bg--darken
        }
    }
}

//able to horizontal scroll in menu
.scroll {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; 
    &::-webkit-scrollbar {
        display: none; 
    }
    input[type="radio"] {
        display: none;
    }
    input[type="radio"]:checked+label {
        color: $color_main;
        border-bottom: 2px solid $color_main;
    }
}

// --mobil--
@media screen and (max-width: 700px) {
    .scroll {
        justify-content: flex-start;
    }
}

//category menu
.menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    &--center {
        justify-content: center;
    }
    &_item {
        font-size: 16px;
        padding: 15px;
        display: inline-block;
        transition: .2s;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:hover {
            color: $color_main;
            border-bottom: 2px solid $color_main;
        }
    }
}

//footer
.footer {
    padding: 10px;
    font-size: 10px;
    text-align: center;
    color: rgba($color_text, .2)
}

</style>