<template>
    <div class="content">
        <!--    FILM HEADER   -->
        <slot name="film-header"></slot>

        <div class="single_content">
            <!--    synopsis    -->
            <div class="content_synopsis">
                <h2 class="synopsis_title">Synopsis</h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Suspendisse nisl. Etiam neque. Pellentesque sapien. Etiam commodo dui eget wisi. Proin in tellus sit amet nibh dignissim sagittis. Etiam quis quam. Aliquam in lorem sit amet leo accumsan lacinia.
            </div>
            <!--    FILM TABS MENU  -->
            <slot name="film-tabs"></slot>
            <!--    recommended films   -->
            <div class="recommended_wrapper"><!-- recommended seciton -->

                <div class="recommended"><!-- recommended titles -->
                    <h2 class="recommended_title">People who liked this</h2>
                    <h3 class="recommended_subtitle">Also liked:</h3>
                </div>

                <div class="recommended_items"><!-- recommended items -->

                   <div v-for="film in recomendFilms" class="item">
                        <router-link v-bind:to="film.link" exact>            
                            <figure class="item_content">
                                <img class="item_img" v-bind:src="film.img" alt="">
                                <figcaption class="item_hover">
                                    <img class="item_hover_ico" src="../assets/img/svg/plus.svg" alt="">
                                </figcaption>           
                            </figure>
                        </router-link>
                        <h1 class="item_name">{{film.title}}</h1>
                        <small class="item_tag" >{{film.category}}</small>
                    </div>

                </div><!-- END recommended items -->
            </div><!-- EDN recommended seciton -->
            <aside class="footer">
                Photo © IMDb
            </aside>
        </div> <!-- EDN single page content -->
    </div><!-- EDN content --> 
</template>

<script>
// Imports

class MovieItem {
    constructor ( img, link, title, category ) {
        this.img = img;
        this.link = link;
        this.title = title;
        this.category = category;
    }
}

// links store
var movieLink = '/movie';
var seriesLink = '/series';

export default {
    data () {
        return {
            galleryShow: true,
            castingShow: false,

            films: [
                new MovieItem (
                    require('../assets/img/posters/3.jpg'),
                    movieLink, 
                    '3%',
                    'sci-fi',
                ),
                new MovieItem (
                    require('../assets/img/posters/100.jpg'), 
                    seriesLink,
                    'The 100',
                    'sci-fi',
                ),
                new MovieItem (
                    require('../assets/img/posters/arrival.jpg'), 
                    movieLink, 
                    'Arrival',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/beauty_and_beast.jpg'), 
                    movieLink, 
                    'Beauty and the Beast',
                    'romantic',
                ),
                new MovieItem (
                    require('../assets/img/posters/best_offer.jpg'), 
                    movieLink,
                    'The Best Offer',
                    'romantic',
                ),
                new MovieItem (
                    require('../assets/img/posters/black_mirror.jpg'), 
                    seriesLink,
                    'Black Mirror',
                    'sci-fi',
                ),
                new MovieItem (
                    require('../assets/img/posters/breaking_bad.jpg'), 
                    seriesLink,
                    'Breaking Bad',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/dark.jpg'), 
                    seriesLink,
                    'Dark',
                    'mystery',
                ),
                new MovieItem (
                    require('../assets/img/posters/dexter.jpg'), 
                    seriesLink,
                    'Dexter',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/guardians.jpg'), 
                    movieLink,
                    'Guardians of the Galaxy Vol. 2',
                    'sci-fi',
                ),
                new MovieItem (
                    require('../assets/img/posters/hacksaw_ridge.jpg'), 
                    movieLink,
                    'Hacksaw Ridge',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/hangover.jpg'), 
                    movieLink,
                    'The Hangover',
                    'comady',
                ),
                new MovieItem (
                    require('../assets/img/posters/house.jpg'), 
                    seriesLink,
                    'House M.D.',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/houseofcards.jpg'), 
                    seriesLink,
                    'House of Cards',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/ides.jpg'), 
                    movieLink,
                    'The Ides of March',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/imitation_game.jpg'), 
                    movieLink,
                    'The Imitation Game',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/jigsaw.jpg'), 
                    movieLink,
                    'Jigsaw',
                    'horror',
                ),
                new MovieItem (
                    require('../assets/img/posters/jurassic_world.jpg'), 
                    movieLink,
                    'Jurassic World',
                    'action',
                ),
                new MovieItem (
                    require('../assets/img/posters/life.jpg'), 
                    movieLink,
                    'Life',
                    'horror',
                ),
                new MovieItem (
                    require('../assets/img/posters/little_prince.jpg'), 
                    movieLink,
                    'The Little Prince',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/mindhunter.jpg'), 
                    seriesLink,
                    'Mindhunter',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/narcos.jpg'), 
                    seriesLink,
                    'Narcos',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/never_let_me_go.jpg'), 
                    movieLink,
                    'Never Let Me Go',
                    'romantic',
                ),
                new MovieItem (
                    require('../assets/img/posters/oa.jpg'), 
                    seriesLink,
                    'The OA',
                    'mystery',
                ),
                new MovieItem (
                    require('../assets/img/posters/sherlock.jpg'), 
                    seriesLink,
                    'Sherlock',
                    'drama',
                ),
                new MovieItem (
                    require('../assets/img/posters/star_wars.jpg'), 
                    movieLink,
                    'Star Wars: The Last Jedi',
                    'action',
                ),
                new MovieItem (
                    require('../assets/img/posters/stranger_things.jpg'), 
                    seriesLink,
                    'Stranger Things',
                    'horror',
                ),
                new MovieItem (
                    require('../assets/img/posters/valerian.jpg'), 
                    movieLink,
                    'Valerian and the City of a Thousand Planets',
                    'sci-fi',
                ),
                new MovieItem (
                    require('../assets/img/posters/zootopia.jpg'), 
                    movieLink,
                    'Zootopia',
                    'comady',
                ),
            ],
        }
    },

    methods: {

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

        recomendFilms:  function() {
            return this.films.slice(8,12) 
        },
    },

}
</script>

