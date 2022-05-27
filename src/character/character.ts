export default class Character 
{
    element: HTMLDivElement;

    constructor()
    {
        this.element = document.createElement("div");

        this.element.innerHTML = "";
    }
}