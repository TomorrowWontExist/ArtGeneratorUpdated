const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://gateway.pinata.cloud/ipfs/(Paste CID of Pinata/IPFS Folder holding your IMAGE Files)";

const layerConfigurations = [
  {
    growEditionSizeTo: 20, 
    layersOrder: [
      { name: "1-background" },
      { name: "2-extra" },
      { name: "3-character" },
      { name: "4-prop" },
      { name: "5-expression" },
      { name: "6-face" },
      { name: "7-eyewear" },
      { name: "8-headpiece" },
    ],
  },
];
const format = {
  width: 750, // change this to the dimension your NFT was created with in PSD
  height: 1200,
};

const background = {
  generate: true,
  brightness: "100%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
