export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'm3mobile-manual.refined.site';
    url.protocol = 'https:';
    url.port = '';

    const newHeaders = new Headers(request.headers);
    newHeaders.set('Host', 'm3mobile-manual.refined.site');

    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: newHeaders,
      body: request.method !== 'GET' ? request.body : null,
      redirect: 'follow',
    });

    return fetch(newRequest);
  }
}
