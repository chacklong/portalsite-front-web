<template>
    <section class="section">
        <div class="container my-5 py-lg-5 py-md-4 py-3">
        <h2 class="h1 mb-md-4 mb-3 pt-xl-3" _msttexthash="14389960" _msthash="134">我们的服务</h2>
        <div class="row gy-sm-4 gy-3 mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2">
          <div class="col-md-6 col-12">
            <p class="mb-0 fs-lg" _msttexthash="406790345" _msthash="135">我们通过深入了解每个客户的市场、解决方案和愿景，为每个客户的问题提供真正的解决方案。</p>
          </div>
          <div class="col text-md-end">
            <a href="#" class="btn btn-lg btn-outline-primary" _msttexthash="29856437" _msthash="136">查看所有案例研究</a>
          </div>
        </div>

        <!-- Swiper slider -->
        <div class="swiper mb-xl-3 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" data-swiper-options="{
          &quot;spaceBetween&quot;: 24,
          &quot;breakpoints&quot;: {
            &quot;0&quot;: {
              &quot;slidesPerView&quot;: 1
            },
            &quot;768&quot;: {
              &quot;slidesPerView&quot;: 2
            }
          },
          &quot;pagination&quot;: {
            &quot;el&quot;: &quot;.swiper-pagination&quot;,
            &quot;clickable&quot;: true
          }
        }">
          <div class="swiper-wrapper" id="swiper-wrapper-727b9313724631a6" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">

            <!-- Swiper item -->
            <div class="swiper-slide h-auto pt-1 swiper-slide-active" role="group" aria-label="1 / 2" style="width: 636px; margin-right: 24px;" _mstaria-label="15197" _msthash="137">
              <div class="card h-100">
                <img src="assets/img/landing/software-agency-2/case-studies/01.jpg" class="card-img-top" alt="卡片图像" _mstalt="129376" _msthash="138">
                <div class="card-body">
                  <h5 class="card-title mb-3" _msttexthash="72980960" _msthash="139">具有智能搜索功能的旅行者门户</h5>
                  <p class="card-text mb-4 pb-md-3 fs-lg" _msttexthash="9037613" _msthash="140">Aenean sed mi ut erat venenatis imperdiet.Mauris sed turpis ac elit ultricies rhoncus id et magna donec euismod interdum risus.</p>
                  <a href="#" class="btn btn-lg btn-outline-primary" _msttexthash="29856437" _msthash="141">查看所有案例研究</a>
                </div>
              </div>
            </div>

            <!-- Swiper item -->
            <div class="swiper-slide h-auto pt-1 swiper-slide-next" role="group" aria-label="2 / 2" style="width: 636px; margin-right: 24px;" _mstaria-label="15288" _msthash="142">
              <div class="card h-100">
                <img src="assets/img/landing/software-agency-2/case-studies/02.jpg" class="card-img-top" alt="卡片图像" _mstalt="129376" _msthash="143">
                <div class="card-body">
                  <h5 class="card-title mb-3" _msttexthash="79509703" _msthash="144">用于财务管理的金融科技应用程序</h5>
                  <p class="card-text mb-4 pb-md-3 fs-lg" _msttexthash="69951999" _msthash="145">Nullam semper enim quis vulputate mollis.Donec ultrices elementum mauris， ac porttitor mi cursus eget vestibulum tellus sodales.</p>
                  <a href="#" class="btn btn-lg btn-outline-primary" _msttexthash="29856437" _msthash="146">查看所有案例研究</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Swiper pagination -->
          <div class="swiper-pagination position-static mt-4 pt-lg-3 pt-2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock" _mstvisible="0"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true" _msthidden="A" _mstaria-label="145132" _msthash="218"></span></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
      </div>
    </section>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true
      },
      radio: {
        radio1: "radio1",
        radio2: "radio3"
      },
      switches: {
        off: false,
        on: true
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400]
      }
    };
  }
};
</script>
<style>
</style>
