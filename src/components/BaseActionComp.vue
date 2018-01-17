<template>
  <div>
  <!-- just for potential testing -->
  <p>Do nothing useful in base extend <b> {{actionForm.name}} </b> </p>
</div>
</template>
<script>
/*
Basic action access
do nothing really usefull
but access basic action data in the main app
extended in specific forms to modify parts of the action
*/
export default {
  name: 'BaseActionComp' ,
  props: {
    actionForm: {
      type: Object,
      required: true
    }
  }
}
</script>
