'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-[5%] py-10 text-center">
      <p className="font-bold mb-2">คาลวิน - สอนพิเศษ Python, SQL & AI</p>
      <p className="text-gray-300 mb-6">ติดต่อ: 0812-096-847 | Instagram: @kanin_calvin</p>
      <div className="flex justify-center gap-5 mb-8">
        <a
          href="https://instagram.com/kanin_calvin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-blue-400 transition-colors"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="tel:0812096847" className="text-xl hover:text-blue-400 transition-colors">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      <p className="text-gray-400 text-sm">หลักสูตรแบบ Self-paced Video | เข้าเรียนได้ตลอดเวลา</p>
    </footer>
  )
}
