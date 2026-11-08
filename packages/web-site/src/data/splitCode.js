const CODE_MARKS = /(```[\s\S]+?```|`[^`\n]+`)/

// The capture group keeps code parts in the result, so they land on odd indexes.
export function splitCode(text) {
    return text.split(CODE_MARKS)
}
