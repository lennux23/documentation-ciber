<template>
  <div>
     <div class="container mt-5">
          <div :class="['p-3','text-white',fondo]">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore eaque sunt neque aperiam hic, saepe expedita! Ea, iusto sed! Aspernatur rerum reiciendis vitae sit illo? Ad ipsam est reiciendis?
              </p>
            </div>
            <input type="text" class="form-control my-3" v-model='fondo'>
      </div>
   </div>
</template>
<script>
export default {
    data(){
        return {
        fondo: 'bg-success',
        color: false
        };
    },
    methods: {
        
    }
};
</script>
