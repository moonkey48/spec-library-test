# Sync & Sense - AI Travel Companion Mobile Prototype

나와 동승자의 여행 취향이 만나는 길

## About

This is a mobile app design prototype implementing the "Sync & Sense" travel companion service. The app uses AI to coordinate preferences between travel companions and provides just-in-time recommendations during the journey.

## Features

- **Onboarding**: Create personalized travel persona
- **Group Creation**: Invite companions and merge personas
- **AI Coordination**: Intelligent conflict resolution when preferences differ
- **Route Generation**: AI-generated itinerary with confidence scores
- **Journey Mode**: Driving-safe UI with JIT recommendations

## Tech Stack

- **React 18** with TypeScript
- **Framer Motion** - Smooth animations (300ms with cubic-bezier easing)
- **Tailwind CSS** - Custom design tokens from spec
- **React Router** - Screen navigation
- **Lucide React** - Icons

## Design System

Based on the original spec library:

- **Colors**: Sync Teal (#1275FF), Discovery Gradients, Glass Morphism
- **Typography**: Pretendard Variable (UI), Line Seed (AI Voice)
- **Spacing**: 16px (personal), 32px (consensus), 40px+ (driving mode)
- **Interactions**: 300ms transitions, 0.98x touch feedback

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Build

```bash
npm run build
```

## Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Vite settings
6. Click "Deploy"

### Environment

The project includes `vercel.json` configuration for optimal deployment:
- Auto-detects Vite framework
- Configures SPA routing (all routes → index.html)
- Build output: `dist/`

## Screen Flow

1. `/onboarding` - Preference selection
2. `/group` - Add companions
3. `/coordination` - AI conflict resolution
4. `/route` - View generated itinerary
5. `/journey` - Driving mode with JIT recommendations

## Notes

This is a front-end prototype focusing on UI, animations, and interactions only. No backend or actual data logic is implemented.
