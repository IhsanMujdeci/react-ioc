import {PostStore} from "./context";
import Hello from "./hello";

export function helloFactory(postStore: PostStore) {
    return{
        Hello: Hello(postStore)
    }
}