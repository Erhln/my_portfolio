import { writable } from "svelte/store";

export const currentLanguage = writable("en");

export const translations = writable({});

export const loadTranslations = async (lang) => {
  const response = await fetch(`/locales/${lang}.json`);
  const data = await response.json();
  translations.set(data);
};

export const setLanguage = (lang) => {
  currentLanguage.set(lang);
  loadTranslations(lang);
};


setLanguage("en");
