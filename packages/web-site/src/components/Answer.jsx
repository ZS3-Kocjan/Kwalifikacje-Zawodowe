import React from 'react'
import FormattedText from './FormattedText'

function Answer({ text, checkAnswer, afterClicked }) {
    return (
        <button className={`p-3 w-full rounded-2xl font-bold text-lg text-wrap text-black outline-none ${afterClicked} 
        `}
            onClick={checkAnswer}
        >
            <FormattedText text={text} />
        </button>
    )
}

export default Answer