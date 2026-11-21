export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'miguel-carretero-portfolio.miguel-carretero.workers.dev') {
      url.protocol = 'https:';
      url.hostname = 'carreteromiguel.com';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
