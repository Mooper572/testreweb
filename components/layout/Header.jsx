'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'หน้าหลัก', href: '/' },
        {
            name: 'บริการ',
            href: '/services',
            submenu: [
                { name: 'บริการนายหน้าซื้อขาย', href: '/services/brokerage' },
                { name: 'บริการให้คำปรึกษา', href: '/services/advisory' },
                { name: 'บริการ IPO', href: '/services/ipo' }
            ]
        },
        { name: 'ค่าธรรมเนียม', href: '/fees' },
        { name: 'ศูนย์การเรียนรู้', href: '/education' },
        { name: 'เกี่ยวกับเรา', href: '/about' },
    ]

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">T</span>
                        </div>
                        <span className="text-2xl font-bold text-gradient">TRINITY</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors flex items-center"
                                >
                                    {item.name}
                                    {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && (
                                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                            {item.submenu.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                                                >
                                                    {subitem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link href="/account/login" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                            เข้าสู่ระบบ
                        </Link>
                        <Link href="/account/register" className="btn-primary">
                            เปิดบัญชี
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-gray-700"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        {navigation.map((item) => (
                            <div key={item.name} className="py-2">
                                <Link
                                    href={item.href}
                                    className="block text-gray-700 hover:text-purple-600 font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <div className="pl-4 space-y-2 mt-2">
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.name}
                                                href={subitem.href}
                                                className="block text-sm text-gray-600 hover:text-purple-600 py-1"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subitem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
                            <Link href="/account/login" className="btn-secondary text-center">
                                เข้าสู่ระบบ
                            </Link>
                            <Link href="/account/register" className="btn-primary text-center">
                                เปิดบัญชี
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}