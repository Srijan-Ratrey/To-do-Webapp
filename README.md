# Todo MVP - Deployable To-Do Application

A beautiful, full-stack to-do application built with Node.js, Express, MongoDB, and vanilla JavaScript. Deploy instantly to Vercel with zero configuration.

## 🚀 Features

- **Create Tasks**: Add new tasks with a simple input field
- **Read Tasks**: View all tasks in a clean, organized list
- **Update Tasks**: Mark tasks as complete/incomplete with checkboxes
- **Delete Tasks**: Remove tasks with a delete button
- **Real-time Stats**: See total and completed task counts
- **Responsive Design**: Works perfectly on desktop and mobile
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Technology Stack

- **Backend**: Node.js + Express.js + MongoDB + Mongoose
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Database**: MongoDB Atlas (cloud-hosted)
- **Deployment**: Vercel (serverless)

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub
```bash
git clone https://github.com/Srijan-Ratrey/To-do-Webapp.git
cd To-do-Webapp
git add .
git commit -m "Initial commit"
git push origin main
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
2. Create a free account
3. Create a new cluster (choose "Shared" - free tier)
4. Create a database user
5. Whitelist IP addresses (add `0.0.0.0/0` for development)
6. Get your connection string
7. Add it to Vercel environment variables as `MONGODB_URI`

**That's it! Your app is live! 🎉**

## 🏠 Local Development

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (free)

### Setup
1. **Clone and install**
   ```bash
   git clone https://github.com/Srijan-Ratrey/To-do-Webapp.git
   cd To-do-Webapp
   npm install
   ```

2. **Set up environment**
   ```bash
   cp env.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **Run locally**
   ```bash
   npm run dev  # Development mode with auto-reload
   npm start    # Production mode
   ```

4. **Access the app**
   Open `http://localhost:3000` in your browser

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example Usage
```javascript
// Create a task
fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Learn Vercel' })
});

// Get all tasks
fetch('/api/tasks');

// Update a task
fetch('/api/tasks/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ completed: true })
});

// Delete a task
fetch('/api/tasks/123', { method: 'DELETE' });
```

## 🗄️ Database Schema

```javascript
{
  _id: ObjectId,
  title: String (required),
  completed: Boolean (default: false),
  createdAt: Date (default: Date.now)
}
```

## 🚀 Why Vercel?

- **Zero Configuration**: Deploy with just a git push
- **Automatic Scaling**: Handles traffic spikes automatically
- **Global CDN**: Fast loading worldwide
- **Free Tier**: Generous limits for personal projects
- **GitHub Integration**: Automatic deployments on push
- **Environment Variables**: Easy secret management
- **Custom Domains**: Add your own domain for free

## 🔒 Security Features

- Input validation and sanitization
- CORS configuration
- Environment variable management
- HTTPS by default
- MongoDB Atlas security

## 📈 Performance

- **Serverless**: Automatic scaling
- **CDN**: Global content delivery
- **MongoDB Atlas**: Managed database with automatic backups
- **Optimized Assets**: Minified CSS and JavaScript

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your MongoDB Atlas connection string
   - Check that environment variables are set in Vercel
   - Ensure your IP is whitelisted in MongoDB Atlas

2. **Build Failures**
   - Check Vercel build logs
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

3. **Environment Variables**
   - Make sure `MONGODB_URI` is set in Vercel dashboard
   - Check that the connection string is correct
   - Redeploy after adding environment variables

### Getting Help
- Check Vercel deployment logs
- Test API endpoints with curl or Postman
- Verify MongoDB Atlas cluster status

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task prioritization
- [ ] Search and filtering
- [ ] Data export/import
- [ ] Real-time collaboration

## 📄 License

This project is licensed under the ISC License.

---

**Ready to deploy?** Follow the [Quick Deploy Guide](QUICK-DEPLOY.md) for step-by-step instructions!