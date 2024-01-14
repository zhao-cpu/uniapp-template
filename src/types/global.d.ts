declare namespace Global {
  /** 后端响应 */
  interface BackendResponse<T = any> {
    code: number;
    msg: string;
    data: T;
  }

  interface Local {
    user: string;
  }
}
