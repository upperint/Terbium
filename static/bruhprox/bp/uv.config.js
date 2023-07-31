self.__uv$config = {
  prefix: "/bruhprox/bp/service/",
  bare: [
    "https://uv.studentportal.lol/",
    "https://uv.radon.games/",
    "https://uv.holyubofficial.net/",
    "https://tomp.app/",
    "https://flow-os.liquid.is-a.dev/bare/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/bruhprox/bp/uv.handler.js",
  client: "/bruhprox/bp/uv.client.js",
  bundle: "/bruhprox/bp/uv.bundle.js",
  config: "/bruhprox/uv/uv.config.js",
  sw: "/bruhprox/bp/uv.sw.js",
};
