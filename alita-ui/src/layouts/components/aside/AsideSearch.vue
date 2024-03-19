<template>
  <!--begin::Search-->
  <div
    ref="searchRef"
    class="d-flex align-items-center w-100"
    data-alita-search="true"
    data-alita-search-keypress="true"
    data-alita-search-min-length="2"
    data-alita-search-enter="enter"
    data-alita-search-layout="menu"
    data-alita-search-responsive="false"
    data-alita-menu-trigger="auto"
    data-alita-menu-permanent="true"
    data-alita-menu-placement="bottom-start"
  >
    <InlineForm />

    <!--begin::Menu-->
    <div
      data-alita-search-element="content"
      class="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
    >
      <!--begin::Wrapper-->
      <div data-alita-search-element="wrapper">
        <Results />

        <AsideMain />

        <Empty />
      </div>
      <!--end::Wrapper-->

      <AdvancedOptions />

      <Preferences />
    </div>
    <!--end::Menu-->
  </div>
  <!--end::Search-->
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";
import Results from "@/layouts/components/aside/search/Results.vue";
import AsideMain from "@/layouts/components/aside/search/Main.vue";
import Empty from "@/layouts/components/aside/search/Empty.vue";
import AdvancedOptions from "@/layouts/components/aside/search/AdvancedOptions.vue";
import Preferences from "@/layouts/components/aside/search/Preferences.vue";
import InlineForm from "@/layouts/components/aside/search/InlineForm.vue";
import { SearchComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "alita-search",
  components: {
    Results,
    AsideMain,
    Empty,
    AdvancedOptions,
    Preferences,
    InlineForm,
  },
  setup() {
    const searchRef = ref<HTMLElement | null>(null);

    const processs = (search: SearchComponent) => {
      setTimeout(function () {
        const number = Math.floor(Math.random() * 6) + 1;

        // Hide recently viewed
        search.suggestionElement.classList.add("d-none");

        if (number === 3) {
          // Hide results
          search.resultsElement.classList.add("d-none");
          // Show empty message
          search.emptyElement.classList.remove("d-none");
        } else {
          // Show results
          search.resultsElement.classList.remove("d-none");
          // Hide empty message
          search.emptyElement.classList.add("d-none");
        }

        // Complete search
        search.complete();
      }, 1500);
    };

    const clear = (search: SearchComponent) => {
      // Show recently viewed
      search.suggestionElement.classList.remove("d-none");
      // Hide results
      search.resultsElement.classList.add("d-none");
      // Hide empty message
      search.emptyElement.classList.add("d-none");
    };

    onMounted(() => {
      nextTick(() => {
        // Initialize search handler
        const searchObject = SearchComponent.createInsance(
          "[data-alita-search]"
        );

        // Search handler
        searchObject?.on("alita.search.process", processs);

        // Clear handler
        searchObject?.on("alita.search.cleared", clear);
      });
    });

    return {
      searchRef,
    };
  },
});
</script>
