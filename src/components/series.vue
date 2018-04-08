<template>
    <div>
        <app-header></app-header>
        <single-page>
            <!--    FILM HEADER   -->
            <div class="img_wrapper" v-bind:style="{ backgroundImage: 'url(' + seriesBackground + ')' }" slot="film-header"> <!--image section-->
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
                            <div class="title_cat">TV series 
                                <span>2008-2013</span>
                            </div>
                            <div class="title_name">Breaking bad</div>
                            <div class="title_tag">drama - 62x49min</div>

                            <div class="title_like">
                                <button v-on:click.once="increaseLikes">
                                    <img class="svg like_heart" v-bind:src="heart" alt="">
                                </button>
                                <p> <span class="like_number"> {{counter}} </span>  likes</p>
                            </div>
                        </div>
                        <div class="title_badge">9.5 <span>/ 10</span></div>
                    </div><!-- END title section-->
                </div><!-- END title container-->
            </div> <!-- END img wrapper-->
            <!--    END FILM HEADER   -->

            <!--    FILM TABLES (GALLLERY, CASTING, EPISODES)   -->
            <div class="tabs" slot="film-tabs">
                <ul class="tabs_menu menu--center"><!-- menu-->
                    <li>
                        <button v-on:click="episodesSet" class="tabs_menu_item" v-bind:class="{active:seasonsShow}" >
                            <img class="svg" src="../assets/img/svg/image.svg" alt="">
                            <span>Seasons</span>
                        </button>
                    </li>
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

                <div class="tab_content" id="seasons" v-if= "seasonsShow"><!-- tab content - seasons -->

                    <div class="menu menu--center scroll"><!-- seasons menu -->
                        <div v-for="tab in tabs">
                            <input  v-model="selectedSeasons" type="radio" v-bind:id="tab.name" name="tabs" v-bind:value="tab.name">
                            <label class="menu_item" v-bind:for="tab.name">{{tab.name}}</label>
                        </div>
                    </div>

                    <div class="content_episodes_w " id="season1"><!-- episode menu -->
                        <ul class="content_episodes"><!-- list of episodes -->

                            <li class="episode_item" v-for="season in filteredSeasons">
                                <div class="episode_info_wrap">
                                    <img v-bind:src="season.img" alt="">
                                    <div class="episode_info">
                                        <h3 class="info_title"> <span>{{season.epNum}}</span> {{season.epName}} </h3>
                                        <p class="info_date">{{season.epDate}}</p>
                                    </div>
                                </div>
                                <button class="video-show" v-on:click="videoShow = !videoShow">
                                    Toggle
                                </button>
                                <p class="video-play" v-if="videoShow">{{season.epName}}</p>
                            </li>

                        </ul><!-- END list of episodes -->
                    </div><!-- END list of episodes wrapper-->

                </div><!-- END tab content - seasons -->

                <!-- tab content - gallery-->
                <div class="content_gallery tab_content" id="gallery" v-if="galleryShow"> <!-- menu - gallery -->
                    <img src="../assets/img/gallery/bad1.jpg" alt="">
                    <img src="../assets/img/gallery/bad2.jpg" alt="">
                    <img src="../assets/img/gallery/bad3.jpg" alt="">
                    <img src="../assets/img/gallery/bad4.jpg" alt="">
                </div>

                <!-- tab content - casting-->
                <div class="content_casting tab_content" id="casting" v-if="castingShow"> <!-- menu - casting -->
                    <div class="casting_item">
                        <img src="../assets/img/casting/bryan.jpg" alt="">
                        <div class="casting_name">
                            <h1> Bryan Cranston </h1>
                            <p> Walter White </p>
                        </div>
                    </div>

                    <div class="casting_item">
                        <img src="../assets/img/casting/aaron.jpg" alt="">
                        <div class="casting_name">
                            <h1> Aaron Paul </h1>
                            <p> Jesse Pinkman </p>
                        </div>
                    </div>

                    <div class="casting_item">
                        <img src="../assets/img/casting/dean.jpg" alt="">
                        <div class="casting_name">
                            <h1> Dean Norris </h1>
                            <p> Hank Schrader </p>
                        </div>
                    </div>

                    <div class="casting_item">
                        <img src="../assets/img/casting/anna.jpg" alt="">
                        <div class="casting_name">
                            <h1> Anna Gunn </h1>
                            <p> Skyler White </p>
                        </div>
                    </div>
                </div><!-- END tab content - casting-->
            </div><!-- END tab content-->
            <!--    END FILM TABLES (GALLLERY, CASTING, EPISODES)   -->
        </single-page>
    </div> 
