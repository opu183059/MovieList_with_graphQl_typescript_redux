export interface singleEpisode {
    id: number | string
    name: string
    air_date: string
    episode: string
    characters: {
        name: string
        image: string
    }[]
}
export interface singleWatchList {
    id: number
    name: string
    air_date: string
    episode: string
    characters: {
        name: string
        image: string
    }[]
    status: string
}