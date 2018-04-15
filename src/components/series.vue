<template><div>
    <app-header></app-header>
    <single-page>
        <!--    FILM HEADER   -->
        <div class="img_wrapper" v-bind:style="{ backgroundImage: 'url(' + seriesBackground + ')' }" slot="film-header"> <!--image section-->
            <div class="title_container">
                <!--icons-->
                <router-link to="/list" exact class="single_back">
                   <i class="material-icons">arrow_back</i>
                </router-link>

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
        <v-tabs icons-and-text centered dark color="transparent"  slot="film-tabs">
            <v-tabs-slider class="color_main"></v-tabs-slider>
            <v-tab href="#tab-1">
                Seasons
                <v-icon>filter</v-icon>
            </v-tab>
            <v-tab href="#tab-2">
                Pictures
                <v-icon>crop_original</v-icon>
            </v-tab>
            <v-tab href="#tab-3">
                Casting
                <v-icon>person</v-icon>
            </v-tab>
            
            <!--    SEASONS TAB   -->
            <v-tab-item  :id="'tab-1'">
                <v-card flat>
                    <v-card-text>
                        <!--    EPISODES TABS   -->
                        <v-tabs icons-and-text centered dark color="transparent">
                            <v-tabs-slider color="color_main"></v-tabs-slider>
                            <!--    seasons menu  -->
                            <v-tab v-for="(menu, i) in seasonsMenu" :href="menu.id" :key="i" >
                                {{ menu.name }}
                            </v-tab>
                            <!--    season 01  -->
                            <v-tab-item :id="'season-1'">
                                <v-expansion-panel>
                                    <v-expansion-panel-content class="episode_item" flat v-for="(s1, i) in season01" :key="i" >
                                
                                            <div class="episode_info_wrap" slot="header">
                                                <img v-bind:src="s1.img" alt="">
                                                <div class="episode_info">
                                                    <h3 class="info_title"> <span>{{s1.epNum}}</span> {{s1.epName}} </h3>
                                                    <p class="info_date">{{s1.epDate}}</p>
                                                </div>
                                            </div>
                                    
                                        <v-card>
                                            <v-card-text> 
                                                <div class="video-wrapper" >
                                                <iframe width="853" height="480" v-bind:src="s1.video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>
                            <!--    season 02  -->
                            <v-tab-item :id="'season-2'">
                                <v-expansion-panel>
                                    <v-expansion-panel-content class="episode_item" flat v-for="(s2, i) in season02" :key="i" >
                                
                                            <div class="episode_info_wrap" slot="header">
                                                <img v-bind:src="s2.img" alt="">
                                                <div class="episode_info">
                                                    <h3 class="info_title"> <span>{{s2.epNum}}</span> {{s2.epName}} </h3>
                                                    <p class="info_date">{{s2.epDate}}</p>
                                                </div>
                                            </div>
                                    
                                        <v-card>
                                            <v-card-text> 
                                                
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>
                            <!--    season 03  -->
                            <v-tab-item :id="'season-3'">
                                <v-expansion-panel>
                                    <v-expansion-panel-content class="episode_item" flat v-for="(s3, i) in season03" :key="i" >
                                
                                            <div class="episode_info_wrap" slot="header">
                                                <img v-bind:src="s3.img" alt="">
                                                <div class="episode_info">
                                                    <h3 class="info_title"> <span>{{s3.epNum}}</span> {{s3.epName}} </h3>
                                                    <p class="info_date">{{s3.epDate}}</p>
                                                </div>
                                            </div>
                                    
                                        <v-card>
                                            <v-card-text> 
                                                
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>
                            <!--    season 04  -->
                            <v-tab-item :id="'season-4'">
                                <v-expansion-panel>
                                    <v-expansion-panel-content class="episode_item" flat v-for="(s4, i) in season04" :key="i" >
                                
                                            <div class="episode_info_wrap" slot="header">
                                                <img v-bind:src="s4.img" alt="">
                                                <div class="episode_info">
                                                    <h3 class="info_title"> <span>{{s4.epNum}}</span> {{s4.epName}} </h3>
                                                    <p class="info_date">{{s4.epDate}}</p>
                                                </div>
                                            </div>
                                    
                                        <v-card>
                                            <v-card-text> 
                                                
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>
                            <!--    season 05  -->
                            <v-tab-item :id="'season-5'">
                                <v-expansion-panel>
                                    <v-expansion-panel-content class="episode_item" flat v-for="(s5, i) in season05" :key="i" >
                                
                                            <div class="episode_info_wrap" slot="header">
                                                <img v-bind:src="s5.img" alt="">
                                                <div class="episode_info">
                                                    <h3 class="info_title"> <span>{{s5.epNum}}</span> {{s5.epName}} </h3>
                                                    <p class="info_date">{{s5.epDate}}</p>
                                                </div>
                                            </div>
                                    
                                        <v-card>
                                            <v-card-text> 
                                                
                                            </v-card-text>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-tab-item>

                        </v-tabs>
                    </v-card-text>
                </v-card>    
            </v-tab-item><!--    END SEASONS TAB   -->
            <!--    GALLERY TAB   -->
            <v-tab-item  :id="'tab-2'" >
                <v-card flat>
                    <v-card-text >
                        <div class="content_gallery"> <!-- menu - gallery -->
                            <img src="../assets/img/gallery/bad1.jpg" alt="">
                            <img src="../assets/img/gallery/bad2.jpg" alt="">
                            <img src="../assets/img/gallery/bad3.jpg" alt="">
                            <img src="../assets/img/gallery/bad4.jpg" alt="">
                        </div>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <!--    CASTING TAB   -->
            <v-tab-item  :id="'tab-3'">
                <v-card flat>
                    <v-card-text>
                        <div class="content_casting"> 
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

                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
        <!--    END FILM TABLES (GALLLERY, CASTING, EPISODES)   -->
    </single-page>
