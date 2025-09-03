# 🚀 Quick Deployment Guide

Get your Todo MVP live in under 5 minutes with Vercel!

## 🎯 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Srijan-Ratrey/To-do-Webapp.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository: `Srijan-Ratrey/To-do-Webapp`
5. Set environment variable: `MONGODB_URI`
6. Click "Deploy"

### Step 3: Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account
3. Create cluster (choose "Shared" - free tier)
4. Create database user
5. Whitelist IP (0.0.0.0/0 for development)
6. Get connection string
7. Add to Vercel environment variables

**That's it! Your app is live! 🎉**

---

## 📁 Project Structure
```
To-do-Webapp/
├── server.js              # Express server
├── package.json           # Dependencies
├── public/                # Frontend
│   ├── index.html         # Main page
│   ├── styles.css         # Styling
│   └── script.js          # JavaScript
├── vercel.json           # Vercel config
├── env.example           # Environment template
├── README.md             # Documentation
└── QUICK-DEPLOY.md       # This guide
```

## 🗄️ MongoDB Atlas Setup

1. **Create Account**: [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose "Shared" (free)
3. **Create User**: Database Access → Add User
4. **Whitelist IP**: Network Access → Add IP (0.0.0.0/0)
5. **Get Connection String**: Clusters → Connect → Connect your application

Example connection string:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/todo-mvp?retryWrites=true&w=majority
```

## 🔧 Environment Variables

Set these on your deployment platform:
- `MONGODB_URI`: Your MongoDB connection string
- `NODE_ENV`: `production`

## 🎉 You're Done!

Your Todo MVP will be live and ready to use. The app includes:
- ✅ Create, read, update, delete tasks
- ✅ Beautiful responsive UI
- ✅ Real-time task statistics
- ✅ Mobile-friendly design
- ✅ Production-ready code

**Need help?** Check the main [README.md](README.md) for more details!
