"use client"

import { useState } from "react"
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

    const questions = [
        {
            id: 1,
            question: "What Are Questions?",
            answer: "This Is An Answer!"
        },
        {
            id: 2,
            question: "Can I Ask Another Question?",
            answer: "Sure"
        },
        {
            id: 3,
            question: "Add More Questions Here",
            answer: "Follow The Same Format In The .tsx File"
        }
    ]
    return (
        <div id="faq" className="w-full py-5">
            <div className="w-[89%] m-auto max-w-[144px], shadow-md rounded-lg p-8 bg-background">
                <h2 className="text-2xl mb-6 font-semibold">Frequently Asked Questions</h2>
                {questions.map((q) => (
                    <div key={q.id} className="mb-4 last:mb-0">
                        <button className="w-full text-left text-xl focus: outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
                            onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
                            {q.question}
                            {activeQuestion === q.id ? (
                                <FaMinusCircle className="text-primary" />
                            ) : (
                                <FaPlusCircle className="text-primary" />
                            )}
                        </button>
                        <AnimatePresence>
                            {activeQuestion === q.id && (
                                <motion.div initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}>
                                        <p className="mt-2 p-2">{q.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