</template>

<script>
// Imports
import header from '../components/header.vue';
import singlePage from '../components/singlePage.vue';


class episodeItem {
    constructor ( img, epNum, epName, epDate, category ) {
        this.img = img;
        this.epNum = epNum;
        this.epName = epName;
        this.epDate = epDate;
        this.category = category;
    }
}

export default {
    components: {
        'app-header': header,
        'single-page': singlePage,
    },

    data () {
        return {
            seriesBackground: require('../assets/img/bad.jpg'),
            counter: 0, //likes counter
            heart: require('../assets/img/svg/heart.svg'), //likes heart
            heartCover: require('../assets/img/svg/heartCover.svg'),

            galleryShow: false, // toggle tables with gallery, casting, seasons
            castingShow: false,
            seasonsShow: true,
            videoShow: false,

            tabs: [
                { name: "seasons 1"},
                { name: "seasons 2"},
                { name: "seasons 3"},
                { name: "seasons 4"},
                { name: "seasons 5"},     
            ],

            seasons: [
                //seasons 1
                new episodeItem (
                    require('../assets/img/ep/e01.jpg'),
                    'Ep01', 
                    'Pilot',
                    '20 Jan. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e02.jpg'),
                    'Ep02', 
                    "Cat's in the Bag...",
                    '27 Jan. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e03.jpg'),
                    'Ep03', 
                    "...And the Bag's in the River",
                    '10 Feb. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e04.jpg'),
                    'Ep04', 
                    'Cancer Man',
                    '17 Feb. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e05.jpg'),
                    'Ep05', 
                    'Gray Matter',
                    '24 Feb. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e06.jpg'),
                    'Ep06', 
                    "Crazy Handful of Nothin'",
                    '2 Mar. 2008',
                    'seasons 1',
                ),
                new episodeItem (
                    require('../assets/img/ep/e07.jpg'),
                    'Ep07', 
                    "A No-Rough-Stuff-Type Deal",
                    '9 Mar. 2008',
                    'seasons 1',
                ),
                //seasons 2
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep01', 
                    'Seven Thirty-Seven',
                    '8 Mar. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep02', 
                    "Grilled",
                    '15 Mar. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep03', 
                    "Bit by a Dead Bee",
                    '22 Mar. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep04', 
                    'Down',
                    '29 Mar. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep05', 
                    'Breakage',
                    '5 Apr. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep06', 
                    "Peekaboo",
                    '12 Apr. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep07', 
                    "Negro Y Azul",
                    '19 Apr. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep08', 
                    "Better Call Saul",
                    '26 Apr. 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep09', 
                    "4 Days Out",
                    '3 May 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep10', 
                    "Over",
                    '10 May 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep11', 
                    "Mandala",
                    '17 May 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep12', 
                    "Phoenix",
                    '24 May 2009',
                    'seasons 2',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep13', 
                    "ABQ",
                    '31 May 2009',
                    'seasons 2',
                ),
                //seasons 3
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep01', 
                    'No Más',
                    '21 Mar. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep02', 
                    "Caballo sin Nombre",
                    '28 Mar. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep03', 
                    "Bit by a Dead Bee",
                    '22 Mar. 2009',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep04', 
                    'Green Light',
                    '11 Apr. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep05', 
                    'Más',
                    '18 Apr. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep06', 
                    "Sunset",
                    '25 Apr. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep07', 
                    "One Minute",
                    '2 May 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep08', 
                    "I See You",
                    '9 May 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep09', 
                    "Kafkaesque",
                    '16 May 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep10', 
                    "Fly",
                    '23 May 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep11', 
                    "Abiquiu",
                    '23 May 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep12', 
                    "Half Measures",
                    '6 Jun. 2010',
                    'seasons 3',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep13', 
                    "Full Measure",
                    '13 Jun. 2010',
                    'seasons 3',
                ),
                //seasons 4
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep01', 
                    'Box Cutter',
                    '17 Jul. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep02', 
                    "Thirty-Eight Snub",
                    '24 Jul. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep03', 
                    "Open House",
                    '31 Jul. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep04', 
                    'Bullet Points',
                    '7 Aug. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep05', 
                    'Shotgun',
                    '14 Aug. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep06', 
                    "Cornered",
                    '21 Aug. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep07', 
                    "Problem Dog",
                    '28 Aug. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep08', 
                    "Hermanos",
                    '4 Sep. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep09', 
                    "Bug",
                    '11 Sep. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep10', 
                    "Salud",
                    '18 Sep. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep11', 
                    "Crawl Space",
                    '25 Sep. 2011',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep12', 
                    "Half Measures",
                    '6 Jun. 2010',
                    'seasons 4',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep13', 
                    "End Times",
                    '2 Oct. 2011',
                    'seasons 4',
                ),
                //seasons 5
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep01', 
                    'Live Free or Die',
                    '15 Jul. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep02', 
                    "Madrigal",
                    '22 Jul. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep03', 
                    "Hazard Pay",
                    '29 Jul. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep04', 
                    'Fifty-One',
                    '5 Aug. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep05', 
                    'Dead Freight',
                    '12 Aug. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep06', 
                    "Buyout",
                    '19 Aug. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep07', 
                    "Say My Name",
                    '26 Aug. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep08', 
                    "Gliding Over All",
                    '2 Sep. 2012',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep09', 
                    "Blood Money",
                    '11 Aug. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep10', 
                    "Buried",
                    '18 Aug. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep11', 
                    "Confessions",
                    '25 Aug. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep12', 
                    "Rabid Dog",
                    '1 Sep. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep13', 
                    "To'hajiilee",
                    '8 Sep. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep14', 
                    "Ozymandias",
                    '15 Sep. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep15', 
                    "Granite State",
                    '22 Sep. 2013',
                    'seasons 5',
                ),
                new episodeItem (
                    require('../assets/img/ep/epImage.jpg'),
                    'Ep16', 
                    "Felina",
                    '29 Sep. 2013',
                    'seasons 5',
                ),
                
                
                
            ],
            selectedSeasons: "seasons 1"
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
            this.seasonsShow = false;
        },

        casting() {
            this.galleryShow = false;
            this.castingShow = true;
            this.seasonsShow = false;
          },
          
        episodesSet() {
            this.galleryShow = false;
            this.castingShow = false;
            this.seasonsShow = true;
          },
          
          videoShow() {
            this.galleryShow = false;
            this.castingShow = false;
            this.seasonsShow = true;
	  	},
	},

    computed: {
        filteredSeasons: function() {

            var app = this;
            var category = app.selectedSeasons; 

            return app.seasons.filter(function(season) {
                return season.category == category;
            });
           
        },
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
// episode styles
.content_episodes {
    list-style: none;
    padding: 0;
}

.episode_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "info button";
   // "video video";
   // align-items: center;
    transition: .2s;
    margin: 5px 0;
    img {
        height: 80px;
        width: auto;
    }
    &:hover {
        background: $color-bg;
    }
}

.episode_info_wrap {
    grid-area: info;
    display: flex;
    flex-direction: row;
    align-items: center;
   
}

.video-show {
    grid-area: button;
    justify-self: end;
}


.episode_info {
    margin-left: 20px;
    .info_title {
        margin: 0;
        font-size: 16px;
        text-transform: uppercase;
        span {
        color: rgba($color_text, .3)
        }
    }
    .info_date {
        margin: 10px 0 0 0;
        font-size: 12px;
    }
}

</style>
