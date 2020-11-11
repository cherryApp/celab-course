// i18nPlugin.js
import { ref, provide, inject } from 'vue';

const createI18n = config => ({
  locale: ref(config.locale),
  messages: config.messages,
  $t(key) {
      console.log(config.locale, ref(config.locale));
    return this.messages[this.locale.value][key];
  }
});

const i18nSymbol = Symbol();

export function provideI18n(i18nConfig) {
  const i18n = createI18n(i18nConfig);
  provide(i18nSymbol, i18n);
}

export function useI18n() {
  const i18n = inject(i18nSymbol);
  if (!i18n) throw new Error("No i18n provided!!!");

  return i18n;
}
