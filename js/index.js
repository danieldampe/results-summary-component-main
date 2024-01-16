import ResultsSummary from "./components/ResultsSummary.js";
import ajax from "./helpers/ajax.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const RESULTS_SUMMARY = "data.json";

const COLORS = ["--color-light-red", "--color-orangey-yellow", "--color-green-teal", "--color-cobalt-blue"];

// *** *** *** Ejecución *** *** ***
document.addEventListener("DOMContentLoaded", async () => {
    ajax({
        url: RESULTS_SUMMARY,
        sucess(results) {
            for (let i = 0; i < results.length; i++) {
                results[i].color = COLORS[i];
            };
            $main.append( 
                ResultsSummary(results) 
            );
        }
    });
});
