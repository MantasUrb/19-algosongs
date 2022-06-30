// import JS modules
import { discordChartData } from './data/discordChart.js'

import { form } from './components/form.js'
import { nav } from './components/nav.js'
import { hamburger } from './components/hamburger.js'
import { discordChart } from './components/discordChart.js';

// execute JS modules

// <!-- HEADER START -->
nav('header nav');
hamburger();
// <!-- HEADER END -->


// <!-- HERO -->
// <!-- HERO -->


// <!-- SERVICES MUSIC PROMO SECTION START -->

// <!-- SERVICES MUSIC PROMO SECTION END -->


// <!-- SERVICES DISCORD MANAGEMENT SECTION START -->
discordChart('.discord-chart', discordChartData)
// <!-- SERVICES DISCORD MANAGEMENT SECTION END -->


// <!-- ABOUT US SECTION START -->

// <!-- ABOUT US SECTION END -->


// <!-- PARTNERS SECTION START -->

// <!-- PARTNERS SECTION END -->


// <!-- FOOTER START -->
form();
// <!-- FOOTER END -->