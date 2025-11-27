# EMS Frontend

React + Vite frontend application for the Employee Management System.

## Structure

```
ems/
├── src/
│   ├── components/     # React components
│   ├── context/        # React context (if using)
│   ├── utils/          # Utility functions
│   └── App.jsx        # Main application component
├── public/            # Static assets
├── index.html
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create `.env` file to configure API URL:
```env
VITE_API_URL=http://localhost:5000
```

If not set, it defaults to `http://localhost:5000`.

## Running

### Development
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root of the `ems` directory:

```env
VITE_API_URL=http://localhost:5000
```

Access in code:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

## Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Tailwind CSS** - Utility-first CSS framework

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Connecting to Backend

The frontend expects the backend to be running on `http://localhost:5000` by default.

Make sure the backend server is running before starting the frontend:

1. Terminal 1 (Backend):
```bash
cd ../server
npm run dev
```

2. Terminal 2 (Frontend):
```bash
npm run dev
```

## API Integration

Example API calls using axios:

```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Login
const response = await axios.post(`${API_URL}/api/auth/login`, {
  email: 'user@example.com',
  password: 'password123'
});

// Get employees
const employees = await axios.get(`${API_URL}/api/auth/employees`);
```

## Building for Production

1. Build the application:
```bash
npm run build
```

2. The output will be in the `dist/` folder

3. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)

4. Update the `VITE_API_URL` environment variable to point to your production backend URL

## Development Tips

- Use React DevTools for debugging
- Hot Module Replacement (HMR) is enabled by default
- Component changes reflect instantly without losing state
- Check browser console for errors

## Common Issues

### Backend Connection Issues
- Ensure backend is running on port 5000
- Check CORS configuration in backend
- Verify API_URL in your code

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## License

ISC
