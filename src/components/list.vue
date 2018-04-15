<template><div>
    <app-header></app-header>
    <div class="moview-content"><!-- list_content -->
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
                {   
                    img:        require('../assets/img/posters/3.jpg'),
                    link:       seriesLink, 
                    title:      '3%', 
                    category:   'sci-fi',
                },
                {
                    img:        require('../assets/img/posters/100.jpg'), 
                    link:       seriesLink,
                    title:      'The 100',
                    category:   'sci-fi',
                },
                {
                    img:         require('../assets/img/posters/arrival.jpg'), 
                    link:        movieLink, 
                    title:       'Arrival',
                    category:    'drama',
                },
                {
                    img:        require('../assets/img/posters/beauty_and_beast.jpg'), 
                    link:       movieLink, 
                    title:      'Beauty and the Beast',
                    category:   'romantic',
                },
                {
                    img:        require('../assets/img/posters/best_offer.jpg'), 
                    link:       movieLink,
                    title:      'The Best Offer',
                    category:   'romantic',
                },
                {
                    img:        require('../assets/img/posters/black_mirror.jpg'), 
                    link:       seriesLink,
                    title:      'Black Mirror',
                    category:   'sci-fi',
                },
                {
                    img:        require('../assets/img/posters/breaking_bad.jpg'), 
                    link:       seriesLink,
                    title:      'Breaking Bad',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/dark.jpg'), 
                    link:       seriesLink,
                    title:      'Dark',
                    category:   'mystery',
                },
                {
                    img:        require('../assets/img/posters/dexter.jpg'), 
                    link:       seriesLink,
                    title:      'Dexter',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/guardians.jpg'), 
                    link:       movieLink,
                    title:      'Guardians of the Galaxy Vol. 2',
                    category:   'sci-fi',
                },
                {
                    img:        require('../assets/img/posters/hacksaw_ridge.jpg'), 
                    link:       movieLink,
                    title:      'Hacksaw Ridge',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/hangover.jpg'), 
                    link:       movieLink,
                    title:      'The Hangover',
                    category:   'comady',
                },
                {
                    img:        require('../assets/img/posters/house.jpg'), 
                    link:       seriesLink,
                    title:      'House M.D.',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/houseofcards.jpg'), 
                    link:       seriesLink,
                    title:      'House of Cards',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/ides.jpg'), 
                    link:       movieLink,
                    title:      'The Ides of March',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/imitation_game.jpg'), 
                    link:       movieLink,
                    title:      'The Imitation Game',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/jigsaw.jpg'), 
                    link:       movieLink,
                    title:      'Jigsaw',
                    category:   'horror',
                },
                {
                    img:        require('../assets/img/posters/jurassic_world.jpg'), 
                    link:       movieLink,
                    title:      'Jurassic World',
                    category:   'action',
                },
                {
                    img:        require('../assets/img/posters/life.jpg'), 
                    link:       movieLink,
                    title:      'Life',
                    category:   'horror',
                },
                {
                    img:        require('../assets/img/posters/little_prince.jpg'), 
                    link:       movieLink,
                    title:      'The Little Prince',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/mindhunter.jpg'), 
                    link:       seriesLink,
                    title:      'Mindhunter',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/narcos.jpg'), 
                    link:       seriesLink,
                    title:      'Narcos',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/never_let_me_go.jpg'), 
                    link:       movieLink,
                    title:      'Never Let Me Go',
                    category:   'romantic',
                },
                {
                    img:        require('../assets/img/posters/oa.jpg'), 
                    link:       seriesLink,
                    title:      'The OA',
                    category:   'mystery',
                },
                {
                    img:        require('../assets/img/posters/sherlock.jpg'), 
                    link:       seriesLink,
                    title:      'Sherlock',
                    category:   'drama',
                },
                {
                    img:        require('../assets/img/posters/star_wars.jpg'), 
                    link:       movieLink,
                    title:      'Star Wars: The Last Jedi',
                    category:   'action',
                },
                {
                    img:        require('../assets/img/posters/stranger_things.jpg'), 
                    link:       seriesLink,
                    title:      'Stranger Things',
                    category:   'horror',
                },
                {
                    img:        require('../assets/img/posters/valerian.jpg'), 
                    link:       movieLink,
                    title:      'Valerian and the City of a Thousand Planets',
                    category:   'sci-fi',
                },
                {
                    img:        require('../assets/img/posters/zootopia.jpg'), 
                    link:       movieLink,
                    title:      'Zootopia',
                    category:   'comady',
                },
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

.moview-content {
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
