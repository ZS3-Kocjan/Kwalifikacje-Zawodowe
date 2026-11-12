import { ClipboardPen } from 'lucide-react'
import { scoreColor } from '../scripts/scoreColor'

function ScoreStatus({ doneQuestions, questionsAmount, points }) {
    const percent = Math.round(points / doneQuestions * 100)

    return (
        <div className='z-40 bg-white/10 backdrop-blur-xl ring ring-white/30 rounded-3xl fixed flex justify-between items-center py-3 px-6 gap-10 bottom-12 shadow-black shadow-2xl'>
            <div className='flex items-center justify-center gap-3'>
                <div className='flex justify-items-center rounded-xl bg-black/30 ring ring-black/30 p-2'>
                    <ClipboardPen size={27} />
                </div>
                <p className='font-bold text-2xl text-shadow'>
                    {doneQuestions}/{questionsAmount}
                </p>
            </div>
            <div className='items-center'>
                <p className={`font-bold text-2xl text-shadow ${doneQuestions > 0 ? scoreColor(percent) : ""}`}>
                    {doneQuestions > 0 ? percent : ""}%
                </p>
            </div>
        </div>
    )
}

export default ScoreStatus
