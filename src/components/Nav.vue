<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">{{ $t("nav.home") }}</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink>
      </li>
    </ul>
  </nav>
  <LanguageSwitcher></LanguageSwitcher>
</template>
<script>
  import LanguageSwitcher from "../components/LanguageSwicther.vue"
  import Tr from "../i18n/translation"

  export default {
    components: { LanguageSwitcher },
    setup() {
      return { Tr }
    }
  }
</script>