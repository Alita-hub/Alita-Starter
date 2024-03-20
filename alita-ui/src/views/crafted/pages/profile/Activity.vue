<template>
  <!--begin::Timeline-->
  <div class="card">
    <!--begin::Card head-->
    <div class="card-header card-header-stretch">
      <!--begin::Title-->
      <div class="card-title d-flex align-items-center">
        <Icon icon-name="calendar-8" icon-class="fs-1 text-primary me-3 lh-0" />

        <h3 class="fw-bold m-0 text-gray-800">Jan 23, 2021</h3>
      </div>
      <!--end::Title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar m-0">
        <!--begin::Tab nav-->
        <ul
          class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="activity_today_tab"
              class="nav-link justify-content-center text-active-gray-800 active"
              data-bs-toggle="tab"
              role="tab"
              href="#activity_today"
            >
              Today
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="activity_week_tab"
              class="nav-link justify-content-center text-active-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#activity_week"
            >
              Week
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="activity_month_tab"
              class="nav-link justify-content-center text-active-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#activity_month"
            >
              Month
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="activity_year_tab"
              class="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#activity_year"
            >
              2021
            </a>
          </li>
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Card head-->

    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Tab Content-->
      <div class="tab-content">
        <!--begin::Tab panel-->
        <div
          id="activity_today"
          class="card-body p-0 tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="activity_today_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <ActivityItem1></ActivityItem1>
            <ActivityItem2></ActivityItem2>
            <ActivityItem3></ActivityItem3>
            <ActivityItem4></ActivityItem4>
            <ActivityItem5></ActivityItem5>
            <ActivityItem6></ActivityItem6>
            <ActivityItem7></ActivityItem7>
            <ActivityItem8></ActivityItem8>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <div
          id="activity_week"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="activity_week_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <ActivityItem2></ActivityItem2>
            <ActivityItem3></ActivityItem3>
            <ActivityItem4></ActivityItem4>
            <ActivityItem5></ActivityItem5>
            <ActivityItem6></ActivityItem6>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <div
          id="activity_month"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="activity_month_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <ActivityItem5></ActivityItem5>
            <ActivityItem6></ActivityItem6>
            <ActivityItem8></ActivityItem8>
            <ActivityItem2></ActivityItem2>
            <ActivityItem3></ActivityItem3>
            <ActivityItem4></ActivityItem4>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <div
          id="activity_year"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="activity_year_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <ActivityItem3></ActivityItem3>
            <ActivityItem4></ActivityItem4>
            <ActivityItem5></ActivityItem5>
            <ActivityItem6></ActivityItem6>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->
      </div>
      <!--end::Tab Content-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Timeline-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import ActivityItem1 from "@/components/activity-timeline-items/Item1.vue";
import ActivityItem2 from "@/components/activity-timeline-items/Item2.vue";
import ActivityItem3 from "@/components/activity-timeline-items/Item3.vue";
import ActivityItem4 from "@/components/activity-timeline-items/Item4.vue";
import ActivityItem5 from "@/components/activity-timeline-items/Item5.vue";
import ActivityItem6 from "@/components/activity-timeline-items/Item6.vue";
import ActivityItem7 from "@/components/activity-timeline-items/Item7.vue";
import ActivityItem8 from "@/components/activity-timeline-items/Item8.vue";

export default defineComponent({
  name: "profile-activity",
  components: {
    ActivityItem1,
    ActivityItem2,
    ActivityItem3,
    ActivityItem4,
    ActivityItem5,
    ActivityItem6,
    ActivityItem7,
    ActivityItem8,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
