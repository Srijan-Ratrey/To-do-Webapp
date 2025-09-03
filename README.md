# Todo MVP - A Deployable To-Do Application

A minimum viable product (MVP) for a to-do application with full CRUD functionality, built with Node.js, Express, MongoDB, and vanilla JavaScript.

## 🚀 Features

- **Create Tasks**: Add new tasks with a simple input field
- **Read Tasks**: View all tasks in a clean, organized list
- **Update Tasks**: Mark tasks as complete/incomplete with checkboxes
- **Delete Tasks**: Remove tasks with a delete button
- **Real-time Stats**: See total and completed task counts
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No framework dependencies
- **Responsive Design** - Mobile-first approach

### DevOps
- **Vercel** - Recommended deployment platform
- **Multiple Platform Support** - Heroku, Render, Railway, Netlify

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (free tier available)
- Git (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-mvp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your MongoDB connection string
   ```

4. **Set up MongoDB Atlas** (recommended)
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Get your connection string
   - Update `.env` file with your MongoDB URI

5. **Run the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 🌐 Deployment Options

### 🚀 Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Set `MONGODB_URI` environment variable
5. Deploy automatically!

### Heroku
1. Create a new Heroku app
2. Add MongoDB Atlas connection
3. Set environment variables in Heroku dashboard
4. Deploy using Git:
   ```bash
   git push heroku main
   ```

### Render
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add MongoDB environment variable
5. Deploy automatically on push

### Railway
1. Connect your GitHub repository
2. Add MongoDB database
3. Set environment variables
4. Deploy automatically

> **📖 For detailed deployment instructions, see [DEPLOYMENT-NO-DOCKER.md](DEPLOYMENT-NO-DOCKER.md)**

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### Example API Usage

```javascript
// Create a task
fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Learn Docker' })
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

## 🚀 Performance & Scalability

### Current Features
- Serverless deployment ready
- MongoDB Atlas integration
- Responsive frontend
- RESTful API design

### Scaling Considerations
- **Database**: MongoDB Atlas handles scaling automatically
- **Serverless**: Vercel/Render provide automatic scaling
- **CDN**: Static assets served from global CDN
- **Monitoring**: Built-in platform monitoring

## 🔒 Security Considerations

### Current Security Features
- Input validation and sanitization
- CORS configuration
- Environment variable management
- HTTPS by default on deployment platforms

### Recommended Enhancements
- Add rate limiting
- Implement user authentication
- Input sanitization for XSS prevention
- Database connection encryption

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run with coverage
npm run test:coverage
```

## 📈 Monitoring & Logging

### Health Check
The application includes a health check endpoint at `/api/tasks` that returns HTTP 200 when healthy.

### Logging
- Application logs are output to stdout
- Platform-specific logging (Vercel, Render, etc.)
- Consider structured logging with JSON format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify MongoDB Atlas connection string
   - Check environment variables are set correctly
   - Ensure network connectivity

2. **Port Already in Use**
   - Change PORT in environment variables
   - Kill existing process: `lsof -ti:3000 | xargs kill -9`

3. **Deployment Issues**
   - Check build logs in platform dashboard
   - Verify environment variables are set
   - Ensure all dependencies are in package.json

### Getting Help
- Check platform-specific logs (Vercel, Render, etc.)
- Verify environment variables
- Test API endpoints with curl or Postman

## 🎯 Post-MVP Roadmap

- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task prioritization
- [ ] Search and filtering
- [ ] Data export/import
- [ ] Mobile app (React Native)
- [ ] Real-time collaboration
- [ ] Advanced analytics and reporting
