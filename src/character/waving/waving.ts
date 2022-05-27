import Character from '../character';

import style from "./waving.css";


class Waving extends Character
{
  constructor()
  {
    super();

    this.element.className = style.character;
  }
}

document.body.appendChild(new Waving().element);  