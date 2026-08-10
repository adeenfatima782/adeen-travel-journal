# Backend Setup

## 1. Install karo
```
cd backend
npm install
```

## 2. .env check karo
`.env` mein Mongo URI already hai. Bas `JWT_SECRET` ko kisi random lambi
string se replace kar dena.

## 3. Apna admin account banao (sirf ek dafa)
Koi public signup/register nahi hai — sirf tum hi admin ho. Terminal se:
```
npm run create-admin -- "Adeen Fatima" you@email.com yourpassword123
```
Ye seedha MongoDB mein tumhara Admin account bana dega.

## 4. Server chalao
```
npm run dev
```
"Connected to MongoDB Successfully! 🎉" aur "Server is running on
http://localhost:5000" dikhna chahiye.

## 5. Admin login
Frontend pe `/admin/login` khol ke wahi email/password use karo jo
step 3 mein diya tha.

## 6. Routes ka overview

| Section      | Public routes                          | Admin-only routes                                    |
|---------------|-----------------------------------------|--------------------------------------------------------|
| Auth          | POST /api/auth/login                    | GET /api/auth/me                                       |
| Blog Posts    | GET /api/posts, GET /api/posts/:slug, PATCH /api/posts/:id/like | GET /api/posts/admin/all, POST/PUT/DELETE /api/posts |
| Gallery       | GET /api/gallery, GET /api/gallery/:slug, PATCH .../photos/:id/like | GET /api/gallery/admin/all, POST/PUT/DELETE /api/gallery |
| Travel Journal| GET /api/journeys, GET /api/journeys/:slug | GET /api/journeys/admin/all, POST/PUT/DELETE /api/journeys |
| Explore       | GET /api/destinations, GET /api/destinations/:slug | GET /api/destinations/admin/all, POST/PUT/DELETE /api/destinations |
| Contact       | POST /api/contact                       | GET /api/contact, PATCH /:id/read, DELETE /:id          |

Admin-only routes ke liye header mein token bhejna hota hai:
```
Authorization: Bearer <token>
```

## Frontend admin dashboard
`/admin/login` se login karo, phir `/admin/dashboard` pe:
- **Blogs** — posts create/edit/delete
- **Gallery** — albums create/edit/delete (photos JSON format mein)
- **Travel Journal** — journal entries create/edit/delete
- **Explore** — destinations create/edit/delete
- **Messages** — contact form se aaye messages dekhna, read/delete

## Note
Explore page ke kuch chhote widgets (Emergency Contacts, Nearby Places,
Route Info, Distance Calculator, Local Culture, Things To Avoid, Budget
Tiers) abhi bhi static data se hain — ye per-destination "posts" nahi
balke website-wide reference/config content hai jo kam badalta hai. Agar
in ko bhi backend se manage karna ho to bata dena, alag se bana denge.

## Security (naya)
- **Helmet** — security headers automatically lag jate hain
- **Rate limiting** — poore API pe 300 req/15min, login/setup pe 10 req/15min (brute-force se bachata hai), contact form pe 10 req/hour
- **Validation** — login, setup, contact form, aur sab content-create routes pe input validate hota hai

## Image Upload
`POST /api/upload` (admin only, form-data field name `image`) — JPG/PNG/WEBP/GIF, max 8MB.
Images `backend/uploads/` mein save hote hain aur `/uploads/<filename>` se serve hote hain.
Frontend admin forms mein ab file-picker hai, URL type nahi karna.

## Admin Account Setup (updated)
Do tareeqe hain:
1. **UI se (recommended)**: Frontend pe `/admin/setup` kholo — sirf tab tak kaam karega jab tak
   koi admin account na ho. Account banते hi ye page hamesha ke liye band ho jata hai.
2. **Terminal se**: `npm run create-admin -- "Naam" email password`

## Profile & Settings
Login ke baad `/admin/profile` (naam/email edit) aur `/admin/settings` (password change) available hain.
