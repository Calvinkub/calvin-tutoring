'use client'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 to-blue-100 px-[5%] py-20 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">ติดต่อกับผม</h2>
        <p className="text-lg text-gray-600 mb-16 leading-7">
          สนใจสอนพิเศษหรือมีคำถามเกี่ยวกับคอร์ส? สามารถติดต่อผมผ่านช่องทางต่างๆ ด้านล่าง
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="text-5xl mb-4 text-pink-600">
              <i className="fab fa-instagram"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">ติดตามข่าวสารและการสอนล่าสุด</p>
            <a
              href="https://instagram.com/kanin_calvin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              @kanin_calvin
            </a>
          </div>

          {/* Phone Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all">
            <div className="text-5xl mb-4 text-green-600">
              <i className="fas fa-phone"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">โทรศัพท์</h3>
            <p className="text-gray-600 mb-4">โทรหรือส่ง LINE ให้ผมได้เลย</p>
            <a
              href="tel:0812096847"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:shadow-lg transition-all"
            >
              081-209-6847
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">พร้อมเริ่มเรียนแล้วใช่ไหม?</h3>
          <p className="text-gray-600 mb-6">
            เลือกคอร์สที่สนใจและติดต่อผมเพื่อเรียนต่อไป
          </p>
          <a
            href="#courses"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all"
          >
            ดูคอร์สทั้งหมด
          </a>
        </div>
      </div>
    </section>
  )
}