</div></template>

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
            seriesBackground: require('../assets/img/bad.jpg'),
            counter: 0, //likes counter
            heart: require('../assets/img/svg/heart.svg'), //likes heart
            heartCover: require('../assets/img/svg/heartCover.svg'),

            seasonsMenu: [
                { name: "season 1", id: "#season-1"},
                { name: "season 2", id: "#season-2"},
                { name: "season 3", id: "#season-3"},
                { name: "season 4", id: "#season-4"},
                { name: "season 5", id: "#season-5"},     
            ],

            season01: [
                {   
                    img:    require('../assets/img/ep/e01.jpg'), 
                    epNum:  'Ep01', 
                    epName: 'Pilot', 
                    epDate: '20 Jan. 2008',
                    video:  'https://www.youtube.com/embed/HhesaQXLuRY?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e02.jpg'),
                    epNum:  'Ep02', 
                    epName: "Cat's in the Bag...",
                    epDate: '27 Jan. 2008',
                    video:  'https://www.youtube.com/embed/E5UMjqSBGJQ?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e03.jpg'),
                    epNum:  'Ep03', 
                    epName: "...And the Bag's in the River",
                    epDate: '10 Feb. 2008',
                    video:  'https://www.youtube.com/embed/EBvuGkqX894?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e04.jpg'),
                    epNum:  'Ep04', 
                    epName: 'Cancer Man',
                    epDate: '17 Feb. 2008',
                    video:  'https://www.youtube.com/embed/ddDIiNKGaXA?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e05.jpg'),
                    epNum:  'Ep05', 
                    epName: 'Gray Matter',
                    epDate: '24 Feb. 2008',
                    video:  'https://www.youtube.com/embed/Nv6ofp2bBuY?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e06.jpg'),
                    epNum:  'Ep06', 
                    epName: "Crazy Handful of Nothin'",
                    epDate: '2 Mar. 2008',
                    video:  'https://www.youtube.com/embed/pXYCgw-idGY?rel=0',
                },
                {
                    img:    require('../assets/img/ep/e07.jpg'),
                    epNum:  'Ep07', 
                    epName: "A No-Rough-Stuff-Type Deal",
                    epDate: '9 Mar. 2008',
                    video:  'https://www.youtube.com/embed/a5JYlSoMWvI?rel=0',
                },
            ],

            season02: [
                {   
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep01', 
                    epName: 'Seven Thirty-Seven',
                    epDate: '8 Mar. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep02', 
                    epName: "Grilled",
                    epDate: '15 Mar. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep03', 
                    epName: "Bit by a Dead Bee",
                    epDate: '22 Mar. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep04', 
                    epName: 'Down',
                    epDate: '29 Mar. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep05', 
                    epName: 'Breakage',
                    epDate: '5 Apr. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep06', 
                    epName: "Peekaboo",
                    epDate: '12 Apr. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep07', 
                    epName: "Negro Y Azul",
                    epDate: '19 Apr. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep08', 
                    epName: "Better Call Saul",
                    epDate: '26 Apr. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep09', 
                    epName: "4 Days Out",
                    epDate: '3 May 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep10', 
                    epName: "Over",
                    epDate: '10 May 2009',                
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep11', 
                    epName: "Mandala",
                    epDate: '17 May 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep12', 
                    epName: "Phoenix",
                    epDate: '24 May 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep13', 
                    epName: "ABQ",
                    epDate: '31 May 2009',
                },
            ],

            season03: [

                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep01', 
                    epName: 'No Más',
                    epDate: '21 Mar. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep02', 
                    epName: "Caballo sin Nombre",
                    epDate: '28 Mar. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep03', 
                    epName: "Bit by a Dead Bee",
                    epDate: '22 Mar. 2009',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep04', 
                    epName: 'Green Light',
                    epDate: '11 Apr. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep05', 
                    epName: 'Más',
                    epDate: '18 Apr. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep06', 
                    epName: "Sunset",
                    epDate: '25 Apr. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep07', 
                    epName: "One Minute",
                    epDate: '2 May 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep08', 
                    epName: "I See You",
                    epDate: '9 May 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep09', 
                    epName: "Kafkaesque",
                    epDate: '16 May 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep10', 
                    epName: "Fly",
                    epDate: '23 May 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep11', 
                    epName: "Abiquiu",
                    epDate: '23 May 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep12', 
                    epName: "Half Measures",
                    epDate: '6 Jun. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep13', 
                    epName: "Full Measure",
                    epDate: '13 Jun. 2010',
                },
            ],

            season04: [
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep01', 
                    epName: 'Box Cutter',
                    epDate: '17 Jul. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep02', 
                    epName: "Thirty-Eight Snub",
                    epDate: '24 Jul. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep03', 
                    epName: "Open House",
                    epDate: '31 Jul. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep04', 
                    epName: 'Bullet Points',
                    epDate: '7 Aug. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep05', 
                    epName: 'Shotgun',
                    epDate: '14 Aug. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep06', 
                    epName: "Cornered",
                    epDate: '21 Aug. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep07', 
                    epName: "Problem Dog",
                    epDate: '28 Aug. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep08', 
                    epName: "Hermanos",
                    epDate: '4 Sep. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep09', 
                    epName: "Bug",
                    epDate: '11 Sep. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep10', 
                    epName: "Salud",
                    epDate: '18 Sep. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep11', 
                    epName: "Crawl Space",
                    epDate: '25 Sep. 2011',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep12', 
                    epName: "Half Measures",
                    epDate: '6 Jun. 2010',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep13', 
                    epName: "End Times",
                    epDate: '2 Oct. 2011',
                },
            ],

            season05: [
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep01', 
                    epName: 'Live Free or Die',
                    epDate: '15 Jul. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep02', 
                    epName: "Madrigal",
                    epDate: '22 Jul. 2012',
                },
                { 
                    img:     require('../assets/img/ep/epImage.jpg'),
                    epNum:   'Ep03', 
                    epName:  "Hazard Pay",
                    epDate:  '29 Jul. 2012',
                },
                { 
                    img:     require('../assets/img/ep/epImage.jpg'),
                    epNum:   'Ep04', 
                    epName:  'Fifty-One',
                    epDate:  '5 Aug. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep05', 
                    epName: 'Dead Freight',
                    epDate: '12 Aug. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep06', 
                    epName: "Buyout",
                    epDate: '19 Aug. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep07', 
                    epName: "Say My Name",
                    epDate: '26 Aug. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep08', 
                    epName: "Gliding Over All",
                    epDate: '2 Sep. 2012',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep09', 
                    epName: "Blood Money",
                    epDate: '11 Aug. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep10', 
                    epName: "Buried",
                    epDate: '18 Aug. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep11', 
                    epName: "Confessions",
                    epDate: '25 Aug. 2013',    
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep12', 
                    epName: "Rabid Dog",
                    epDate: '1 Sep. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep13', 
                    epName: "To'hajiilee",
                    epDate: '8 Sep. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep14', 
                    epName: "Ozymandias",
                    epDate: '15 Sep. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep15', 
                    epName: "Granite State",
                    epDate: '22 Sep. 2013',
                },
                { 
                    img:    require('../assets/img/ep/epImage.jpg'),
                    epNum:  'Ep16', 
                    epName: "Felina",
                    epDate: '29 Sep. 2013',
                },
                
                
                
            ],

        }
    },

    methods: {
        //likes counter
		increaseLikes() {
            this.counter ++;
            this.heart = this.heartCover;
        },   
	},

    
}
</script>

<style lang='scss' scoped>
// Imports
@import '../assets/scss/_variables';
@import '../assets/scss/_singlepage';


</style>
