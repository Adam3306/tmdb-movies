# TMDB Movies App

A modern, professional web app to browse, search, and view details for movies using The Movie Database (TMDB) API.

## Features

- Infinite scroll for popular movies
- Search with instant results and skeleton loading
- Movie details page with genres, rating, runtime, and more
- Prefetching for instant navigation
- Responsive, accessible, and beautiful UI
- Error boundaries and custom 404 page
- Fully typed with TypeScript
- Unit tests for API utilities

## Screenshots

<!-- Add screenshots here -->

## Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your-username/tmdb-movies.git
   cd tmdb-movies
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and add your TMDB API key.
   ```sh
   cp .env.example .env.local
   # Edit .env.local and set NEXT_PUBLIC_TMDB_API_KEY
   ```
4. **Run the app:**
   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint code
- `npm run test` — Run unit tests

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
