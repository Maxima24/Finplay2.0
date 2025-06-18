import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const lessons = [
    {
        id: 1,
        title: 'Introduction to Trading',
        description: 'Learn the basics of trading and how to get started',
        content: [
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/8ZKZg5v2P6w',
                title: 'Welcome to Trading Basics'
            },
            {
                type: 'text',
                content: 'Trading is the process of buying and selling financial instruments such as stocks, bonds, and currencies. In this lesson, you will learn the fundamental concepts of trading and how to get started in the financial markets.'
            },
            {
                type: 'quiz',
                question: 'What is the primary purpose of trading?',
                options: [
                    'To make quick money',
                    'To buy and sell financial instruments',
                    'To gamble on market movements',
                    'To avoid taxes'
                ],
                correctAnswer: 1
            }
        ],
        duration: '15 min',
        level: 'Beginner',
        status: 'available'
    },
    {
        id: 2,
        title: 'Market Analysis Fundamentals',
        description: 'Understanding market trends and analysis techniques',
        content: [
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/8ZKZg5v2P6w',
                title: 'Market Analysis Basics'
            },
            {
                type: 'text',
                content: 'Market analysis is crucial for making informed trading decisions. Learn about technical and fundamental analysis, market indicators, and how to interpret market data.'
            },
            {
                type: 'quiz',
                question: 'What are the two main types of market analysis?',
                options: [
                    'Technical and Fundamental',
                    'Short-term and Long-term',
                    'Buy and Sell',
                    'High and Low'
                ],
                correctAnswer: 0
            }
        ],
        duration: '20 min',
        level: 'Intermediate',
        status: 'locked'
    },
    {
        id: 3,
        title: 'Advanced Trading Strategies',
        description: 'Master advanced trading techniques and risk management',
        content: [
            {
                type: 'video',
                url: 'https://www.youtube.com/embed/8ZKZg5v2P6w',
                title: 'Advanced Trading Techniques'
            },
            {
                type: 'text',
                content: 'Explore advanced trading strategies, risk management techniques, and portfolio optimization methods to enhance your trading performance.'
            },
            {
                type: 'quiz',
                question: 'What is the most important aspect of risk management?',
                options: [
                    'Making maximum profits',
                    'Protecting your capital',
                    'Following market trends',
                    'Using complex strategies'
                ],
                correctAnswer: 1
            }
        ],
        duration: '25 min',
        level: 'Advanced',
        status: 'locked'
    }
];

function Lesson() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const lesson = lessons.find(lesson => lesson.id === parseInt(id));

    if (!lesson) {
        return (
            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Lesson not found</h2>
                <button 
                    onClick={() => navigate('/learning')}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 text-sm sm:text-base"
                >
                    Back to Learning
                </button>
            </div>
        );
    }

    if (lesson.status === 'locked') {
        return (
            <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Lesson Locked</h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">Complete previous lessons to unlock this content.</p>
                <button 
                    onClick={() => navigate('/learning')}
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 text-sm sm:text-base"
                >
                    Back to Learning
                </button>
            </div>
        );
    }

    const handleNext = () => {
        if (currentStep < lesson.content.length - 1) {
            setCurrentStep(currentStep + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setSelectedAnswer(null);
            setShowResult(false);
        }
    };

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        setShowResult(true);
    };

    const renderContent = () => {
        const content = lesson.content[currentStep];

        switch (content.type) {
            case 'video':
                return (
                    <div className="absolute inset-0">
                        <iframe
                            src={content.url}
                            title={content.title}
                            className="w-full h-full"
                            allowFullScreen
                        />
                    </div>
                );
            case 'text':
                return (
                    <div className="prose max-w-none p-4 sm:p-6">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{content.content}</p>
                    </div>
                );
            case 'quiz':
                return (
                    <div className="space-y-4 p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold">{content.question}</h3>
                        <div className="space-y-2">
                            {content.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    className={`w-full text-left p-3 sm:p-4 rounded-lg border text-sm sm:text-base ${
                                        selectedAnswer === index
                                            ? index === content.correctAnswer
                                                ? 'bg-green-100 border-green-500'
                                                : 'bg-red-100 border-red-500'
                                            : 'bg-white border-gray-200 hover:border-purple-500'
                                    }`}
                                    disabled={showResult}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {showResult && (
                            <div className={`mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                                selectedAnswer === content.correctAnswer
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                            }`}>
                                {selectedAnswer === content.correctAnswer
                                    ? 'Correct! Well done!'
                                    : 'Incorrect. Try again!'}
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="pl-3 sm:pl-4 bg-white border-b">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{lesson.title}</h1>
                        <p className="text-sm text-gray-500 mt-1">{lesson.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                        <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm">
                            {lesson.level}
                        </span>
                    </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div
                        className="bg-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / lesson.content.length) * 100}%` }}
                    />
                </div>
                <div className="mt-1 sm:mt-2 flex justify-between text-xs sm:text-sm text-gray-500">
                    <span>Progress</span>
                    <span>{Math.round(((currentStep + 1) / lesson.content.length) * 100)}%</span>
                </div>
            </div>

            <div className="flex-1 relative">
                {renderContent()}
            </div>

            <div className="p-3 sm:p-4 bg-white border-t">
                <div className="flex justify-between items-center gap-2 sm:gap-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                            currentStep === 0
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        Previous
                    </button>
                    <div className="text-xs sm:text-sm text-gray-500">
                        {currentStep + 1} of {lesson.content.length}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={currentStep === lesson.content.length - 1}
                        className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
                            currentStep === lesson.content.length - 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Lesson;