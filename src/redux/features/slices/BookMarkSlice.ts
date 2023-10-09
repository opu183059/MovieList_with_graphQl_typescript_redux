import { createSlice } from "@reduxjs/toolkit"

interface episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string
}

interface todoList {
    episodes: episode[]
}

const initialState: todoList = {
    episodes: []
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
                characters: action.payload.characters,
            }
            state.episodes.push(episodeData)
        },
        removeBookmark: (state, action) => {
            state.episodes = state.episodes.filter((todo) => (todo.id != action.payload))
        }
    }
})

export const { addBookmark, removeBookmark } = BookMarkSlice.actions
export default BookMarkSlice.reducer