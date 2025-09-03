"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Bell, User, Plus, CheckCircle, MessageCircle, X, Send, Sparkles, Menu, ChevronDown } from 'lucide-react';

const ChatbotAgent = ({ isOpen, onClose, onToggle }: { isOpen: boolean, onClose: () => void, onToggle: () => void }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm EduBot, your admission assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "How do I apply?",
    "What documents do I need?",
    "Admission requirements",
    "Fee structure"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = { id: messages.length + 1, text: inputValue, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: messages.length + 2, 
        text: "Thanks for your question! I'll help you with that. For detailed application guidance, please check the step-by-step process on the left sidebar.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const GoogleColorAnimation = () => (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: [
            "conic-gradient(from 0deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
            "conic-gradient(from 90deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
            "conic-gradient(from 180deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
            "conic-gradient(from 270deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
            "conic-gradient(from 360deg, #4285f4, #ea4335, #fbbc05, #34a853, #4285f4)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
      </div>
    </div>
  );

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3">
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500 ml-2">EduBot is typing...</span>
    </div>
  );

  if (!isOpen) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="relative"
      >
        <GoogleColorAnimation />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="w-[90vw] max-w-sm h-[70vh] max-h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 sm:p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative">
            <GoogleColorAnimation />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">EduBot</h3>
            <p className="text-xs opacity-90">Admission Assistant</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[85%] p-2 sm:p-3 rounded-2xl ${
              message.isBot 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
            }`}>
              <p className="text-xs sm:text-sm">{message.text}</p>
            </div>
          </motion.div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Quick Replies */}
      {messages.length === 1 && (
        <div className="px-3 sm:px-4 pb-2">
          <div className="grid grid-cols-2 gap-1 sm:gap-2">
            {quickReplies.map((reply, index) => (
              <motion.button
                key={reply}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setMessages(prev => [...prev, { id: prev.length + 1, text: reply, isBot: false }]);
                  setIsTyping(true);
                  setTimeout(() => {
                    setMessages(prev => [...prev, { 
                      id: prev.length + 1, 
                      text: `Great question about "${reply}"! I'd be happy to help you with that.`, 
                      isBot: true 
                    }]);
                    setIsTyping(false);
                  }, 1000);
                }}
                className="p-2 text-xs bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {reply}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-3 sm:p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <Send size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const UniversityApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLearningMode, setSelectedLearningMode] = useState('Classroom');
  const [selectedCourseLevel, setSelectedCourseLevel] = useState('Bachelors');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStepsPanel, setShowStepsPanel] = useState(false);

  const steps = [
    { id: 1, title: 'Choose Program', isActive: true },
    { id: 2, title: 'Personal Information', isActive: false },
    { id: 3, title: 'Campus', isActive: false },
    { id: 4, title: 'Educational Details', isActive: false },
    { id: 5, title: 'Registration', isActive: false },
    { id: 6, title: 'Academic Fee Paid', isActive: false },
    { id: 7, title: 'Upload Documents', isActive: false },
    { id: 8, title: 'Hostel Selection', isActive: false },
    { id: 9, title: 'Campus Visit', isActive: false },
  ];

  const learningModes = ['Classroom', 'Distance', 'Online'];
  
  const courseLevels = [
    'Bachelors', 'Masters', 'Certificate', 'Diploma', 'Doctoral',
    'Post Graduate Diploma', 'Work Integrated Program', 'Lateral Entry', 'Fellowship'
  ];

  const programs = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Business Administration',
    'Data Science',
    'Artificial Intelligence'
  ];

  const specializations = [
    'Full Stack Development',
    'Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Mobile App Development',
    'DevOps',
    'UI/UX Design',
    'Data Analytics'
  ];

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const StepsPanel = ({ isMobile = false }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 ${isMobile ? 'mb-6' : 'h-fit'}`}
    >
      <div className="space-y-2 sm:space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-xl transition-all ${
              step.id === currentStep
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                : step.id < currentStep
                ? 'bg-green-50 text-green-700'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
              step.id === currentStep
                ? 'bg-white/20 text-white'
                : step.id < currentStep
                ? 'bg-green-100 text-green-600'
                : 'bg-white text-gray-500'
            }`}>
              {step.id < currentStep ? <CheckCircle size={14} className="sm:w-4 sm:h-4" /> : step.id}
            </div>
            <span className="font-medium text-sm sm:text-base">{step.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EduPortal
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 sm:px-4 rounded-lg font-medium flex items-center space-x-1 sm:space-x-2 transition-colors text-sm"
              >
                <Plus size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">New Application</span>
                <span className="sm:hidden">New</span>
              </motion.button>
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <button
                onClick={() => setShowStepsPanel(!showStepsPanel)}
                className="md:hidden p-2 text-gray-600"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Mobile Steps Panel */}
        <AnimatePresence>
          {showStepsPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mb-6"
            >
              <StepsPanel isMobile />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-80 lg:w-80">
            <StepsPanel />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
              >
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Choose Program</h1>
                  <p className="text-sm sm:text-base text-gray-600">Select your preferred learning mode and program details</p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {/* Learning Mode */}
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Learning Mode</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {learningModes.map((mode) => (
                        <motion.button
                          key={mode}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => setSelectedLearningMode(mode)}
                          className={`p-3 sm:p-4 rounded-xl border-2 font-medium transition-all text-sm sm:text-base ${
                            selectedLearningMode === mode
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {mode}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Course Level */}
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Course Level</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {courseLevels.map((level) => (
                        <motion.button
                          key={level}
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={() => setSelectedCourseLevel(level)}
                          className={`p-3 sm:p-4 rounded-xl border-2 font-medium transition-all text-xs sm:text-sm ${
                            selectedCourseLevel === level
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {level}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Admission Session */}
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Admission Session</label>
                    <div className="bg-gray-50 text-gray-600 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
                      2025-26
                    </div>
                  </div>

                  {/* Choose Program */}
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Choose Program <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base appearance-none bg-white"
                    >
                      <option value="">Choose Program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                  </div>

                  {/* Choose Specialization */}
                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Choose Specialization</label>
                    <select
                      value={selectedSpecialization}
                      onChange={(e) => setSelectedSpecialization(e.target.value)}
                      className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base appearance-none bg-white"
                    >
                      <option value="">Choose Specialization</option>
                      {specializations.map((spec) => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end mt-8 sm:mt-12">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleNext}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 sm:px-8 rounded-xl font-semibold flex items-center space-x-2 transition-colors text-sm sm:text-base"
                  >
                    <span>Next</span>
                    <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <AnimatePresence>
          <ChatbotAgent
            isOpen={isChatbotOpen}
            onClose={() => setIsChatbotOpen(false)}
            onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UniversityApplicationForm;