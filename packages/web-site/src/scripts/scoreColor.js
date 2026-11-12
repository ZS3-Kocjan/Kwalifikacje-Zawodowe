// Takes the shown, rounded percent, so the colour always matches the number. Below 50% the exam is failed.
export function scoreColor(percent) {
    return percent < 50 ? "text-red-400" : percent <= 65 ? "text-yellow-400" : "text-emerald-400"
}
