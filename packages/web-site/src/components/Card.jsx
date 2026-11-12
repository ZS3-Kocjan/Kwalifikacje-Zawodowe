import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { Check, GraduationCap, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { loadResults } from '../scripts/results'
gsap.registerPlugin(useGSAP, SplitText)

// Takes the shown, rounded percent, so the colour always matches the number. Below 50% the exam is failed.
const scoreColor = percent => (percent < 50 ? "text-red-400" : percent <= 65 ? "text-yellow-400" : "text-emerald-400")

function Card({ name, fullName, available, handleClick }) {
    const fullNameRef = useRef()
    const cardRef = useRef()
    // Read once: results only change during a quiz, and the menu comes back only after a reload.
    const [results] = useState(() => loadResults(name))
    const average = Math.round(results.reduce((sum, r) => sum + r.points / r.total, 0) / results.length * 100)

    useGSAP(() => {
        const splitText = new SplitText(fullNameRef.current, { type: "chars,words,lines", linesClass: "clip-text" })

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
        }, 1.6);

        gsap.from(cardRef.current, {
            autoAlpha: 0,
            opacity: 1,
            y: 50,
            ease: "power3.out",
            duration: 1,
        }, 1.3)

    }, [])

    return (
        // On md the parent is a grid: subgrid puts every card in one row, so they keep equal heights, and the results in the next.
        <div ref={cardRef} className='flex flex-col w-xs md:w-64 md:grid md:grid-rows-subgrid md:row-span-2 transform-gpu'>
            {/* bg-white/10 flattened onto the page's #0e100e: opaque, so the results box can slide under it. */}
            <div className={`relative z-10 flex ring-1 ring-white/30 flex-col items-stretch bg-[#262826] rounded-3xl p-6 gap-6`}>
                <div className="flex gap-6 items-center w-full">
                    <div className='flex justify-center items-center rounded-2xl p-2 bg-black/30'>
                        <GraduationCap size={30} className='text-white' />
                    </div>
                    <p className='text-mauve-100/90 text-2xl font-bold tracking-tight name'>{name}</p>
                </div>
                <p ref={fullNameRef} className='w-full text-center font-semibold text-wrap text-lg text-white/90'>{fullName}</p>
                <button className={`w-full mt-auto text-center rounded-2xl p-4 font-bold text-black outline-none ring-1 ring-white/5
                ${available ? 'hover:bg-black/50 hover:text-white/80 ease-in-out duration-250 bg-white/80 pointer' : 'bg-white/50 disabled'}

                `}
                    onClick={available ? handleClick : undefined}
                    disabled={!available}

                >
                    Wybierz
                </button>
            </div>

            {results.length > 0 ? (
                <div className='-mt-6 pt-12 px-6 pb-6 flex flex-col gap-4 rounded-b-3xl bg-white/5 ring-1 ring-white/20 md:self-start'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-white/70'>Średnia</p>
                        <p className={`font-bold text-2xl text-shadow ${scoreColor(average)}`}>
                            {average}%
                        </p>
                    </div>
                    <ul className='flex flex-col gap-2 pt-4 border-t border-white/10'>
                        {results.map(r => {
                            const percent = Math.round(r.points / r.total * 100)
                            const Icon = percent >= 50 ? Check : X
                            const color = scoreColor(percent)
                            return (
                                <li key={r.date} className='flex items-center gap-3'>
                                    <Icon size={18} className={color} />
                                    <span className='text-sm text-white/70 tabular-nums'>
                                        {new Date(r.date).toLocaleString('pl-PL', { dateStyle: 'short', timeStyle: 'short' })}
                                    </span>
                                    <span className={`ml-auto font-bold ${color}`}>{percent}%</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Card
