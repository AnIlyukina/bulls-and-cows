<template>
  <section class="register">
    <h1 class="register__title">Регистрация</h1>
    <label class="register__label">Email <input  class="register__input" type="email"></label>
    <label class="register__label" >Логин <input class="register__input"  type="text"></label>
    <label class="register__label">Пароль <input  class="register__input"  type="password"></label>
    <label class="register__label">Повторите пароль <input class="register__input"  type="password"></label>
    <button class="register__button" >Играть</button>
  </section>
</template>

<script>
export default {
  name:'Register'
}
</script>

<style>

.register{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid black;
  padding: 10px;
}

.register__title{
  margin: 0;
  font-size: 30px;
}

.register__label{
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px ;
  text-align: start;
  line-height: 100%;
  height: 32px;
}

.register__input{
  border:none;
  border-radius: 5px;
  max-width: 180px;
  width: 100%;
  cursor: pointer;
}

@media (max-width: 350px) {
 .register__input {
    max-width: 150px;
  }
}

.register__button{
  margin-top: 100px ;
}
</style>