self.__uv$config = {
  prefix: "/bp/service/",
  bare: [
    "https://tomp.app/",
    "https://flow-works.me/bare/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/bruhprox/bp/bp.handler.js",
  client: "/bruhprox/bp/bp.client.js",
  bundle: "/bruhprox/bp/bp.bundle.js",
  config: "/bruhprox/bp/bp.config.js",
  sw: "/bruhprox/bp/bp.sw.js",
};
