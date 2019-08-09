import { createContext, useContext } from 'react'
import { BehaviorSubject } from 'rxjs'

export interface Post {
    title: string
    id: string
}

export interface PostStore {
    posts: BehaviorSubject<Post[]>
    add: (title: string) => void
}

export interface HelloContext {
    postStore: PostStore
}

export const ComponentContext = createContext<HelloContext>(null);
export const ComponentProvider = ComponentContext.Provider;

export const useComponentContext = () => useContext(ComponentContext);