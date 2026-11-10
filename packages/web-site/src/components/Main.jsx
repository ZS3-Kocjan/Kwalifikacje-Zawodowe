import { useRef, useState } from 'react'
import data from '../data/data'
import Card from './Card'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Question from './Question'
import ScoreStatus from './ScoreStatus'

function Main() {
    // The 40 drawn questions, each with the student's answer (null until answered).
    const [quiz, setQuiz] = useState([])
    const textRef = useRef()

    useGSAP(() => {
        const splitText = new SplitText(textRef.current, { type: "chars,words,lines", linesClass: "clip-text" })

        gsap.fromTo(splitText.lines, {
            autoAlpha: 0,
            yPercent: 50
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
                each: 0.1,
            }
        }, 1);
    })


    function choiceQualification(questions) {
        setQuiz(shuffle40Questions(questions).map(q => ({ ...q, userAnswer: null })))
    }

    function shuffle40Questions(questions) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 40)
    }

    function checkAnswer(index, answer) {
        setQuiz(prev => prev.map((q, i) => (i === index && q.userAnswer == null ? { ...q, userAnswer: answer } : q)))
    }

    const answered = quiz.filter(q => q.userAnswer != null)
    const points = answered.filter(q => q.userAnswer === q.goodAnswer).length

    return (
        <div className='mx-auto max-w-7xl md:w-full flex flex-col justify-start items-center p-8 mt-32 md:mt-24 gap-12 scroll-auto'>
            {(quiz.length === 0) ?
                <>
                    <h3 ref={textRef} className='text-3xl font-semibold tracking-tight text-balance text-white py-0'>Wybierz kwalifikacje</h3>
                    <div className=
                        'flex flex-col flex-wrap md:flex-row gap-6 px-6'
                    >
                        {data.map(e => (
                            <Card key={e.name} id={e.name} name={e.name} fullName={e.fullName} available={e.available} handleClick={() => { choiceQualification(e.questions) }} />
                        ))}
                    </div>
                </>

                :
                <>
                    <h3 className='text-3xl font-semibold tracking-tight text-balance text-white py-0'>Odpowiedz na 40 pytań:</h3>
                    <div className='flex flex-col justify-start items-center'>
                        {quiz.map((q, i) => (
                            <Question key={q.id} number={i + 1} title={q.title} answers={q.answers} goodAnswer={q.goodAnswer} userAnswer={q.userAnswer} checkAnswer={answer => checkAnswer(i, answer)} />
                        ))}
                    </div>
                    <ScoreStatus doneQuestions={answered.length} questionsAmount={quiz.length} points={points} />
                </>
            }

        </div>
    )
}

export default Main