import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { Send, User, Phone, Calendar, MessageSquare } from 'lucide-react'

const LeadForm = () => {
    return (
        <section className="py-16 bg-brand-beige">
            <div className="container-max px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Info Side */}
                    <div className="md:w-1/3 bg-brand-pink p-8 text-brand-navy flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4">בואו נתחיל לתכנן!</h3>
                        <p className="font-semibold opacity-90 mb-6">
                            השאירו פרטים ונחזור אליכם עם הצעה מנצחת לאירוע שלכם.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Phone size={20} />
                                </div>
                                <span className="font-bold">050-0000000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <MessageSquare size={20} />
                                </div>
                                <span className="font-bold">זמינים גם בוואטסאפ</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-2/3 p-8 lg:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-brand-navy font-bold mb-2 mr-1">שם מלא</label>
                                    <div className="relative">
                                        <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="ישראל ישראלי"
                                            className="w-full pr-10 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-pink focus:border-2 focus:outline-none transition-colors font-semibold"
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block text-brand-navy font-bold mb-2 mr-1">טלפון</label>
                                    <div className="relative">
                                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            placeholder="050-0000000"
                                            className="w-full pr-10 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-pink focus:border-2 focus:outline-none transition-colors font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-brand-navy font-bold mb-2 mr-1">סוג האירוע</label>
                                <div className="relative">
                                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <select className="w-full pr-10 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-pink focus:border-2 focus:outline-none transition-colors font-semibold appearance-none bg-white">
                                        <option>חתונה</option>
                                        <option>בר/בת מצווה</option>
                                        <option>אירוע חברה</option>
                                        <option>ברית/ה</option>
                                        <option>אחר</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-brand-navy font-bold mb-2 mr-1">הודעה (אופציונלי)</label>
                                <textarea
                                    rows="3"
                                    placeholder="ספרו לנו קצת על האירוע..."
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-pink focus:border-2 focus:outline-none transition-colors font-semibold"
                                ></textarea>
                            </div>

                            <Button variant="primary" size="lg" className="w-full !rounded-full py-4 text-xl shadow-glow-md">
                                שלח פנייה <Send size={20} className="mr-2" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadForm
