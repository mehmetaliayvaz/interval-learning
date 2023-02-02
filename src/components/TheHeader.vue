<template>
  <header class="navbar bg-white shadow-sm">
    <div class="container">
      <div class="flex-1">
        <router-link
          :to="{ name: 'home' }"
          class="btn btn-ghost normal-case md:text-xl"
          >Aralıklı Öğrenme</router-link
        >
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal md:space-x-3 px-1">
          <li class="hidden md:block">
            <router-link :to="{ name: 'home' }"> Anasayfa </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'learn' }"> Öğren </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }"> Hakkında </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style></style>
