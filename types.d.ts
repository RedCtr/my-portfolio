declare module "react-rough-notation"
declare module "emoji-unicode"

type NavItemType = {
    text: string,
    href: string
}

type Movie = {
    id: number,
    movieName: string,
    movieImage: string,
    resolution: string,
    rating: number,
    releaseDate: number,
    type?: string,
    backgroundImage?: string,
    movieTrailer?: string,
    movieUrl?: string
}