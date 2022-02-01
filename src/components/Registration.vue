<template>
  <section class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <label class="registration__label">Email <input  class="registration__input" type="email"></label>
    <label class="registration__label" >Логин <input class="registration__input"  type="text"></label>
    <label class="registration__label">Пароль <input  class="registration__input"  type="password"></label>
    <label class="registration__label">Повторите пароль <input class="registration__input"  type="password"></label>
    <button class="registration__button" >Играть</button>
    <router-link class="registration__link" to="/signup">Войти</router-link>
  </section>
</template>

<script>
export default {
  name:'Registration'
}
</script>

<style>

.registration{
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
}

.registration__title{
  margin: 0;
  font-size: 34px;
}

.registration__label{
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px ;
  text-align: start;
  line-height: 100%;
  height: 32px;
  font-weight: 700;
}

.registration__input{
  border:none;
  border-radius: 5px;
  max-width: 180px;
  width: 100%;
  cursor: pointer;
}

@media (max-width: 350px) {
 .registration__input {
    max-width: 150px;
  }
}

.registration__button{
  margin-top: 100px ;
}

.registration__button{
  background-color: cadetblue;
  border: none;
  border-radius: 3px;
  box-shadow: -2px 2px 2px 1px rgb(255, 255, 255);
  height: 40px;
  width: 150px;
  font-size: 24px;
  color: white;
}

.registration__link{
  text-decoration: none;
  color: white;
  font-weight: 700;
  margin-top: 20px;
}
</style>