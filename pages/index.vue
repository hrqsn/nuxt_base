<template>
  <div class="container">
    <div>
      <an-navbar />
      <section class="body">
        <div class="content">
          <h1><span>最もシンプルな</span><span>分度器アプリ</span></h1>
          <p>画面上のあらゆる角度を測りましょう</p>
          <a href="">
            <img src="~/assets/img/appstore.svg" alt="AppStore">
          </a>
        </div>
        <div class="image">
          <img src="~/assets/img/shot.png" alt="">
        </div>
      </section>
      <an-footer />
    </div>
  </div>
</template>

<script>
import AnNavbar from '~/components/Navbar.vue'
import AnFooter from '~/components/Footer.vue'
export default {
  components: {
    AnNavbar,
    AnFooter
  }
}
</script>


<style scoped lang="scss">
.container {
  position: relative;
  .body {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin: 0 auto;
    max-width: 1040px;
    position: relative;
    .content {
      text-align: left;
      h1 {
        font-size: 2.4rem;
        font-weight: 600;
        span {
          display: inline-block;
        }
      }
      p {
        font-size: 1rem;
        margin-top: 8px;
        color: $gray-40;
      }
      a img {
        margin-top: 24px;
        height: 48px;
      }
    }
    .image {
      position: absolute;
      right: 0;
      z-index: -10;
      img {
        width: 480px;
      }
    }
  }
  @include mqdown(md) {
    .body {
      justify-content: center;
      .content {
        text-align: center;
      }
      .image {
        visibility: hidden;
      }
    }
  }
  @include mqdown(sm) {
    .image {
      visibility: hidden;
    }
  }
}
</style>

