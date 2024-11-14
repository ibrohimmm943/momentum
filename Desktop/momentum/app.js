import { time } from "./scripts/time.js";
import { greeting } from "./scripts/greeting.js";
import { input } from "./scripts/input.js";
import { weather } from "./scripts/weather.js";


weather();
input();
greeting();
setInterval(time, 1000);