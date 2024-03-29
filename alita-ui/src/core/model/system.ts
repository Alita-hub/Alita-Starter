export interface IPageRequest {
  pageSize: number;
  pageNum: number;
  orderBy?: string;
  search?: string;
  params?: any;
}

export interface IUser {
  id: number;
  nickname: string;
  avatar: string;
  gender: string;
  email: string;
  phone: string;
  introduce: string;
  status: string;
  createTime: string;
  updateTime: string;
}