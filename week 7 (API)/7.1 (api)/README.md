# Profile Generator Component

A modern, responsive profile generator built with React, featuring state management with Recoil and a beautiful turquoise/white design theme.

## Features

✅ **Responsive Design**: Adapts perfectly to desktop, tablet, and mobile screens  
✅ **Real-time Profile Editing**: Live updates using Recoil state management  
✅ **Component-based Architecture**: Modular, reusable components  
✅ **Lazy Loading**: Optimized performance with React.lazy  
✅ **Modern UI**: Clean turquoise/white color scheme  
✅ **React Router Integration**: Seamless navigation  
✅ **TypeScript Ready**: Full support for TypeScript development

## Components

### Core Components
- `ProfileGenerator` - Main container component
- `ProfileHeader` - User image, name, and location display
- `StatsDisplay` - Interactive statistics cards (Followers, Likes, Photos)
- `UserInfo` - Real-time profile editing form

### State Management
- Uses Recoil for global state management
- `profileState` atom manages all profile data
- Real-time updates across all components

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Recoil** - State management for React
- **React Router DOM** - Client-side routing
- **CSS3** - Modern styling with flexbox/grid

## Usage Example

```jsx
import ProfileGenerator from './components/ProfileGenerator';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfileGenerator />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
```

## Responsive Breakpoints

- **Desktop**: > 768px - Full grid layout
- **Tablet**: 481px - 768px - Adjusted spacing
- **Mobile**: ≤ 480px - Single column layout

## Performance Features

- Lazy loading of components
- Optimized bundle splitting
- Modern CSS with efficient selectors
- Image fallbacks for broken URLs

## Project Structure

```
src/
├── components/
│   ├── ProfileGenerator.jsx
│   ├── ProfileHeader.jsx
│   ├── StatsDisplay.jsx
│   ├── UserInfo.jsx
│   └── profileState.js
├── App.jsx
├── App.css
└── main.jsx
```

## Week 7 Concepts Demonstrated

This project showcases key concepts from Week 7 of the 100xdevs cohort:

1. **React Router** - Navigation between components
2. **State Management** - Using Recoil for complex state
3. **Lazy Loading** - Performance optimization
4. **Component Architecture** - Avoiding prop drilling
5. **Modern React Patterns** - Hooks and functional components

Built with ❤️ for the 100xdevs cohort