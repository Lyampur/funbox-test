new Vue({
  el: '#app',
  data: {
    productName: 'Нямушка',
    products: [
      {
        id: 1,
        header: 'Сказачное заморское яство',
        ingredient: 'с фуа-гра',
        portionAmount: 10,
        present: 'мышь',
        value: 0.5,
        description: 'Печень утки разварная с артишоками.',
        isSelected: false,
        isDisabled: false,
        isHover: false,
      },
      {
        id: 2,
        header: 'Сказачное заморское яство',
        ingredient: 'с рыбой',
        portionAmount: 40,
        present: '2 мыши',
        value: 2,
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        isSelected: false,
        isDisabled: false,
        isHover: false,
      },
      {
        id: 3,
        header: 'Сказачное заморское яство',
        ingredient: 'с курой',
        portionAmount: 100,
        present: '5 мышей',
        value: 5,
        description: 'Филе из цыплят с трюфелями в бульоне.',
        isSelected: false,
        isDisabled: true,
        isHover: false,
      },
    ],
  },
  methods: {
    selectProduct(product) {
      product.isSelected ? product.isSelected = false : product.isSelected = true;
    },

    // добавляем статус элементу-карточке в зависимости от булевого флага
    stateOfProduct(product) {
      if (product.isSelected && product.isHover) {
        return 'card-selected-hover';
      } else if (product.isDisabled) {
        return 'card-disabled';
      } else if (product.isSelected) {
        return 'card-selected';
      } else if (product.isHover) {
        return 'card-hover';
      } else {
        return '';
      }
    }
  },
  computed: {

  },
});
