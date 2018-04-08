<template>
    <div class="index" v-bind:style="{ backgroundImage: 'url(' + indexBackground + ')' }"  ><!-- img background -->
        <main class="index_container">

            <transition name="flip" >   
                <div key="1" class="log_form" v-if="logIn" v-bind:style="{ backgroundImage: 'url(' + formBackground + ')' }" ><!-- form background -->
                    <div class="log_form_overlay">
                        <p class="log_form_name">Login</p>
                        <img class="logo" src="../assets//img/svg/logo.svg" alt=""><!-- animated logo -->

                        <form class="log_form_wrapper" action="">
                            <div key="a" class="input_wrapper"><!-- username input -->
                                <img class="input_ico" src="../assets/img/svg/avatar.svg" alt="">
                                <input type="text" placeholder="username" >
                            </div>
                            
                            <div key="b" class="input_wrapper"><!-- password input -->
                                <img class="input_ico" src="../assets/img/svg/key.svg" alt="">
                                <input type="password" name="" id="" placeholder="password">
                            </div>
                        
                            <router-link to="/list" exact class="btn btn--main"><!-- button -->
                                enter
                            </router-link>                      
                        </form>
                        <p class="sign_up_p">Don't have an account? <span v-on:click="showSignUp">Sign Up</span> </p>
                    </div>
                </div><!-- END LOGIN FORM-->
        
    <!-- .............................. FLIP ................................. -->

                <div key="2" class="log_form sing_form" v-if="singUp" v-bind:style="{ backgroundImage: 'url(' + formBackground + ')' }" ><!-- form background -->
                    <div class="log_form_overlay">

                        <div class="form_header">
                            <img v-on:click="showLogIn" class="input_ico" src="../assets/img/svg/arrow.svg" alt="">
                            <p class="log_form_name">Sing Up</p>
                        </div>
                    
                        <img class="logo logo_logIn" src="../assets//img/svg/logo.svg" alt=""> <!-- animated logo -->

                        <form class="log_form_wrapper" action="">
                            <div class="input_wrapper"><!-- username input -->
                                <img class="input_ico" src="../assets/img/svg/avatar.svg" alt="">
                                <input type="text" placeholder="username" >
                            </div>

                            <div class="input_wrapper"><!-- username input -->
                                <img class="input_ico" src="../assets/img/svg/mail.svg" alt="">
                                <input type="email" placeholder="email" >
                            </div>

                            <div class="input_wrapper"><!-- password input -->
                                <img class="input_ico" src="../assets/img/svg/key.svg" alt="">
                                <input type="password" name="" id="" placeholder="password">
                            </div>

                            <router-link to="/list" exact class="btn btn--main"><!-- button -->
                                sing up
                            </router-link>
                        </form>
                    
                    </div>
                </div><!-- END  SING UP FORM-->
            </transition>
        </main>
    </div>
</template>

<script>

export default {

    data () {
        return {
            indexBackground: require('../assets/img/back.jpg'),
            formBackground: require('../assets/img/film.jpg'),    
            singUp: false,
            logIn: true,
            show: true,


        }
    },
    methods: {

        showSignUp() {
            this.singUp = true,
            this.logIn = false
        },
          
        showLogIn() {
            this.singUp = false,
            this.logIn = true
        }

    }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/_variables';
// -- transition forms --
.flip-enter-active {
  transition: all .8s ease;
}
.flip-leave-active {
  transition: all .1s ease;
}

.flip-enter {
  transform:  rotate3d(0, 5, 0, -90deg);
  opacity: 0;
}

.flip-leave-to {
  opacity: 0;
}

// -- mobil --
@media screen and (max-width: 700px) {
    .index {
        background-image: none;
    }
}

.index_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba($color_bg--darken, .97);
    position: relative;
}
//form
.log_form {
    position: absolute;
    border-radius: 8px;

    background-position: 50%;
    background-size: cover;
    text-align: center;
    animation: scale 1s;
    &_overlay {
        padding: 30px 40px;
        //width: 100%;
        height: 100%;
        border-radius: 8px 0 8px 0;
        background: rgba($color_main, .90);
    }
    &_name {
        text-align: right;
        font-size: 16px;
        border-right: 2px solid white;
        margin: 0 -39px 0 0;
        padding:  15px 30px 15px 0;
    }
}

.form_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        cursor: pointer;
    }
}

// -- mobil --
@media screen and (max-width: 400px) {
  .log_form {
    background: none;
    &_overlay {
      padding: 15px 20px;
    }
    &_name {
      margin: 0 -19px 0 0;
    }
  }
}

.logo {
    height: 70px;
    margin: 80px 0 100px 0;
    border-radius: 15px 0 15px 0;
    &_logIn {
        margin: 85px 0;
    }
}

@media screen and (max-width: 400px) {
    .logo {
        height: 70px;
        margin: 50px 0 60px 0;
        border-radius: 15px 0 15px 0;
    }
}

.log_form_wrapper {
    display: flex;
    flex-direction: column;

    input {
        height: 30px;
        width: 250px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba($color_text, .3);
    }
}

.input_ico {
    height: 19px;
    margin-bottom: -5px;
    margin-right: 10px;
}

.sign_up_p {
    font-size: 16px;
    span {
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            color: $color-bg;

        }
    }
}

</style>