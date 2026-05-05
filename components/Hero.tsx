'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about" className="grid grid-cols-2 gap-12 px-[5%] py-20 max-w-6xl mx-auto lg:py-32">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
          สอนพิเศษ Python, SQL & AI
        </h1>
        <p className="text-lg text-gray-600 mb-4 leading-7">
          สวัสดี ผมชื่อแคลวิณ นักเรียนชั้นปีที่ 3 สาขา AI Engineering จาก KMITL พร้อมสอนให้ความรู้จากประสบการณ์จริงในโลกของ Data Science และ AI
        </p>

        <div className="bg-gray-50 p-5 rounded-lg my-8">
          <div className="mb-4 flex gap-4">
            <div className="text-blue-500 text-xl min-w-[30px]">
              <i className="fas fa-briefcase"></i>
            </div>
            <div>
              <strong className="block text-gray-900">Data Scientist Intern</strong>
              <span className="text-gray-600 text-sm">AXONS (CPF IT Center) | กรกฎาคม - กันยายน 2025</span>
            </div>
          </div>

          <div className="mb-4 flex gap-4">
            <div className="text-blue-500 text-xl min-w-[30px]">
              <i className="fas fa-award"></i>
            </div>
            <div>
              <strong className="block text-gray-900">Super AI Engineer Level 2</strong>
              <span className="text-gray-600 text-sm">AI Association of Thailand | เหรียญสีทองแดง</span>
            </div>
          </div>

          <div className="mb-4 flex gap-4">
            <div className="text-blue-500 text-xl min-w-[30px]">
              <i className="fas fa-trophy"></i>
            </div>
            <div>
              <strong className="block text-gray-900">1st Place Winner - Smart Living & PropTech Hackathon</strong>
              <span className="text-gray-600 text-sm">PINUP - AI Platform สำหรับการวิเคราะห์กฎหมายการจัดโครงสร้างพื้นที่เมือง</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-blue-500 text-xl min-w-[30px]">
              <i className="fas fa-chalkboard-user"></i>
            </div>
            <div>
              <strong className="block text-gray-900">Teaching Director</strong>
              <span className="text-gray-600 text-sm">ITCAMP ที่ IT KMITL - สอน AI/ML ให้นักเรียนมัธยมปลาย 100+ คน</span>
            </div>
          </div>
        </div>

        <div id="contact" className="flex gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <i className="fab fa-instagram text-blue-500 text-xl w-6 text-center"></i>
            <a
              href="https://instagram.com/kanin_calvin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              @kanin_calvin
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-phone text-blue-500 text-xl w-6 text-center"></i>
            <span className="text-gray-700">081-209-6847</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-80 h-96">
          <Image
            src="/Calvin_Profile_normal.png"
            alt="คาลวิน"
            fill
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
