import ResultsSummaryTag from "./ResultsSummaryTag.js";

export default function ResultsSummary(results) {
    // *** *** *** Variables *** *** ***
    const CLASS_NAME = "results-summary",
        MAX_SCORE = 100;

    let totalScore,
        scores = [];

    let $template = document.getElementById(CLASS_NAME).content,
        $clone = document.importNode($template, true),
        $totalScore = $clone.querySelector(`.${CLASS_NAME}-total-score`),
        $maxScore = $clone.querySelector(`.${CLASS_NAME}-max-score`),
        $scoreTxt = $clone.querySelector(`.${CLASS_NAME}-score-txt`),
        $averageTxt = $clone.querySelector(`.${CLASS_NAME}-average-txt`),
        $body = $clone.querySelector(`.${CLASS_NAME}-body`),
        $fragment = document.createDocumentFragment();

    // *** *** *** Funciones *** *** ***
    const average = array => (array.reduce((acc, cur) => acc + cur, 0))/array.length;

    // *** *** *** Ejecución *** *** ***
    for (let i = 0; i < results.length; i++) {
        $fragment.append(ResultsSummaryTag(results[i], MAX_SCORE));
        scores.push(results[i].score);
    };
    totalScore = Number.parseInt(average(scores));
    $totalScore.textContent = totalScore;
    $maxScore.textContent = "of " + MAX_SCORE;
    $scoreTxt.textContent = "Great";
    $averageTxt.textContent = "You scored higher than 65% of the people who have taken these tests.";
    $body.append($fragment);
    return $clone;
};
