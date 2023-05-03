import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerZIP } from "@electron-forge/maker-zip";
import { MakerDeb } from "@electron-forge/maker-deb";
import { MakerRpm } from "@electron-forge/maker-rpm";
import { WebpackPlugin } from "@electron-forge/plugin-webpack";

import { mainConfig } from "./webpack.main.config";
import { rendererConfig } from "./webpack.renderer.config";

const config: ForgeConfig = {
  packagerConfig: {
    icon: __dirname + "/images/icon",
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ["darwin"]),
    new MakerRpm({}),
    new MakerDeb({}),
    {
      name: "@electron-forge/maker-dmg",
      config: {
        format: "ULFO",
        icon: __dirname + "/images/icon.icns",
      },
    },
  ],
  publishers: [],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: "./src/electron/views/index.html",
            js: "./src/electron/renderer.ts",
            name: "main_window",
            preload: {
              js: "./src/electron/preload.ts",
            },
          },
        ],
      },
    }),
  ],
};

export default config;
