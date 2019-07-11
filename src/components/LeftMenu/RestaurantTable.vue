
<script>
export default {
  name: "restaurantTable",
  functional: true,
  render: function(createElement, context) {
    let childrens= [];
    let span= createElement("span",
    {
      domProps: {
        className: "badge badge-pill badge-ligh",
        innerHTML: context.props.startData.id
      }
    });
    childrens.push(span);
    childrens.push(context.props.startData.assignedTo);
    return createElement('button',
    {
      on: {
        click: e => context.listeners.chosedTable( context.props.startData.id)
      },
      class: {

          "btn-outline-success": context.props.startData.assignedTo != '',
          "btn btn-block m-1 ": true

      }
    },
    childrens);
  },
  props: {
    startData:Object
  },

}
</script>

<style scoped>
  .btn:not(.btn-outline-success) {
    border: 0.5px solid lightGrey;
  }



</style>
