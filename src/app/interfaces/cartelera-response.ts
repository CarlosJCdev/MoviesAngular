export interface CarteleraMovies {
    page:          number;
    total_results: number;
    dates:         Dates;
    total_pages:   number;
    results:        Movie[];
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movie {
    vote_average:      number;
    popularity:        number;
    vote_count:        number;
    release_date:      Date;
    title:             string;
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    overview:          string;
    original_language: string;
    original_title:    string;
    poster_path:       string;
    id:                number;
    video:             boolean;
}
