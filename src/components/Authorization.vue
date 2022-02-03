<template>
   <section class="authorization">
    <h1 class="authorization__title">Авторизация </h1>
    <label class="authorization__label" >Логин <input class="authorization__input"  type="text"></label>
    <label class="authorization__label">Пароль <input  class="authorization__input"  type="password"></label>
    <button class="authorization__button" >Играть</button>
    <router-link class="authorization__link" to="/signin"> Зарегистрироваться</router-link>
  </section>
</template>

<script>
export default {
  name:'Authorization'
}
</script>

<style>
.authorization{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.authorization__title{
  margin: 0;
  font-size: 34px;
}

.authorization__label{
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

.authorization__input{
  border: 1px solid rgba(rgb(255, 0, 0), rgb(1, 255, 1), rgb(0, 0, 255), 0.3);
  border-radius: 5px;
  max-width: 180px;
  width: 100%;
  cursor: pointer;
}

@media (max-width: 350px) {
 .authorization__input {
    max-width: 150px;
  }
}

.authorization__button{
  margin-top: 50px ;
  background-color: cadetblue;
  border: none;
  border-radius: 3px;
  box-shadow: -2px 2px 2px 1px rgb(255, 255, 255);
  height: 40px;
  width: 150px;
  font-size: 24px;
  color: black;
}

.authorization__link{
  text-decoration: none;
  color: white;
  font-weight: 700;
  margin-top: 20px;
  color: black;
}
</style>