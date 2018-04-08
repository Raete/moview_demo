
import movie from './components/movie.vue';
import series from './components/series.vue';
import list from './components/list.vue';
import logIn from './components/logIn.vue';

export default [
    { path: '/', component: logIn},
    { path: '/list', component: list},
    { path: '/movie', component: movie},
    { path: '/series', component: series},
]