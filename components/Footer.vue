<template>
  <div>
    <footer class="footer">
      <div class="footer-inner">
        <span class="footer-title">©︎ {{ new Date().getFullYear() }} <a href="https://twitter.com/hrqsn" target="_blank" rel=”noopener”>hrqsn</a>.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'hr-footer'
}
</script>

<style scoped lang="scss">
.footer {
  height: 48px;
  background-color: transparent;
  margin-top: 48px;
  width: 100%;
  position: fixed;
  bottom: 0;
  &-inner {
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-title {
      color: #C6C6C6;
      text-align: center;
      width: 100%;
      font-size: 14px;
      a {
        color: #C6C6C6;
      }
    }
  }
}
</style>