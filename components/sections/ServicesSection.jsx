'use client'

import React from 'react'
import { ArrowRight, BarChart, BookOpen, Coins } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
    const services = [
        {
            title: 'Securities Brokerage',
            description: 'บริการนายหน้าซื้อขายหลักทรัพย์ ครบวงจรทั้ง Online และ Offline',
            icon: BarChart,
            href: '/services/brokerage',
            color: 'text-pink-500',
            bg: 'bg-pink-50'
        },
        {
            title: 'Investment Advisory',
            description: 'บริการที่ปรึกษาการลงทุนส่วนบุคคล โดยผู้เชี่ยวชาญมืออาชีพ',
            icon: Coins,
            href: '/services/advisory',
            color: 'text-purple-600',
            bg: 'bg-purple-50'
        },
        {
            title: 'Investment Education',
            description: 'ศูนย์การเรียนรู้การลงทุน บทวิเคราะห์ และสัมมนา',
            icon: BookOpen,
            href: '/education',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50'
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        บริการของเรา
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            href={service.href}
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-purple-600 transition-colors">
                                อ่านเพิ่มเติม <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
