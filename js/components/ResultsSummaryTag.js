export default function ResultsSummaryTag(properties, maxScore) {
    // *** *** *** Variables *** *** ***
    const CLASS_NAME = "results-summary-tag";

    let {category, score, icon, color} = properties;

    let $template = document.getElementById(CLASS_NAME).content,
        $clone = document.importNode($template, true),
        $tag = $clone.querySelector(`.${CLASS_NAME}`),
        $icon = $clone.querySelector(`.${CLASS_NAME}-icon`),
        $category = $clone.querySelector(`.${CLASS_NAME}-category`),
        $score = $clone.querySelector(`.${CLASS_NAME}-score`),
        $maxScore = $clone.querySelector(`.${CLASS_NAME}-max-score`),
        $background = $clone.querySelector(`.${CLASS_NAME}-background`);

    // *** *** *** Ejecución *** *** ***
    $icon.src = icon;
    $icon.alt = category + " Icon";
    $category.textContent = category;
    $category.style.color = `var(${color})`;
    $score.textContent = score;
    $maxScore.textContent = "/ " + maxScore;
    $background.style.backgroundColor = `var(${color})`;
    return $clone;
};
