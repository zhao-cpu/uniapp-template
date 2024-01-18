import { BASE_URL } from '@/utils/config';

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    /** 拼接非 http 请求地址 */
    if (!options.url.startsWith('http')) options.url = import.meta.env.VITE_BASE_API + options.url;
    /** 请求超时时间 */
    options.timeout = 10 * 1000;
    /** 添加 token */
    const token = uni.getStorageSync('token');
    if (token) options.header.Authorization = `Bearer ${token}`;
  },
};

uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);

const request = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Global.BackendResponse<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: res => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Global.BackendResponse<T>);
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Global.BackendResponse<T>).msg || '请求错误',
          });
          reject(res);
        }
      },
      fail: err => {
        uni.showToast({ icon: 'none', title: err?.errMsg ?? '网络错误' });
        reject(err);
      },
    });
  });
};

/**
 * 上传文件
 * @param options
 * @returns
 * eg:
 *
 * await uploadFile({
 *
 * 	url: "/api/upload",
 *
 * 	filePath: res.tempFilePaths[0],
 *
 * 	name: "file",
 * });
 */

const uploadFile = (options: UniApp.UploadFileOption) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...options,
      success(res) {
        const data = JSON.parse(res.data);
        if (data?.code !== 0) {
          return uni.showToast({ title: data?.msg, icon: 'none' });
        }
        return resolve(data);
      },
      fail(error) {
        reject(error);
      },
    });
  });
};

export { request, uploadFile };
