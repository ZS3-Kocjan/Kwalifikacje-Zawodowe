// Prefixed because every repository on github.io shares one origin, and versioned for later shape changes.
const KEY = 'kwalifikacje-zawodowe:results:v1'

function loadAll() {
    try {
        return JSON.parse(localStorage.getItem(KEY)) ?? {}
    } catch {
        return {} // Storage blocked (private mode) or corrupted.
    }
}

// The last 5 finished tests of a qualification, newest first.
export function loadResults(name) {
    return loadAll()[name] ?? []
}

export function saveResult(name, points, total) {
    const all = loadAll()
    all[name] = [{ date: Date.now(), points, total }, ...(all[name] ?? [])].slice(0, 5)
    try {
        localStorage.setItem(KEY, JSON.stringify(all))
    } catch {
        // Quota or blocked storage: the result is just not remembered.
    }
}
