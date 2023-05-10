import {Origin} from "./Origin";
import {Location} from "./Location";

export type Character = {
    id: number,
    name: string,
    origin: Origin,
    species:string,
    type:string,
    gender:string,
    status: string,
    image: string,
    location:Location,
    episode:string[],
    url:string,
    created:string
}