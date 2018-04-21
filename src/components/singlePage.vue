<template>
    <div class="moview-content">
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

                    <div class="item" v-for="tvShow in recomendTvShows" :key="tvShow.id">
                        <router-link v-bind:to="tvShow.link" exact>            
                            <figure class="item_content">
                                <img class="item_img" v-bind:src="tvShow.img" alt="">
                                <div class="item_badge">
                                    <span>{{ tvShow.rating }}</span>
                                </div>
                                <figcaption class="item_hover">
                                    <img class="item_hover_ico" src="../assets/img/svg/plus.svg" alt="">
                                </figcaption>           
                            </figure>
                        </router-link>
                        <h1 class="item_name">{{tvShow.name}}</h1>
                    </div>

                </div><!-- END recommended items -->
            </div><!-- EDN recommended seciton -->
            <aside class="movie-footer">
                Photo © IMDb
            </aside>
        </div> <!-- EDN single page content -->
    </div><!-- EDN content --> 
</template>

<script>
// Imports

// links store
var movieLink = '/movie';
var seriesLink = '/series';

export default {
    data () {
        return {
            galleryShow: true,
            castingShow: false,

            films: [
                {   
                    id:         "1",
                    img:        require('../assets/img/posters/3.jpg'),
                    link:       seriesLink,
                    name:       "3%",
                    tvShows:    'TV series', 
                    rating:     '7.6',
                    keywords: [
                        "action",
                        "drama",
                        "sci-fi"
                    ]
                },
                {   
                    id:         "2",
                    img:        require('../assets/img/posters/100.jpg'),
                    link:       seriesLink,
                    name:       "The 100",
                    tvShows:    'TV series', 
                    rating:     '7.8',
                    keywords: [
                        "drama",
                        "mystery",
                        "sci-fi"
                    ]
                },
                {   
                    id:         "3",
                    img:        require('../assets/img/posters/arrival.jpg'),
                    link:       movieLink,
                    name:       "Arrival",
                    tvShows:    'Movies', 
                    rating:     '7.9',
                    keywords: [
                        "drama",
                        "mystery",
                        "sci-fi"
                    ]
                },
                {   
                    id:         "4",
                    img:        require('../assets/img/posters/beauty_and_beast.jpg'),
                    link:       movieLink,
                    name:       "Beauty and the Beast",
                    tvShows:    'Movies', 
                    rating:     '7.2',
                    keywords: [
                        "family",
                        "fantasy",
                        "musical"
                    ]
                },
                {   
                    id:         "5",
                    img:        require('../assets/img/posters/best_offer.jpg'), 
                    link:       movieLink,
                    name:       "The Best Offer",
                    tvShows:    'Movies', 
                    rating:     '7.8',
                    keywords: [
                        "crime",
                        "drama",
                        "mystery"
                    ]
                },
                {   
                    id:         "6",
                    img:        require('../assets/img/posters/black_mirror.jpg'),
                    link:       seriesLink,
                    name:       "Black Mirror",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "drama",
                        "sci-fi",
                        "thriller"
                    ]
                },
                {   
                    id:         "7",
                    img:        require('../assets/img/posters/breaking_bad.jpg'),
                    link:       seriesLink,
                    name:       "Breaking Bad",
                    tvShows:    'TV series', 
                    rating:     '9.5',
                    keywords: [
                        "crime",
                        "drama",
                        "thriller"
                    ]
                },
                {   
                    id:         "8",
                    img:        require('../assets/img/posters/dark.jpg'),
                    link:       seriesLink,
                    name:       "Dark",
                    tvShows:    'TV series', 
                    rating:     '8.7',
                    keywords: [
                        "crime",
                        "drama",
                        "mystery"
                    ]
                },
                {   
                    id:         "9",
                    img:        require('../assets/img/posters/dexter.jpg'),
                    link:       seriesLink,
                    name:       "Dexter",
                    tvShows:    'TV series', 
                    rating:     '8.7',
                    keywords: [
                        "crime",
                        "drama",
                        "mystery"
                    ]
                },
                {   
                    id:         "10",
                    img:        require('../assets/img/posters/guardians.jpg'),
                    link:       movieLink,
                    name:       "Guardians of the Galaxy Vol. 2",
                    tvShows:    'Movies', 
                    rating:     '8.2',
                    keywords: [
                        "action",
                        "adventure",
                        "sci-fi"
                    ]
                },
                {   
                    id:         "11",
                    img:        require('../assets/img/posters/hangover.jpg'),
                    link:       movieLink,
                    name:       "The Hangover",
                    tvShows:    'Movies', 
                    rating:     '7.7',
                    keywords: [
                        "comedy"                       
                    ]
                },
                {   
                    id:         "12",
                    img:        require('../assets/img/posters/house.jpg'),
                    link:       seriesLink,
                    name:       "House M.D.",
                    tvShows:    'TV series', 
                    rating:     '8.8',
                    keywords: [
                        "drama",
                        "mystery"
                    ]
                },
                {   
                    id:         "13",
                    img:        require('../assets/img/posters/houseofcards.jpg'),
                    link:       seriesLink,
                    name:       "House of Cards",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "drama"
                    ]
                },
                {   
                    id:         "14",
                    img:        require('../assets/img/posters/ides.jpg'),
                    link:       movieLink,
                    name:       "The Ides of March",
                    tvShows:    'Movies', 
                    rating:     '7.1',
                    keywords: [
                        "drama",
                        "thriller",
                    ]
                },
                {   
                    id:         "15",
                    img:        require('../assets/img/posters/imitation_game.jpg'),
                    link:       movieLink,
                    name:       "The Imitation Game",
                    tvShows:    'Movies', 
                    rating:     '8.0',
                    keywords: [
                        "biography",
                        "drama",
                        "history",
                    ]
                },
                {   
                    id:         "16",
                    img:        require('../assets/img/posters/jigsaw.jpg'),
                    link:       movieLink,
                    name:       "Jigsaw",
                    tvShows:    'Movies', 
                    rating:     '5.8',
                    keywords: [
                        "crime",
                        "horror",
                        "mystery",
                    ]
                },
                {   
                    id:         "17",
                    img:        require('../assets/img/posters/jurassic_world.jpg'),
                    link:       movieLink,
                    name:       "Jurassic World",
                    tvShows:    'Movies', 
                    rating:     '7.0',
                    keywords: [
                        "action",
                        "adventure",
                        "sci-fi",
                    ]
                },
                {   
                    id:         "18",
                    img:        require('../assets/img/posters/life.jpg'),
                    link:       movieLink,
                    name:       "Life",
                    tvShows:    'Movies', 
                    rating:     '6.6',
                    keywords: [
                        "horror",
                        "sci-fi",
                        "thriller",
                    ]
                },
                {   
                    id:         "19",
                    img:        require('../assets/img/posters/little_prince.jpg'),
                    link:       movieLink,
                    name:       "The Little Prince",
                    tvShows:    'Movies', 
                    rating:     '7.8',
                    keywords: [
                        "animation",
                        "adventure",
                        "drama",
                    ]
                },
                {   
                    id:         "20",
                    img:        require('../assets/img/posters/mindhunter.jpg'),
                    link:       seriesLink,
                    name:       "Mindhunter",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "crime",
                        "drama",
                        "thriller",
                    ]
                },
                {   
                    id:         "21",
                    img:        require('../assets/img/posters/narcos.jpg'),
                    link:       seriesLink,
                    name:       "Narcos",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "biography",
                        "crime",
                        "drama",
                    ]
                },
                {   
                    id:         "22",
                    img:        require('../assets/img/posters/never_let_me_go.jpg'),
                    link:       movieLink,
                    name:       "Never Let Me Go",
                    tvShows:    'Movies', 
                    rating:     '7.2',
                    keywords: [
                        "drama",
                        "romance",
                        "sci-fi",
                    ]
                },
                {   
                    id:         "23",
                    img:        require('../assets/img/posters/oa.jpg'),
                    link:       seriesLink,
                    name:       "The OA",
                    tvShows:    'TV series', 
                    rating:     '7.8',
                    keywords: [
                        "drama",
                        "fantasy",
                        "mystery",
                    ]
                },
                {   
                    id:         "24",
                    img:        require('../assets/img/posters/sherlock.jpg'),
                    link:       seriesLink,
                    name:       "Sherlock",
                    tvShows:    'TV series', 
                    rating:     '9.2',
                    keywords: [
                        "crime",
                        "drama",
                        "mystery",
                    ]
                },
                {   
                    id:         "25",
                    img:        require('../assets/img/posters/star_wars.jpg'),
                    link:       movieLink,
                    name:       "Star Wars: The Last Jedi",
                    tvShows:    'Movies', 
                    rating:     '7.4.',
                    keywords: [
                        "action",
                        "adventure",
                        "fantasy",
                    ]
                },
                {   
                    id:         "26",
                    img:        require('../assets/img/posters/stranger_things.jpg'),
                    link:       seriesLink,
                    name:       "Stranger Things",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "drama",
                        "fantasy",
                        "horror",
                    ]
                },
                {   
                    id:         "27",
                    img:        require('../assets/img/posters/valerian.jpg'), 
                    link:       movieLink,
                    name:       "Valerian and the City of a Thousand Planets",
                    tvShows:    'Movies', 
                    rating:     '6.5',
                    keywords: [
                        "action",
                        "adventure",
                        "fantasy",
                    ]
                },
                {   
                    id:         "28",
                    img:        require('../assets/img/posters/zootopia.jpg'),
                    link:       movieLink,
                    name:       "Zootopia",
                    tvShows:    'Movies', 
                    rating:     '8.0',
                    keywords: [
                        "animation",
                        "adventure",
                        "comedy",
                    ]
                },
                {   
                    id:         "29",
                    img:        require('../assets/img/posters/hacksaw_ridge.jpg'),
                    link:       movieLink,
                    name:       "Hacksaw Ridge",
                    tvShows:    'Movies', 
                    rating:     '8.2',
                    keywords: [
                        "biography",
                        "drama",
                        "history",
                    ]
                },

            ],
        }
    },

    computed: {

        recomendTvShows() {
            return this.films = _.shuffle(this.films).slice(0,4) 
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
    margin: 50px 0;
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
    margin-top: 50px;
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

    &_badge {
        display: flex;
        justify-content: center;
        align-items: center;
        background: $color_main;
        position:absolute;
        top: 20px;
        right: 0;
        padding: 8px;
        padding-bottom: 9px;
        border-radius: 20px 0 0 20px;
        color: white;
        font-weight: 700;
    } 
}

</style>
