'use client'

const experiences = [
  {
    title: 'Multimodal OCR System',
    icon: 'fa-code',
    duration: 'AXONS, 2025',
    description:
      'สร้างระบบ OCR ขั้นสูงเพื่อประมวลผลเอกสารไทยแบบมีโครงสร้าง (ฟอร์ม, ตาราง, ใบแจ้งหนี้) โดยใช้ Vision-Language Models และปรับปรุง CER ได้ 23.16%',
  },
  {
    title: 'Speech-to-Text & Classification',
    icon: 'fa-headphones',
    duration: 'SCBx Call Center, 2025',
    description:
      'พัฒนาระบบ ASR และการจำแนกมาตรฐาน (Criteria Classification) สำหรับศูนย์บริการลูกค้า สาขาไทย โดยใช้ NVIDIA Triton และ FastAPI',
  },
  {
    title: 'Demand Forecasting',
    icon: 'fa-chart-line',
    duration: 'CPALL, 2025',
    description:
      'สร้างโมเดลการพยากรณ์ความต้องการสินค้าแบบปลีก จาก Real-world Data ขนาด 2023-2025 บรรลุ WAPE 0.42',
  },
  {
    title: 'LLM & Fine-tuning',
    icon: 'fa-brain',
    duration: 'Super AI Engineer Season 5, 2025',
    description:
      'ใช้งาน LLM (Qwen 7B/14B) บน GPU H100 ที่ Siam AI สำหรับการวิเคราะห์และการ Chain-of-Thought Prompting',
  },
  {
    title: 'Pulse-based Biometric',
    icon: 'fa-pulse',
    duration: 'KBTG x SAMSUNG Hackathon, 2026',
    description:
      'ปรับปรุงระบบการระบุตัวบุคคลจากสัญญาณนาด (Pulse Signal) โดยใช้ BiLSTM + Attention บรรลุ FAR/EER 13.16%',
  },
  {
    title: 'AI Education',
    icon: 'fa-graduation-cap',
    duration: 'ITCAMP, 2026 - ปัจจุบัน',
    description:
      'ออกแบบและสอนหลักสูตร AI/ML ให้กับนักเรียนมัธยมปลายกว่า 100 คน สร้างเอกสารและ Notebook ที่ใช้งานจริง',
  },
]

export default function WhatIDo() {
  return (
    <section id="experience" className="bg-gray-50 px-[5%] py-20 lg:py-32">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">ทำอะไรมาบ้าง</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:translate-y-[-5px] transition-all"
          >
            <h3 className="text-blue-500 mb-2 text-lg font-semibold flex items-center gap-3">
              <i className={`fas ${exp.icon}`}></i>
              {exp.title}
            </h3>
            <div className="text-gray-500 text-sm mb-4">{exp.duration}</div>
            <p className="text-gray-600 text-sm leading-6">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
