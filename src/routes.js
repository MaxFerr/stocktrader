import frontPageStock from './components/frontPageStock.vue';
import stocksStock from './components/stocksStock.vue';
import portfolio from './components/portfolio.vue';

export const routes=[
{path:'/',component:frontPageStock},
{path:'/stocks',component:stocksStock},
{path:'/portfolio',component:portfolio},
]