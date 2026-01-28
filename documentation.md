# Public Bus Crowd Visibility - Documentation

## What Crowd Problem You Solved

This project addresses the common issue where people traveling on public buses do not know the crowd levels before boarding. This leads to unnecessary waiting, rushing, pushing, and missing buses during peak hours, office commutes, college routes, festivals, etc. The core problem is "crowd uncertainty" which causes stress and inefficiency in public transport.

## How People Use Your Project

Users can access the web app and search for buses by bus number or route. The app displays a list of buses with their current crowd levels indicated by color-coded visual indicators:

- Green: Low crowd (safe to board)
- Yellow: Medium crowd (moderate)
- Red: High crowd (very crowded, consider waiting)

Each bus card now shows detailed information including:
- Number of empty seats available
- Standing space availability
- Rush hour crowd levels
- Indicator if the bus is full

The search functionality allows quick filtering to find specific buses.

## How Uncertainty Is Reduced

The app provides clear, visual feedback on bus crowd levels, eliminating guesswork. Users can make informed decisions about which bus to take or whether to wait for a less crowded one, reducing the stress of boarding overcrowded buses and improving overall travel experience. Detailed seat and standing information helps users plan their journey better, especially during rush hours.

## What New Idea You Added

- Simulated real-time crowd data with dynamic updates (in a real app, this would connect to bus sensors or crowd monitoring systems)
- Intuitive color-coded crowd indicators for quick understanding
- Search functionality to find buses by number or route, making it user-friendly for different scenarios
- Detailed crowd metrics: empty seats, standing space, rush hour indicators, and full bus alerts

## Tech and Tools Used While Coding

- **React**: For building the user interface with components like BusCard and search functionality
- **JavaScript**: Core language for logic and state management
- **CSS**: For styling the app, including responsive design and color indicators
- **Create React App**: For project setup and build tools
- **Vercel**: For deployment and hosting the live application
- **Git**: For version control

## Time Taken to Complete the Task

Approximately 1 day (including planning, development, testing, and deployment)

## Live Vercel URL

https://bus-crowd-app.vercel.app/ (Note: Deploy manually after Vercel login)
