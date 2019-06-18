
export default (Vue)=>{
    Vue.directive('has', {
        inserted: function(el, binding) {
          var code = binding.value;
          if(!code) return;
          var codes = JSON.parse(sessionStorage.getItem('menus')).codes;
          if(!code || !codes || !codes.contains(code)){
            el.parentNode.removeChild(el);
          }
        }
    })
}