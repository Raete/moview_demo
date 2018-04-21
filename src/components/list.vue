<template><div>
    <div class="moview-container">
        <div class="top_logo_wrapper">
        <router-link to="/" exact class="top_logo">moview</router-link>
        </div>
        
        <div class="top_bar">
        <div class="top_search">
            <img class="top_search_ico" src="../assets/img/svg/search.svg" alt="">
            <input type="text" v-model="search" placeholder="search">
        </div>
        <div class="top_profil">
            <img class="top_profil_ico" src="../assets/img/per1.jpg" alt="">
            <h2 class="top_profil_name">Samuel Green</h2>
        </div>
        </div>
    </div>
    
    <main class="moview-content">
        <span> Filters: </span>
        <nav class="nav">
            <menu class="nav__controls">
                <li v-for="(active, menu) in menus" class="nav__label"
                :class="{
                'nav__label--active' : active,
                'nav__label--filter': activeFilters[menu].length
                }" @click="setMenu(menu, active)">
                {{ menu }}
                </li>

                <li class="nav__label nav__label--clear" @click="clearAllFilters">Clear all</li>
            </menu>
            <ul class="sort_buttons">
                <li class="nav__label" @click="sortByName = !sortByName">sort by name</li> 
                <li class="nav__label" @click="sortByRate = !sortByRate">sort by rate</li> 
            </ul>
        </nav>

        <transition-group name="dropdown" tag="section" class="dropdown" :style="dropdown">
            <menu v-for="(options, filter) in filters" class="filters" v-show="menus[filter]" ref="menu" :key="filter">

                <li v-if="filter === 'rating'" class="filters__rating">
                    <output>
                        <label>Minimum rating:&nbsp;</label>
                        {{ parseFloat(filters.rating).toFixed(1) }}
                    </output>

                    <input v-model="filters.rating" class="filters__range" type="range" :min="rating.min" :max="rating.max" step="0.1"/>
                </li>

                <template v-else>
                    <li v-for="(active, option) in options" class="filters__item"
                    :class="{ 'filters__item--active': active }"
                    @click="setFilter(filter, option)">
                    {{ option }}
                    </li>
                </template>
            </menu>
        </transition-group>

        <transition-group name="item" tag="ul" class="item_wrapper">
            <div class="item" v-for="tvShow in list" :key="tvShow.id">
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
                <!-- <small class="item_tag" >{{tvShow.keywords}}</small> -->
            </div>
        </transition-group>
    </main>
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

    data() {
        return {
            search: "",
            sortByRate: false,
            sortByName: false,
            dropdown: { height: 0 },
            rating: { min: 10, max: 0 },
            filters: { Shows: {}, categories: {}, rating: 0 },
            menus: { Shows: false, categories: false, rating: false },
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
                {   
                    id:         "30",
                    img:        require('../assets/img/posters/one.jpg'),
                    link:       movieLink,
                    name:       "Ready Player One",
                    tvShows:    'Movies', 
                    rating:     '7.9',
                    keywords: [
                        "action",
                        "adventure",
                        "sci-fi",
                    ]
                },
                {   
                    id:         "31",
                    img:        require('../assets/img/posters/about_time.jpg'),
                    link:       movieLink,
                    name:       "About Time",
                    tvShows:    'Movies', 
                    rating:     '7.8',
                    keywords: [
                        "comedy",
                        "drama",
                        "fantasy",
                    ]
                },
                {   
                    id:         "32",
                    img:        require('../assets/img/posters/get_out.jpg'),
                    link:       movieLink,
                    name:       "Get Out",
                    tvShows:    'Movies', 
                    rating:     '7.7',
                    keywords: [
                        "horror",
                        "mystery",
                        "thriller",
                    ]
                },
                {   
                    id:         "33",
                    img:        require('../assets/img/posters/call_me_by_your_name.jpg'),
                    link:       movieLink,
                    name:       "Call Me by Your Name",
                    tvShows:    'Movies', 
                    rating:     '8.0',
                    keywords: [
                        "drama",
                        "romance",
                    ]
                },
                {   
                    id:         "34",
                    img:        require('../assets/img/posters/orient_express.jpg'),
                    link:       movieLink,
                    name:       "Murder on the Orient Express",
                    tvShows:    'Movies', 
                    rating:     '6.6',
                    keywords: [
                        "crime",
                        "drama",
                        "mystery",
                    ]
                },
                {   
                    id:         "35",
                    img:        require('../assets/img/posters/jumanji.jpg'),
                    link:       movieLink,
                    name:       "Jumanji: Welcome to the Jungle",
                    tvShows:    'Movies', 
                    rating:     '7.0',
                    keywords: [
                        "action",
                        "adventure",
                        "comedy",
                    ]
                },
                {   
                    id:         "36",
                    img:        require('../assets/img/posters/incredibles.jpg'),
                    link:       movieLink,
                    name:       "The Incredibles",
                    tvShows:    'Movies', 
                    rating:     '8.0',
                    keywords: [
                        "animation",
                        "action",
                        "adventure",
                        "family",
                    ]
                },
                {   
                    id:         "37",
                    img:        require('../assets/img/posters/unfortunate_events.jpg'),
                    link:       seriesLink,
                    name:       "Unfortunate Events",
                    tvShows:    'TV series', 
                    rating:     '7.9',
                    keywords: [
                        "adventure",
                        "comedy",
                        "drama",
                    ]
                },
                {   
                    id:         "38",
                    img:        require('../assets/img/posters/westworld.jpg'),
                    link:       seriesLink,
                    name:       "Westworld",
                    tvShows:    'TV series', 
                    rating:     '8.9',
                    keywords: [
                        "drama",
                        "mystery",
                        "sci-fi",
                    ]
                },
                {   
                    id:         "39",
                    img:        require('../assets/img/posters/baby_driver.jpg'),
                    link:       movieLink,
                    name:       "Baby Driver",
                    tvShows:    'Movies', 
                    rating:     '7.7',
                    keywords: [
                        "action",
                        "crime",
                    ]
                },
                {   
                    id:         "40",
                    img:        require('../assets/img/posters/boss_baby.jpg'),
                    link:       movieLink,
                    name:       "Boss Baby",
                    tvShows:    'Movies', 
                    rating:     '6.3',
                    keywords: [
                        "animation",
                        "comedy",
                        "family",
                    ]
                },


            ],
        }
    },

    computed: {

        activeMenu() {
        return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
        },

        list() {
            let { Shows, categories } = this.activeFilters

            return this.films.filter(({ tvShows, keywords, rating }) => {
                if (rating < this.filters.rating) return false
                if (Shows.length && !~Shows.indexOf(tvShows)) return false
                return !categories.length || categories.every(cat => ~keywords.indexOf(cat))
            })

            // search
            // return this.films.filter((film) => {
            //     return film.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            // });
        },

        activeFilters() {
            let { Shows, categories } = this.filters

            return {
                Shows: Object.keys(Shows).filter(c => Shows[c]),
                categories: Object.keys(categories).filter(c => categories[c]),
                rating: (this.filters.rating > this.rating.min) ? [this.filters.rating] : []
            }
        },

    },

    watch: {

        sortByRate: function (val) {
			this.films = this.sortBy(this.films, 'rating', val);
        },
        
		sortByName: function (val) {
			this.films = this.sortBy(this.films, 'name', val);
		},
        
        activeMenu(index, from) {
            if (index === from) return;

            this.$nextTick(() => {
                if (!this.$refs.menu || !this.$refs.menu[index]) {
                    this.dropdown.height = 0
                } 
                else {
                    this.dropdown.height = `${this.$refs.menu[index].clientHeight + 16}px`
                }
            })
        }
        
    },

    methods: {

        sortBy(array, param, reverse) {
			var filterA, filterB;
			return array.sort(function (a, b) {
				switch (param) {
					case 'rating':
						filterA = b.rating;
						filterB = a.rating;
						break;
					case 'name':
						filterA = a.name;
						filterB = b.name;
						break;
				}
				if (reverse) {
					return (filterA > filterB) ? 1 : -1;
				} else {
					return (filterA < filterB) ? 1 : -1;
				}
			});
		},

        setFilter(filter, option) {
            if (filter === 'Shows') {
                this.filters[filter][option] = !this.filters[filter][option]
            } 

            else {
                setTimeout(() => {
                    this.clearFilter(filter, option, this.filters[filter][option])
                }, 100)
            }
        },

        clearFilter(filter, except, active) {
            if (filter === 'rating') {
                this.filters[filter] = this.rating.min
            } 
            else {
                Object.keys(this.filters[filter]).forEach(option => {
                    this.filters[filter][option] = except === option && !active
                })
            }
        },

        clearAllFilters() {
            Object.keys(this.filters).forEach(this.clearFilter)
        },

        setMenu(menu, active) {
            Object.keys(this.menus).forEach(tab => {
                this.menus[tab] = !active && tab === menu
            })
            }
        },

        beforeMount() {

            this.films.forEach(({ tvShows, keywords, rating }) => {
                this.$set(this.filters.Shows, tvShows, false)

                if (this.rating.max < rating) this.rating.max = rating
                if (this.rating.min > rating) {
                this.rating.min = rating
                this.filters.rating = rating
            }

            keywords.forEach(category => {
                this.$set(this.filters.categories, category, false)
            })
        })
    },

}


