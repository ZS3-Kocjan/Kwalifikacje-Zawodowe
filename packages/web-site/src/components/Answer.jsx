import FormattedText from './FormattedText'

function Answer({ text, icon: Icon, checkAnswer, afterClicked }) {
    return (
        <button className={`p-3 w-full rounded-2xl font-bold text-lg text-wrap text-black outline-none ${afterClicked} 
        `}
            onClick={checkAnswer}
        >
            {Icon && <Icon size={22} strokeWidth={3} className='inline-block mr-2 -mt-1' />}
            <FormattedText text={text} />
        </button>
    )
}

export default Answer