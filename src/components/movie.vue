<template> <div>
    <!--    app header   -->
    <app-header></app-header>
    <single-page>
        <!--    FILM HEADER   -->
        <div class="img_wrapper" v-bind:style="{ backgroundImage: 'url(' + movieBackground + ')' }" slot="film-header"> <!--image section-->
            <div class="title_container">
                <!--icons-->
                <router-link to="/list" exact class="single_back">
                   <i class="material-icons">arrow_back</i>
                </router-link>
               
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
        <v-tabs icons-and-text centered dark color="transparent"  slot="film-tabs">
            <v-tabs-slider class="color_main"></v-tabs-slider>

            <v-tab href="#tab-2">
                Pictures
                <v-icon>crop_original</v-icon>
            </v-tab>
            <v-tab href="#tab-3">
                Casting
                <v-icon>person</v-icon>
            </v-tab>

            <!--    GALLERY TAB   -->
            <v-tab-item class="tab_item"  :id="'tab-2'" >
                <v-card flat>
                    <v-card-text >
                        <div class="content_gallery"> <!-- menu - gallery -->
                            <img src="../assets/img/gallery/bb01.jpg" alt="">
                            <img src="../assets/img/gallery/bb02.jpg" alt="">
                            <img src="../assets/img/gallery/bb03.jpg" alt="">
                            <img src="../assets/img/gallery/bb04.jpg" alt="">
                        </div>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <!--    CASTING TAB   -->
            <v-tab-item class="tab_item"  :id="'tab-3'">
                <v-card flat>
                    <v-card-text>
                        <div class="content_casting"> <!-- menu - casting -->
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

                    </v-card-text>
                </v-card>
            </v-tab-item>
            

            
        </v-tabs><!-- END tab content-->
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
@import '../assets/scss/_singlepage';


</style>