</script>

<style lang='scss' scoped>
// Imports
@import '../assets/scss/_variables';

// TOP BAR
.moview-container {
    height: 100%;
    display: grid;
    grid-template-columns: auto 3fr;
    grid-template-rows: 60px;
    grid-template-areas: 
    "l t ";
    margin-bottom: 20px;
}
// top bar -- mobil
@media screen and (max-width: 700px) {
    .moview-container {
        grid-template-rows: 60px 60px;
        grid-template-areas: 
        "l l "
        "t t ";
    }
}

.top_bar {
    grid-area: t;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: $color_bg--darken;
    height: 60px;
    padding: 0 .5em;
}

.top_logo_wrapper {
    grid-area: l;
    display: flex;
    background: $color_bg--darken;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
}
//logo
.top_logo {
    display: inline-block;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 10px;
    color:$color_text;
    padding: 12px;
    border-radius: 10px 0 10px 0;
    border: 3px solid $color_text;
}
// search
.top_search {
    display: flex;
    align-items: center;
    width: 90%;
    input {
        width: 90%;
    }
    &_ico {
        height: 15px;
        margin-right: 10px;
    }
}

@media screen and (max-width: 700px) {
    .top_search {
        margin: 0 auto;
    max-width: 90vw;
    }
}

// profil
.top_profil {
    display: flex;
    align-items: center;
    min-width: 165px;
}

