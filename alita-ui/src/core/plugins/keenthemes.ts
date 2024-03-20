import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  StickyComponent,
  SwapperComponent,
  ToggleComponent,
} from "@/assets/ts/components";
import { ThemeModeComponent } from "@/assets/ts/layout";
import type { App } from "vue";
import Icon from "@/core/helpers/icon/Icon.vue";

/**
 * @description Initialize KeenThemes custom components
 */
const initializeComponents = () => {
  ThemeModeComponent.init();
  setTimeout(() => {
    ToggleComponent.bootstrap();
    StickyComponent.bootstrap();
    MenuComponent.bootstrap();
    ScrollComponent.bootstrap();
    DrawerComponent.bootstrap();
    SwapperComponent.bootstrap();
  }, 0);
};

/**
 * @description Reinitialize KeenThemes custom components
 */
const reinitializeComponents = () => {
  ThemeModeComponent.init();
  setTimeout(() => {
    ToggleComponent.reinitialization();
    StickyComponent.reInitialization();
    MenuComponent.reinitialization();
    reinitializeScrollComponent().then(() => {
      ScrollComponent.updateAll();
    });
    DrawerComponent.reinitialization();
    SwapperComponent.reinitialization();
  }, 0);
};

const reinitializeScrollComponent = async () => {
  await ScrollComponent.reinitialization();
};

/**
 * Initialize Icon global component instance
 * @param app vue instance
 */
function initIcon(app: App<Element>) {
  app.component("Icon", Icon);
}

export {
  initializeComponents,
  reinitializeComponents,
  reinitializeScrollComponent,
  initIcon,
};
