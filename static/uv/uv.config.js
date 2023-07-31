self.__uv$config = {
  prefix: "/sw/",
  bare: [
    "https://uv.studentportal.lol/",
    "https://uv.radon.games/",
    "https://uv.holyubofficial.net/",
    "https://tomp.app/",
    "https://flow-os.liquid.is-a.dev/bare/"
  ],
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
