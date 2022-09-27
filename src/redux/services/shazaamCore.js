import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazaamCoreApi = createApi({
    reducerPath: 'shazaamCoreApi', baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1", prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c4897d3b85mshdcb6631d3e17e66p1a1948jsn31877eaa5edb');
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongsRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: ({ artistId }) => `/artists/details?artist_id=${artistId}` }),
        getSongsByCountry: builder.query({ query: ({ countryCode }) => `/charts/country?country_code=${countryCode}` }),
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongsRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazaamCoreApi;