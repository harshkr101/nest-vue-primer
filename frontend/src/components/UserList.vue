<template>
    <div class="user-list">
      <h1>User List</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <table v-if="users.length" class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserList',
    data() {
      return {
        users: [],
        loading: true,
        error: null
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        this.users = response.data;
        this.loading = false;
      } catch (err) {
        this.error = 'Error loading users: ' + err.message;
        this.loading = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .user-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .user-table th, .user-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .user-table th {
    background-color: #f2f2f2;
  }
  
  .user-table tr:hover {
    background-color: #f5f5f5;
  }
  </style>