// -- mobil --
@media screen and (max-width: 700px) {
    .top_profil {
        display: none;
    }
}

.top_profil_ico {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-right: 10px;
}

.top_profil_name {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
}


.moview-content {
    background: $color_bg--darken;
    position: relative;
    height: 100%;
    margin: 0 auto;
    max-width: 90vw;
}

//NAVIGATION
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    padding: 1rem 0;

    &__controls {
        display: flex;
        margin-bottom: 0;
        span {
            font-weight: 700;
        }
    }

    &__label {
        position: relative;
        margin-left: 1rem;
        text-transform: capitalize;
        z-index: 1;
        cursor: pointer;
        padding: 8px;
        border: 1px solid $color_text;
        border-radius: 6px;
        transition: 0.2s;
        &:first-child {
            margin-left: 0;
        }

        &:hover {
            border: 1px solid $color_main;
            color: $color_main;
        }

        &::after {
            content: "\00d7";
            display: inline-block;
            color: transparent;
            width: 0.5rem;
            font-weight: 400;
            transform: scale(0);
            transition: transform 150ms ease-in-out;
        }

        &--clear {
            color: $color_main;
            opacity: 0;
            transform: translate3d(-25%, 0, 0);
            pointer-events: none;
            transition: all 275ms ease-in-out;
            border: 0;
            &:hover {
                border: 0;
                color: transparentize($color_main, 0.5);
            }
        }

        &--filter ~ &--clear {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            pointer-events: auto;
        }

        &--filter::after,
        &--active::after {
            transform: scale(1);
        }

        &--filter::after {
            content: "\2022";
            color: #46d2c4;
        }

        &--active::after {
            content: "\00d7";
            color: $color_main;
        }
    }
}

