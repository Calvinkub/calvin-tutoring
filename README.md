# คาลวิน - สอนพิเศษ Python, SQL & AI

สวัสดี! เว็บไซต์นี้เป็นแพลตฟอร์มการสอนพิเศษสำหรับคอร์สเรียน Python, SQL, และ AI

## ลักษณะของเว็บไซต์

- **Clean & Minimalist Design** - ออกแบบแบบสะอาดและเรียบง่ายเหมือน DataRockie
- **Self-paced Video Courses** - คอร์สเรียนแบบดูวิดีโอตามความเร็วของคุณเอง
- **5 Courses Available** - Python, SQL, AI Beginner, Math for AI, AI Advanced
- **Responsive** - ใช้ได้ดีบนโทรศัพท์และคอมพิวเตอร์

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Font Awesome 6** - Icons
- **Vercel** - Deployment platform

## ได้เริ่มต้นใช้งานอย่างไร

### 1. ติดตั้ง Dependencies

```bash
npm install
# หรือ
yarn install
```

### 2. รันเซิร์ฟเวอร์ Development

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

### 3. Build สำหรับ Production

```bash
npm run build
npm start
```

## Deploy ไป Vercel

### วิธีที่ 1: Connect GitHub (แนะนำ)

1. Push code ไปที่ GitHub repository
2. เข้า [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select repository ของคุณ
5. Click "Deploy"

### วิธีที่ 2: CLI Deployment

```bash
npm i -g vercel
vercel
```

## File Structure

```
website/
├── app/
│   ├── page.tsx           # Main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx           # Hero & About section
│   ├── WhatIDo.tsx        # Experience section
│   ├── Courses.tsx        # Courses section
│   └── Footer.tsx         # Footer
├── public/
│   └── Calvin_Profile_normal.png
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## แก้ไขเนื้อหา

- **เปลี่ยนข้อความ**: แก้ไขไฟล์ `.tsx` ในโฟลเดอร์ `components/` หรือ `app/`
- **เปลี่ยนรูปภาพ**: ใส่รูปใหม่ในโฟลเดอร์ `public/`
- **เปลี่ยนสี**: แก้ไข `tailwind.config.js`

## หากจำเป็นต้องทำการแก้ไขอื่นๆ

ติดต่อ: @kanin_calvin | 0812-096-847
