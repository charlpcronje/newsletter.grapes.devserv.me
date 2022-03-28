import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import "grapesjs-preset-newsletter";

grapesjs.init({
  container: "#gjs",
  fromElement: 1,
  storageManager: { type: 0 },
  plugins: ["gjs-blocks-basic", "gjs-preset-newsletter"]
});
