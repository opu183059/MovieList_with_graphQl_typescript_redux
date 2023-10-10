import { createSlice } from "@reduxjs/toolkit"

interface episode {
    id: number
    name: string
    air_date: string
    episode: string
    status: string
    characters: string
}

interface episodeList {
    episodes: episode[]
}

let episodesList = [];
// storedWatchlist = JSON.parse(localStorage.getItem("Watchlist"));
const storedWatchlist = JSON.parse(localStorage.getItem("Watchlist"));

if (storedWatchlist) {
    episodesList = storedWatchlist
}
const initialState: episodeList = {
    episodes: episodesList
}


export const BookMarkSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            const episodeData = {
                id: action.payload.id,
                name: action.payload.name,
                air_date: action.payload.air_date,
                episode: action.payload.episode,
                status: action.payload.status,
                characters: action.payload.characters,
            }
            state.episodes.push(episodeData)
            localStorage.setItem("Watchlist", JSON.stringify(state.episodes));
        },
        removeBookmark: (state, action) => {
            state.episodes = state.episodes.filter((episodeData) => (episodeData.id != action.payload))
            localStorage.setItem("Watchlist", JSON.stringify(state.episodes));
        },
        changeEpisodeStatus: (state, action) => {
            const { id, status } = action.payload;
            const episodeToChange = state.episodes.find(episode => episode.id === id);
            if (episodeToChange) {
                episodeToChange.status = status;
            }
            localStorage.setItem("Watchlist", JSON.stringify(state.episodes));
        }
    }
})

export const { addBookmark, removeBookmark, changeEpisodeStatus } = BookMarkSlice.actions
export default BookMarkSlice.reducer