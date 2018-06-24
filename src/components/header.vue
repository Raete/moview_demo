<template>
  <div class="moview-container">

    <div class="top_logo_wrapper">
      <router-link to="/" exact class="top_logo">moview</router-link>
    </div>
    
    <div class="top_profil">
        <img class="top_profil_ico" src="../assets/img/per1.jpg" alt="">
        <h2 class="top_profil_name">Samuel Green</h2>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '../assets/scss/_variables';
 
// TOP BAR
.moview-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;

}

.top_logo_wrapper {
    grid-area: l;
    display: flex;
    background: $color_bg--darken;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
}
//logo
.top_logo {
    display: inline-block;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 10px;
    color:$color_text;
    padding: 12px;
    border-radius: 10px 0 10px 0;
    border: 3px solid $color_text;
}

// profil
.top_profil {
    display: flex;
    align-items: center;
    min-width: 165px;
}

// -- mobil --
@media screen and (max-width: 700px) {
    .top_profil {
        display: none;
    }
}

.top_profil_ico {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    margin-right: 10px;
}

.top_profil_name {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
}
</style>
