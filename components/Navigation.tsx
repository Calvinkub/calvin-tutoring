'use client'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-100 flex justify-between items-center px-[5%] py-5 bg-white border-b border-gray-100">
      <div className="text-2xl font-bold text-gray-900">คาลวิน</div>
      <ul className="flex gap-8 list-none">
        <li>
          <a href="#about" className="text-gray-600 text-sm hover:text-blue-500 transition-colors">
            เกี่ยวกับตัวเอง
          </a>
        </li>
        <li>
          <a href="#experience" className="text-gray-600 text-sm hover:text-blue-500 transition-colors">
            ประสบการณ์
          </a>
        </li>
        <li>
          <a href="#courses" className="text-gray-600 text-sm hover:text-blue-500 transition-colors">
            คอร์สเรียน
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-600 text-sm hover:text-blue-500 transition-colors">
            ติดต่อ
          </a>
        </li>
      </ul>
    </nav>
  )
}
