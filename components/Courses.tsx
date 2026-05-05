'use client'

const courses = [
  {
    title: 'Python Fundamentals',
    icon: 'fab fa-python',
    hours: '8 ชั่วโมง',
    price: '฿2,990',
    description:
      'ผู้ที่ต้องการเริ่มต้นเรียน Python จากพื้นฐาน เหมาะสำหรับนักเรียนมัธยมและผู้ที่เปลี่ยนอาชีพมายัง Data Science',
    curriculum: 'ตัวแปร, ลูป, ฟังก์ชัน, OOP, Pandas, NumPy, Data Visualization',
    outcome: 'ความสามารถในการเขียนโค้ด Python สำหรับ Data Analysis',
  },
  {
    title: 'SQL Basics',
    icon: 'fas fa-database',
    hours: '3 ชั่วโมง',
    price: '฿1,790',
    description:
      'ผู้ที่ต้องการเรียน SQL พื้นฐาน สำหรับการจัดการและวิเคราะห์ข้อมูลจากฐานข้อมูล',
    curriculum: 'SELECT, WHERE, JOIN, GROUP BY, Aggregation, Subqueries',
    outcome: 'ทักษะในการสร้างและจัดการ Database Query ได้อย่างมีประสิทธิภาพ',
  },
  {
    title: 'AI Beginner (Machine Learning)',
    icon: 'fas fa-robot',
    hours: '5 ชั่วโมง',
    price: '฿2,490',
    description:
      'ผู้ที่สนใจเรียน Machine Learning ด้วย Sklearn สำหรับข้อมูลแบบตาราง',
    curriculum: 'Classification, Regression, Model Evaluation, Cross-validation, Hyperparameter Tuning',
    outcome: 'ความเข้าใจเกี่ยวกับอัลกอริทึม ML และการสร้างโมเดลที่มีประสิทธิภาพ',
  },
  {
    title: 'Math for AI',
    icon: 'fas fa-calculator',
    hours: '4 ชั่วโมง',
    price: '฿1,290',
    description: 'ผู้ที่ต้องการเข้าใจรากฐานทางคณิตศาสตร์สำหรับ AI และ Machine Learning',
    curriculum: 'Linear Algebra, Calculus, Probability & Statistics, Matrix Operations',
    outcome: 'ความรู้พื้นฐานทางคณิตศาสตร์ที่จำเป็นสำหรับ Deep Learning และ Advanced AI',
  },
  {
    title: 'AI Advanced (LLM, Fine-tuning, CV)',
    icon: 'fas fa-star',
    hours: '10 ชั่วโมง',
    price: '฿5,000',
    description:
      'ผู้ที่มีพื้นฐาน ML แล้วและต้องการเรียน Large Language Models, Fine-tuning, และ Computer Vision',
    curriculum: 'Prompt Engineering, Fine-tuning LLMs, Vision Transformers, OCR, Multimodal Models',
    outcome: 'ทักษะสูง ในการสร้าง Production-grade AI Systems ที่ใช้ LLM และ Vision AI',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="px-[5%] py-20 max-w-6xl mx-auto lg:py-32">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">คอร์สเรียนของผม</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:translate-y-[-5px] transition-all"
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                <i className={course.icon}></i> {course.title}
              </h3>
              <div className="flex gap-5 text-sm">
                <span className="flex items-center gap-1">
                  <i className="fas fa-clock"></i> {course.hours}
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-video"></i> Self-paced
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-5">
                <strong className="block text-gray-900 mb-1">สำหรับใคร:</strong>
                <p className="text-gray-600 text-sm leading-6">{course.description}</p>
              </div>

              <div className="mb-5">
                <strong className="block text-gray-900 mb-1">เนื้อหา:</strong>
                <p className="text-gray-600 text-sm leading-6">{course.curriculum}</p>
              </div>

              <div className="mb-5">
                <strong className="block text-gray-900 mb-1">สิ่งที่คุณจะได้:</strong>
                <p className="text-gray-600 text-sm leading-6">{course.outcome}</p>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-5">
                <div className="text-2xl font-bold text-blue-500">{course.price}</div>
                <button className="bg-blue-500 text-white px-5 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                  สมัครเรียน
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
