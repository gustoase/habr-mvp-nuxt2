import { IService, TPost } from '~/demo/business/post/Domain';

export default class Service implements IService {
  async fetchListPosts(): Promise<TPost[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  }
}