@media screen and (max-width: 700px) {
    .nav {
        justify-content: flex-start;
    flex-direction: column-reverse;
    align-items: left;
    }
    .sort_buttons {
        margin-bottom: 15px;
    }
}


.sort_buttons {
    display: flex;
}
//dropdown menu
.dropdown {
    display: flex;
    justify-content: flex-start;
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 350ms;
    margin: 0 auto;
    max-width: 88vw;
// animations in menu
    &-enter,
    &-leave-to {
        opacity: 0;
    }

    &-leave,
    &-enter-to {
        opacity: 1;
    }

    &-enter-active,
    &-leave-active {
        position: absolute;
        width: 100%;
        transition: opacity 200ms ease-in-out;
    }

    &-enter-active {
        transition-delay: 100ms;
    }
}
// item in dropdown menu
.filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;


    &__item {
        align-self: center;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        padding: 8px;
        border: 1px solid $color_main;
        border-radius: 6px;
        font-size: 1em;
        line-height: 1.35;
        cursor: pointer;
        transition: all 275ms;

        &:hover {
            border-color: transparentize($color_main, 0.5);
        }

        &--active {
            color: white;
            border-color: $color_main;
            background-color: $color_main;
        }
    }

    &__rating {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.5rem 0;
    }

    &__range {
        width: 200px;
        margin-top: 1rem;
    }
}
// CONTENT - LIST OF TV SHOWS
.content__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-row-gap: 20px;
    margin: 20px auto 100px auto;
    max-width: 90vw;
    text-align: center;
    justify-items: center;
}
// ITEMS WRAPPER
.item_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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
// animations item
    &-move {
        transition: all 600ms ease-in-out 50ms;
    }

    &-enter-active {
        transition: all 300ms ease-out;
    }

    &-leave-active {
        transition: all 200ms ease-in;
        position: absolute;
        z-index: 0;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }
    &-enter {
        transform: scale(0.9);
    }
}

// rating range style 
input[type=range] {
    -webkit-appearance: none;
    width: 300px;

    &::-webkit-slider-runnable-track {
        width: 300px;
        height: 2px;
        background: $color_main;
        border: none;
        border-radius: 3px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: $color_main;
        margin-top: -7px;
    }

    &:focus {
        outline: none;
    }

    &:focus::-webkit-slider-runnable-track {
        background: $color_main;
    }

    &::-moz-range-track {
        width: 300px;
        height: 5px;
        background: $color_main;
        border: none;
        border-radius: 3px;
    }

    &::-moz-range-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: $color_main;
    }

    &:-moz-focusring{
        outline: 1px solid $color_main;
        outline-offset: -1px;
    }

    &::-ms-track {
        width: 300px;
        height: 5px;
        background: transparent;
        border-color: transparent;
        border-width: 6px 0;
        color: transparent;
    }

    &::-ms-fill-lower {
        background: $color_main;
        border-radius: 10px;
    }
    
    &::-ms-fill-upper {
        background: $color_main;
        border-radius: 10px;
    }

    &::-ms-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: $color_main;
    }

    &:focus::-ms-fill-lower {
        background: $color_main;
    }

    &:focus::-ms-fill-upper {
        background: $color_main;
    }
}

</style>
