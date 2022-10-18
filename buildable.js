const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEn } = require("@nlpjs/lang-en-min");
const { fs } = require("@nlpjs/request-rn");

module.exports = {
  containerBootstrap: containerBootstrap,
  Nlp: Nlp,
  LangEn: LangEn,
  fs: fs,
};
