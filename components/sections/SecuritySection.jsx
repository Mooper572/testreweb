'use client'

import { Shield, Lock, FileCheck } from 'lucide-react'

export default function SecuritySection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        เปิดพอร์ตลงทุน <br className="md:hidden" />
                        <span className="text-gray-900">อย่างปลอดภัยกับ </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Trinity</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-6">
                            <Shield className="w-10 h-10 text-pink-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">กำกับดูแลโดย ก.ล.ต.</h3>
                        <p className="text-gray-500 max-w-xs">
                            ได้รับใบอนุญาตประกอบธุรกิจหลักทรัพย์ถูกต้องตามกฎหมาย และอยู่ภายใต้การกำกับดูแลของ ก.ล.ต.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                            <FileCheck className="w-10 h-10 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">คุ้มครองตามหลัก PDPA</h3>
                        <p className="text-gray-500 max-w-xs">
                            เราให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของลูกค้า ตามมาตรฐาน PDPA
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                            <Lock className="w-10 h-10 text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ความปลอดภัยข้อมูล</h3>
                        <p className="text-gray-500 max-w-xs">
                            ระบบรักษาความปลอดภัยของข้อมูลขั้นสูง เพื่อความมั่นใจในการทำธุรกรรม
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
