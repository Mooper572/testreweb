'use client'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">T</span>
                            </div>
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                                TRINITY
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            บริษัทหลักทรัพย์ ทรีนีตี้ จำกัด พร้อมให้บริการด้านการลงทุนครบวงจร ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">เมนูลัด</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    เกี่ยวกับเรา
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    บริการของเรา
                                </Link>
                            </li>
                            <li>
                                <Link href="/fees" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    ค่าธรรมเนียม
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    ติดต่อเรา
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">บริการ</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/brokerage" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    นายหน้าซื้อขายหลักทรัพย์
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/advisory" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    ที่ปรึกษาการลงทุน
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ipo" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    บริการ IPO
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">ติดต่อสอบถาม</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-500 text-sm">
                                <span className="block font-medium text-gray-900 mb-1">สำนักงานใหญ่</span>
                                179 อาคารบางกอกซิตี้ทาวเวอร์ ชั้น 25-26, 29 ถนนสาทรใต้ แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพฯ 10120
                            </li>
                            <li className="text-gray-500 text-sm">
                                <span className="block font-medium text-gray-900 mb-1">โทรศัพท์</span>
                                0-2088-9100, 0-2343-9500
                            </li>
                            <li className="text-gray-500 text-sm">
                                <span className="block font-medium text-gray-900 mb-1">อีเมล</span>
                                center@trinitythai.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Trinity Securities. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-purple-600 text-sm transition-colors">
                            นโยบายความเป็นส่วนตัว
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-purple-600 text-sm transition-colors">
                            ข้อกำหนดและเงื่อนไข
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
