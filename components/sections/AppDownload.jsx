'use client'

import { Download, QrCode } from 'lucide-react'

export default function AppDownload() {
    return (
        <section className="bg-gray-900 py-20 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-pink-900/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            แอปพลิเคชัน <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Trinity</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                            ลงทุนได้ทุกที่ ทุกเวลา ด้วยแอปพลิเคชันที่ทันสมัย ใช้งานง่าย
                            รองรับทั้งระบบ iOS และ Android
                            พร้อมฟีเจอร์เด่นมากมายที่จะช่วยให้การลงทุนเป็นเรื่องง่าย
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            {/* QR Code */}
                            <div className="bg-white p-3 rounded-xl shadow-lg">
                                <QrCode className="w-24 h-24 text-gray-900" />
                                <p className="text-xs text-center mt-1 text-gray-500">Scan to Download</p>
                            </div>

                            {/* Buttons */}
                            <div className="space-y-3">
                                <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg border border-gray-700 transition-colors w-48">
                                    <div className="mr-3">
                                        <svg viewBox="0 0 384 512" width="20" fill="currentColor">
                                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 43.7-24.9 63.9 20.5 1.5 48.3-13.4 68.8-26.3z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400">Download on the</div>
                                        <div className="text-sm font-bold font-sans">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg border border-gray-700 transition-colors w-48">
                                    <div className="mr-3">
                                        <svg viewBox="0 0 512 512" width="20" fill="currentColor">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400">GET IT ON</div>
                                        <div className="text-sm font-bold font-sans">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Phone Image Mockup */}
                    <div className="hidden lg:block w-1/2 relative">
                        {/* We can re-use HeroMockup logic or a simpler image here */}
                        <div className="relative mx-auto w-64 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="relative bg-gray-800 rounded-[2.5rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl">
                                <div className="aspect-[9/19] bg-gradient-to-b from-gray-900 to-black p-4 flex flex-col justify-center items-center text-white">
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                                        <span className="text-2xl font-bold">T</span>
                                    </div>
                                    <h3 className="text-lg font-bold">Trinity</h3>
                                    <p className="text-sm text-gray-400">Mobile Trading</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
