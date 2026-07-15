import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const QUESTIONS = [
    { id: 1, question: "هل انت مشترك في قناة اليوتيوب؟", options: ["نعم", "لا"] },
    { id: 2, question: "هل شاهدت فيديوهات القناة؟", options: ["نعم", "لا"] },
    { id: 3, question: "هل ترغب في متابعة القناة؟", options: ["نعم", "لا"] },
    { id: 4, question: "هل ترغب في مشاهدة المزيد من الفيديوهات؟", options: ["نعم", "لا"] },
    { id: 5, question: "ماهو اسمك?", options: ["اكتب اسمك هنا"] },
    { id: 6, question: "هل تريد ان ترة فيديوهات القناة على موقعنا؟", options: ["نعم", "لا"] },
];

export default function OnBoarding() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    // التحقق عند تحميل الصفحة إذا كان المستخدم قد أتم الاستبيان
    useEffect(() => {
        const isCompleted = localStorage.getItem("onboardingCompleted");
        if (isCompleted) {
            navigate("/feed");
        }
    }, [navigate]);

    const handleAnswer = (answer) => {
        // حفظ الإجابة الحالية
        const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: answer };
        setAnswers(newAnswers);
        
        // الانتقال للسؤال التالي أو الإنهاء
        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // حفظ الإجابات والانتهاء في LocalStorage
            localStorage.setItem("userAnswers", JSON.stringify(newAnswers));
            localStorage.setItem("onboardingCompleted", "true");
            navigate("/feed");
        }
    };

    return (
        <div className="onboarding-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2>{QUESTIONS[currentStep].question}</h2>
                    
                    {/* عرض الخيارات أو حقل إدخال */}
                    <div className="options-container">
                        {QUESTIONS[currentStep].options.map((opt) => (
                            <button key={opt} onClick={() => handleAnswer(opt)}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}