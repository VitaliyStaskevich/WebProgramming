const menuData = [
  {
    name: 'Основные лекарства', submenu: [
      {
        name: 'Минск', submenu: [
          { name: 'Парацетомол', url: 'https://ru.wikipedia.org/wiki/Парацетамол' },
          { name: 'Ибупрофен', url: 'https://ru.wikipedia.org/wiki/Ибупрофен' }
        ]
      },
      { name: 'Гомель', url: 'https://ru.wikipedia.org/wiki/Парацетамол' },
      {
        name: 'Могилёв', submenu: [
          { name: 'Аспирин', url: 'https://ru.wikipedia.org/wiki/Ацетилсалициловая_кислота' },
          { name: 'Ибупрофен', url: 'https://ru.wikipedia.org/wiki/Ибупрофен' },
          { name: 'Парацетомол', url: 'https://ru.wikipedia.org/wiki/Парацетамол' },
          { name: 'Омепразол ', url: 'https://ru.wikipedia.org/wiki/Парацетамол' }
        ]
      }
    ]
  },
  { name: 'Об аптеке', url: 'https://ru.wikipedia.org/wiki/Аптека' },
  {
    name: 'Спонсоры', submenu: [
      { name: 'Первый', url: 'https://ru.wikipedia.org/wiki/Ацетилсалициловая_кислота' },
      { name: 'Второй', url: 'https://ru.wikipedia.org/wiki/Аптека' }
    ]
  }
];

const showMenu = (items, parent) => {
  const listElement = document.createElement('ul');
  items.forEach((item) => {
    const itemElement = makeMenuItem(item);
    listElement.appendChild(itemElement);
  });
  parent.appendChild(listElement);
}

const makeMenuItem = (item) => {
  const listItemElem = document.createElement('li');
  if (item.submenu) {
    listItemElem.append(item.name);
    listItemElem.onclick = (event) => {
      if (event.target !== event.currentTarget) return;
      if (hideMenu(listItemElem)) {
        listItemElem.classList.remove('opened');
        return;
      }
      showMenu(item.submenu, listItemElem);
      listItemElem.classList.add('opened');
    };
    listItemElem.classList.add('has-submenu');
  }
  if (item.url) {
    const anchor = makeAnchor(item.name, item.url);
    listItemElem.appendChild(anchor);
  }

  listItemElem.classList.add(['menu-item']);

  return listItemElem;
}

const makeAnchor = (name, url) => {
  const listItemAnchor = document.createElement('a');
  listItemAnchor.textContent = name;
  listItemAnchor.href = url;
  return listItemAnchor;
}

const hideMenu = (parent) => {
  const listElement = parent.querySelector('ul');
  if (listElement) {
    listElement.remove();
    return true;
  }
  return false;
}

document.addEventListener('DOMContentLoaded', function() {
  const menuContainer = document.getElementById('tree-menu');
  showMenu(menuData, menuContainer);
});