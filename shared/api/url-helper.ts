import http from './index';

// GET API
export const faceAuth = (params: any) => http.get('face', params);