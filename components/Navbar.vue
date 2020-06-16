<template>
  <div>
    <header class="navbar">
      <div class="navbar-inner">
        <nuxt-link to="/"><img class="navbar-logo" src="~/assets/img/logo.svg" /></nuxt-link>
        <nav class="navbar-menu">
          <ul>
            <li>
              <nuxt-link to="/download/" class="navbar-menu--link">ダウンロード</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/privacy/" class="navbar-menu--link">プライバシーポリシー</nuxt-link>
            </li>
            <li>
              <a role="button" href="https://twitter.com/hrqsn" target="_blank" rel=”noopener” class="navbar-menu--link">開発者</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'an-navbar',
  components: {}
}
</script>

<style scoped lang="scss">
.navbar {
  height: 64px;
  color: $gray-100;
  background-color: $background;
  position: absolute;
  width: 100%;
  z-index: 100;
  &-inner {
    min-height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    margin: 0 auto;
    max-width: 1040px;
    .navbar-logo {
      height: 24px;
      display: block;
    }
  }
}
.navbar-menu {
  ul {
    li {
      display: inline-block;
      height: 64px;
      line-height: 64px;
      margin-left: 32px;
      font-size: 0.9rem;
      a {
        color: $gray-100;
      }
    }
  }
}
@include mqdown(sm) {
  .navbar {
    height: 120px;
    display: flex;
    align-items: center;
  }
  .navbar-inner {
    flex-direction: column;
    justify-content: center;
  }
  .navbar-menu {
    ul li {
      margin-left: 16px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>