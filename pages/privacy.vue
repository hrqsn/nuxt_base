<template>
  <div class="background">
    <div class="container">
      <div class="header">
        <nuxt-link class="logo" to="/"><img src="~/assets/img/logo_g.svg" /></nuxt-link>
      </div>
      <div class="body">
        <h1 class="title">プライバシーポリシー</h1>
        <p class="description" style="margin-bottom: 32px;">Angleは第三者に個人を特定できる情報を提供しません。<br/>個人情報の管理には細心の注意を払い、以下に掲げた通りに扱います。</p>
        <h1 class="subtitle">データ解析</h1>
        <p class="description" style="margin-bottom: 32px;">アプリの利便性向上のため、匿名で個人を特定できない範囲で細心の注意を払い、アクセス解析をしています。例えばアプリのクラッシュ時にどんな原因でクラッシュしたかを匿名で送信し、バグの素早い修正に役立たせています。</p>
        <h1 class="subtitle">免責事項</h1>
        <p class="description">利用上の不具合・不都合に対して可能な限りサポートを行っておりますが、利用者が本アプリを利用して生じた損害に関して、開発元は責任を負わないものとします。</p>
      </div>
      <an-footer />
    </div>
  </div>
</template>

<script>
import AnFooter from '~/components/Footer.vue'
export default {
  components: {
    AnFooter
  }
}
</script>

<style>
.container {
  height: 100%;
}
.body {
  height: 100%;
  max-width: 608px;
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 16px;
}
.header {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 24px;
}
.title {
  font-family: 'Montserrat';
  font-size: 60px;
  color: #161616;
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 32px;
}
.subtitle {
  font-size: 16px;
  padding-bottom: 24px;
}
.description {
  font-size: 16px;
  color: #161616;
  font-weight: 300;
  font-size: 14px;
}
.btn {
  height: 48px;
  margin-top: 48px;
}
</style>

