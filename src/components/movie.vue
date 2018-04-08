<template> <div>
    <!--    app header   -->
    <app-header></app-header>
    <single-page>
        <!--    FILM HEADER   -->
        <div class="img_wrapper" v-bind:style="{ backgroundImage: 'url(' + movieBackground + ')' }" slot="film-header"> <!--image section-->
            <div class="title_container">
                <!--icons-->
                <router-link to="/list" exact class="single_back">
                    <img class="svg" src="../assets/img/svg/arrow.svg" alt="">
                </router-link>
                <div class="single_play">
                    <img src="../assets/img/svg/play.svg" alt="">
                </div>
                <!--title section-->
                <div class="title_content">

                    <div class="title">
                        <div class="title_cat">Movie 
                            <span>2017</span>
                        </div>
                        <div class="title_name">Beauty and The Beast</div>
                        <div class="title_tag">drama, romantic - 2h</div>

                        <div class="title_like">
                            <button v-on:click.once="increaseLikes">
                                <img class="svg like_heart" v-bind:src="heart" alt="">
                            </button>
                            <p> <span class="like_number"> {{counter}} </span>  likes</p>
                        </div>
                    </div>
                    <div class="title_badge">7.3 <span>/ 10</span></div>
                </div><!-- END title section-->
            </div><!-- END title container-->
        </div> <!-- END img wrapper-->
        <!--    END FILM HEADER   -->

        <!--    FILM TABLES (GALLLERY, CASTING, EPISODES)   -->
        <div class="tabs" slot="film-tabs">
            <ul class="tabs_menu menu--center"><!-- menu-->
                <li>
                    <button v-on:click="gallery" class="tabs_menu_item" v-bind:class="{active:galleryShow}" >
                        <img class="svg" src="../assets/img/svg/image.svg" alt="">
                        <span>Pictures</span>
                    </button>
                </li>

                <li>
                    <button v-on:click="casting" class="tabs_menu_item" v-bind:class="{active:castingShow}">
                        <img class="svg" src="../assets/img/svg/avatar.svg" alt="">
                        <span>Casting</span> 
                    </button>
                </li>
            </ul>

            <!-- tab content - gallery-->
            <div class="content_gallery tab_content" id="gallery" v-if= "galleryShow"> <!-- menu - gallery -->
                <img src="../assets/img/gallery/bb01.jpg" alt="">
                <img src="../assets/img/gallery/bb02.jpg" alt="">
                <img src="../assets/img/gallery/bb03.jpg" alt="">
                <img src="../assets/img/gallery/bb04.jpg" alt="">
            </div>

            <!-- tab content - casting-->
            <div class="content_casting tab_content" id="casting" v-if= "castingShow"> <!-- menu - casting -->
                <div class="casting_item">
                    <img src="../assets/img/casting/dan.jpg" alt="">
                    <div class="casting_name">
                        <h1> Dan Stevens </h1>
                        <p> Beast </p>
                    </div>
                </div>

                <div class="casting_item">
                    <img src="../assets/img/casting/emma.jpg" alt="">
                    <div class="casting_name">
                        <h1> Emma Watson </h1>
                        <p> Belle </p>
                    </div>
                </div>

                <div class="casting_item">
                    <img src="../assets/img/casting/luke.jpg" alt="">
                    <div class="casting_name">
                        <h1> Luke Evans </h1>
                        <p> Gaston </p>
                    </div>
                </div>
            </div><!-- END tab content - casting-->
        </div><!-- END tab content-->
        <!--    END FILM TABLES (GALLLERY, CASTING, EPISODES)   -->
    </single-page>
</div> </template>

<script>
// Imports
import header from '../components/header.vue';
import singlePage from '../components/singlePage.vue';


export default {
    components: {
        'app-header': header,
        'single-page': singlePage,
    },

    data () {
        return {
            movieBackground: require('../assets/img/beauty.jpg'),
            counter: 0, //likes counter
            heart: require('../assets/img/svg/heart.svg'), //likes heart
            heartCover: require('../assets/img/svg/heartCover.svg'),

            galleryShow: true, // toggle tables with gallery and casting
            castingShow: false,
        }
    },

    methods: {
        //likes counter
		increaseLikes() {
            this.counter ++;
            this.heart = this.heartCover;
        },
        // toggle tables with gallery and casting
        gallery() {
            this.galleryShow = true;
            this.castingShow = false;
        },

        casting() {
            this.galleryShow = false;
            this.castingShow = true;
	  	},
	},

    computed: {
        
    },
    
}
</script>

<style lang='scss' scoped>
// Imports
@import '../assets/scss/_variables';


// icon back
.single_back {
    z-index: 10;
    grid-area: back;
    align-self: center;
    padding: 0 5%;
    .svg {
        height: 30px;
    }
}
</style>