<style lang='scss' scoped>
// Imports
@import '../assets/scss/_variables';

//image background
.img_wrapper {
    position: relative;
    height: 400px;
    background-size: cover;
    background-position-y: 20%;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, rgba($color_bg--darken,0) 0%,rgba($color_bg--darken,0) 40%,rgba($color_bg--darken,1) 90%);
    }
}

.title_container {
    position: relative;
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 2fr 1fr;
    grid-template-areas:  
        "back"
        "play"
        "title";
}

// play icon
.single_play {
    grid-area: play;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        height: 50px;
    }
}

// TITLE CONTENT
.title_content {
    grid-area: title;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
}

// --mobil--
@media screen and (max-width: 700px) {

  .title_content {
    flex-direction: column;
    align-items: left;
  }

}

// category
.title_cat {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $color_main;
    span {
        color: $color_text;
    }
}

.title_name {
    margin: 10px 0;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
}

.title_tag {
    font-size: 14px;
}

.title_like {
    font-size: 14px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100px;
    .svg {
        width: 25px;
        margin-right: 10px;
    }
    button {
        background: transparent;
        padding: 0;
        outline: none;
        border: 0;
        &:hover .svg path {
        transition: .2s;
        fill: $color_main;
        }
    }
}
// film score
.title_badge {
    font-size: 30px;
    font-weight: 700;
    min-width: 80px;
    padding: 8px 12px;
    color: $color_main;
    border: 2px solid $color_main;
    border-radius: 50px;
    span {
        font-size: .9rem;
        font-weight: 400;
        color: rgba($color_text, .5);
    }
}
// --mobil--
@media screen and (max-width: 700px) {

    .title_badge {
        margin-top: 10px;
    }

}
// ITEM CONTENT
.single_content {
    max-width: 1170px;
    margin: 0 auto;
}

.content_synopsis {
    grid-area: content;
    margin-top: 50px;
    padding: 5%;
    background: $color_text;
    color: $color_bg--darken;
    font-size: 16px;
    line-height: 1.4em;
}

.synopsis_title {
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
}

// tabs menu
.menu--center {
    justify-content: center;
}
.tabs {
    grid-area: content;
    &_menu {
        list-style: none;
        margin: 0;
        padding: 5% 5% 2% 5%;
        display: flex;
        &_item {
            font-size: 16px;
            padding: 10px;
            display: flex;
            align-items: center;
            transition: .2s;
            &:hover {
                background: $color_main;
            }
            .svg {
                height: 20px;
                width: auto;
                margin-right: 10px;
            }
        }
    }
}
// active tab
.active  {
    background: $color_main;
}
// gallery
.content_gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 5px;
    grid-auto-rows: auto;
    img {
        width: 100%;
    }
}
// casting
.content_casting {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    img {
        max-width: 100%;
        height: auto;
    }
}

.casting_item {
    position: relative;
    .casting_name {
        color: $color_main;
        width: 200px;
        h1 {
            font-size: 40px;
            margin-top: -50px;
            margin-bottom: 0;
        }
        p {
            margin-top: 0;
        }
    }
}

// RECOMMENTDED ITEMS
.recommended_wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "title"
        "items";
    justify-items: center;
    text-align: center;
}

.recommended {
    grid-area: title;
    text-align: center;
    font-size: .6em;
    text-transform: uppercase;
    margin: 20px 0;
    &_subtitle {
        color: rgba($color_text, .5)
    }
}

.recommended_items {
    grid-area: items;
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-gap: 20px;
    grid-auto-rows: auto;
    margin-bottom: 100px; 
}

// --mobil--
@media screen and (max-width: 700px) {

    .recommended_items {
        grid-template-columns: repeat(2, 150px);
        grid-template-rows: repeat(2, auto);
    }

}

@media screen and (max-width: 360px) {

    .recommended_items {
        grid-template-columns: repeat(1, 150px);
        grid-template-rows: auto;
    }

}
// film item
.item {
    height: auto;
    width: 160px;
    margin: 5px;
    &_content {
        position: relative;
        align-self: stretch;
        border-radius: 8px;
        box-shadow: 2px 2px 10px $color_bg--darken;
    }
    &_img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    &_hover {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        border-radius: 8px;
        opacity: 0;
        background: rgba($color_main, .5);
        transition-duration: 0.3s;
        transition-property: opacity;
        &:hover, &:focus, &:active, &:visited  {
            opacity:1
        }
    }
    &_hover_ico {
        height: 30px;
        width: auto;
    }
    &_name {
        font-size: 14px;
        margin-bottom: 0;
    }
    &_tag {
        font-size: 12px;
        color: $color_main;
    }
}
</style>
