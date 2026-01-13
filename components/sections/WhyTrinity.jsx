'use client'

import { BarChart2, Briefcase, FileText, LineChart, PieChart, TrendingUp } from 'lucide-react'

export default function WhyTrinity() {
    const features = [
        {
            title: 'ทันโลก',
            description: 'ข่าวสารวิเคราะห์เจาะลึก ทันสถานการณ์การลงทุน',
            icon: BarChart2,
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            title: 'คุ้มค่า',
            description: 'อัตราค่าธรรมเนียมที่เหมาะสม พร้อมบริการที่คุ้มค่า',
            icon: LineChart,
            gradient: 'from-purple-500 to-indigo-500'
        },
        {
            title: 'อุ่นใจ',
            description: 'ทีมงานมืออาชีพคอยดูแลให้คำปรึกษาตลอดการลงทุน',
            icon: Briefcase,
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'ทันใจ',
            description: 'ระบบซื้อขายรวดเร็ว เสถียร แม่นยำ ทุกคำสั่ง',
            icon: TrendingUp,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            title: 'รู้จริง',
            description: 'บทวิเคราะห์คุณภาพจากนักวิเคราะห์ประสบการณ์สูง',
            icon: PieChart,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'จริงใจ',
            description: 'ยึดมั่นในจรรยาบรรณ และผลประโยชน์ของลูกค้าเป็นสำคัญ',
            icon: FileText,
            gradient: 'from-violet-500 to-purple-500'
        }
    ]

    return (
        <section id="why-trinity" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ทำไมต้องเปิดพอร์ตหุ้นกับ <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Trinity</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        เราพร้อมสนับสนุนทุกเป้าหมายการลงทุนของคุณ ด้วยบริการที่ครบวงจร
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
