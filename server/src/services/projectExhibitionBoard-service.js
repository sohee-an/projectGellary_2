import { projectExhibitionBoardModel } from '../db';

class ProjectExhibitionBoardService {
  constructor(projectExhibitionBoardModel) {
    this.projectExhibitionBoardModel = projectExhibitionBoardModel;
  }

  async addPost(postInfo) {
    const newPost = await this.projectExhibitionBoardModel.create(postInfo);
    return newPost;
  }

  async getPosts() {
    const posts = await this.projectExhibitionBoardModel.getAll();

    if (!posts) {
      throw new Error('목록을 불러올 수 없습니다.');
    }

    return posts;
  }

  async getPostById(postId) {
    const postById = await this.projectExhibitionBoardModel.findById(postId);

    if (!postById) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    return postById;
  }

  async getPostsByNickName(nickName) {
    const postsByNickName =
      await this.projectExhibitionBoardModel.findByNickName(nickName);

    if (!postsByNickName) {
      throw new Error('해당 유저가 작성한 글이 존재하지 않습니다.');
    }

    return postsByNickName;
  }

  async editPost(postId, toUpdate) {
    const originPost = await this.projectExhibitionBoardModel.findById(postId);

    if (!originPost) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    const editedPost = await this.projectExhibitionBoardModel.update({
      postId,
      update: toUpdate,
    });

    return editedPost;
  }

  async deletePost(postId) {
    const deletedPost = await projectExhibitionBoardModel.delete(postId);

    if (!deletedPost) {
      throw new Error('존재하지 않는 게시글입니다.');
    }

    return deletedPost;
  }
}

const projectExhibitionBoardService = new ProjectExhibitionBoardService(
  projectExhibitionBoardModel
);

export { projectExhibitionBoardService };
