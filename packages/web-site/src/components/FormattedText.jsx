import { splitCode } from '../scripts/splitCode'

function FormattedText({ text }) {
    return splitCode(text).map((part, i) => {
        if (i % 2 === 0) return part

        // <code> instead of <pre>: h3 and button accept phrasing content only.
        return part.startsWith('```')
            ? <code key={i} className='block my-3 p-3 rounded-xl bg-black/30 font-mono font-normal text-base text-left whitespace-pre-wrap wrap-anywhere'>{part.slice(3, -3).trim()}</code>
            : <code key={i} className='px-1.5 py-0.5 rounded-md bg-black/20 font-mono text-[0.9em] wrap-anywhere box-decoration-clone'>{part.slice(1, -1)}</code>
    })
}

export default FormattedText
