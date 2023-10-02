self.__uv$config = {
  prefix: "/bp/service/",
  bare: [
    "https://tomp.app/",
    "https://flow-works.me/bare/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/bp/bp.handler.js",
  client: "/bp/bp.client.js",
  bundle: "/bp/bp.bundle.js",
  config: "/bp/bp.config.js",
  sw: "/bp/bp.sw.js",
};
