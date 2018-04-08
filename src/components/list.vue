<template><div>
    <app-header></app-header>
    <div class="content"><!-- list_content -->
        <div class="scroll"><!-- tags list -->
          <div v-for="tag in tags">
            <input  v-model="selectedCategory" type="radio" v-bind:id="tag.name" name="tags" v-bind:value="tag.name">
            <label class="menu_item" v-bind:for="tag.name">{{tag.name}}</label>
          </div>
        </div>
          
        <div class="item_wrapper"><!-- film list -->
            <div v-for="film in filteredFilms" class="item">
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
        </div> <!-- END film list wrapper -->

        <aside class="sidebar"><!-- bottom menu -->
            <ul class="menu menu--center">
                <li class="menu_bottom_item"  v-for="menuItem in menuBottom">
                    <img class="svg" v-bind:src="menuItem.img" alt="">
                    <span>{{menuItem.name}}</span>
                </li>
            </ul>
        </aside>
    </div> <!-- END list_content -->
    
</div></template>

<script>
// Imports
import header from '../components/header.vue';

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
    components: {
        'app-header': header,
    },
    data () {
        return {
            keyword: '',
           
            tags: [
                { name: "all"},
                { name: "action"},
                { name: "comady"},
                { name: "drama"},
                { name: "sci-fi"},
                { name: "mystery"},
                { name: "horror"},
                { name: "romantic"},     
            ],

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

            menuBottom: [
                { name: "Home", img: require('../assets/img/svg/heart.svg') },
                { name: "Films", img: require('../assets/img/svg/movie.svg') },
                { name: "TV Series", img: require('../assets/img/svg/tv.svg') },
                { name: "Profil", img: require('../assets/img/svg/avatar.svg') },    
            ],

            selectedCategory: "all"
           
        }
    },

    computed: {
        filteredFilms:  function() {
           
            var app = this;
            var category = app.selectedCategory; 
            
            if (category === "all") {
                return app.films;
            }
           
            else {
                return app.films.filter(function(film) {
                    return film.category == category;
                });
            }  
            
        },
    },
    
}
</script>

<style lang='scss' scoped>
// Imports
@import '../assets/scss/_variables';

.content {
    background: $color_bg--darken;
    position: relative;
    height: 100%;
}


// ITEMS WRAPPER
.item_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-row-gap: 20px;
    margin: 20px auto 100px auto;
    max-width: 90vw;
    text-align: center;
    justify-items: center;
}
//single item
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
// BOTTOM MENU
.sidebar {
    position: fixed;
    bottom: 0;
    background: rgba($color_bg--darken, .9);
    width: 100%;
}

.menu_bottom_item {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 20px 15px;
    transition: .2s;
    &:hover {
        background: $color_main;
        border-bottom: 0;
    }
    .svg {
        height: 20px;
        margin-bottom: 10px;
    }
}

</style>
