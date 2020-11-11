<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ i18n.$t(title) }}</a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-language"></i>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownId"
          >
            <button 
                @click="switchLanguage" 
                class="dropdown-item"
                data-lang="en"
              >en
            </button>
            <button 
                @click="switchLanguage" 
                class="dropdown-item"
                data-lang="hu"
              >hu</button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useI18n } from "../plugin/i18nPlugin";
export default {
  name: "Nav",
  setup() {
    const i18n = useI18n();

    const switchLanguage = (event) => {
      // const locale = i18n.locale.value === 'en' ? 'hu' : 'en';
      i18n.locale.value = event.target.getAttribute('data-lang') || 'en';
    };

    return { i18n, switchLanguage };
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
</style>