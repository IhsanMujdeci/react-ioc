import { BehaviorSubject } from 'rxjs'
import { Post } from './post'

export class PostStore {
    posts = new BehaviorSubject<Post[]>([]);

    get value() {
        return this.posts.getValue()
    }

    add(title: string) {
        this.posts.next([
            new Post(title),
            ...this.value
        ])
    }
}
