import { fetchPopularMovies, searchMovies, fetchMovieDetails } from "./tmdb";

global.fetch = jest.fn();

describe("TMDB API utilities", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetchPopularMovies returns movies on success", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: [
          {
            id: 1,
            title: "Test Movie",
            release_date: "2020-01-01",
            poster_path: "/test.jpg",
            vote_average: 8.5,
          },
        ],
      }),
    });
    const movies = await fetchPopularMovies(1);
    expect(movies[0].title).toBe("Test Movie");
  });

  it("fetchPopularMovies throws on error", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(fetchPopularMovies(1)).rejects.toThrow(
      "Failed to fetch popular movies"
    );
  });

  it("searchMovies returns movies on success", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        results: [
          {
            id: 2,
            title: "Search Movie",
            release_date: "2021-01-01",
            poster_path: "/search.jpg",
            vote_average: 7.2,
          },
        ],
      }),
    });
    const movies = await searchMovies("search");
    expect(movies[0].title).toBe("Search Movie");
  });

  it("searchMovies throws on error", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(searchMovies("fail")).rejects.toThrow(
      "Failed to search movies"
    );
  });

  it("fetchMovieDetails returns details on success", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 3,
        title: "Details Movie",
        genres: [],
        overview: "",
        release_date: "",
        poster_path: "",
        vote_average: 5,
        runtime: 100,
        original_language: "en",
      }),
    });
    const details = await fetchMovieDetails("3");
    expect(details.title).toBe("Details Movie");
  });

  it("fetchMovieDetails throws on error", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });
    await expect(fetchMovieDetails("fail")).rejects.toThrow(
      "Failed to fetch movie details"
    );
  });
});
