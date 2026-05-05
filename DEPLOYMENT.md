# การ Deploy ไป Vercel

ขั้นตอนง่ายๆ ในการ Deploy เว็บไซต์ของคุณไป Vercel

## ข้อต้องการ

- GitHub Account (ฟรี)
- Vercel Account (ฟรี)
- Project code ที่อยู่ใน GitHub repository

## ขั้นตอน

### 1. Push Code ไป GitHub

```bash
# ถ้าคุณยังไม่มี GitHub repository
# ไปที่ https://github.com/new และสร้าง repository ใหม่

# จากนั้นรันคำสั่งเหล่านี้ในโฟลเดอร์ของโปรเจค:
git remote add origin https://github.com/YOUR_USERNAME/calvin-tutoring.git
git branch -M main
git push -u origin main
```

### 2. Deploy ไป Vercel

1. ไปที่ [vercel.com](https://vercel.com)
2. Click "Sign Up" แล้วเลือก "Continue with GitHub"
3. Authorize Vercel เพื่อเข้าถึง GitHub account ของคุณ
4. Click "New Project"
5. ค้นหาและเลือก `calvin-tutoring` repository
6. Vercel จะตั้งค่าอัตโนมัติ:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. Click "Deploy"

### 3. ใช้งาน URL ของคุณ

หลังจาก Deploy สำเร็จ คุณจะได้รับ URL เช่น:
```
https://calvin-tutoring.vercel.app
```

## การอัปเดตเว็บไซต์

1. แก้ไขไฟล์ใน IDE
2. Commit แล้ว Push ไป GitHub:
```bash
git add .
git commit -m "Update: เปลี่ยนแปลง"
git push origin main
```
3. Vercel จะ auto-deploy โดยอัตโนมัติ!

## Troubleshooting

**ปัญหา**: Build failed
- **แก้ไข**: ตรวจสอบ console errors ใน Vercel Dashboard > Deployments > Logs

**ปัญหา**: รูปภาพไม่แสดง
- **แก้ไข**: ตรวจสอบว่ารูปภาพอยู่ใน folder `public/` ชื่อตรงตามใน code

**ปัญหา**: ต้องการเพิ่มโดเมนของตัวเอง
- **แก้ไข**: ใน Vercel Dashboard > Project Settings > Domains > Add Domain

## โดเมนปรับแต่ง (Optional)

ถ้าต้องการใช้โดเมนของตัวเองเช่น `calvin.com`:

1. เข้า Vercel Dashboard
2. ไปที่ Settings > Domains
3. ใส่โดเมนของคุณและทำตามคำแนะนำ

---

ต้องการความช่วยเหลือ? ติดต่อ: @kanin_calvin | 0812-096-847
