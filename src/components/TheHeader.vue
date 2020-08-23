<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        KOLLAB
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-dropdown label="Katrina">
        <b-navbar-item href="#">
          Logout
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
