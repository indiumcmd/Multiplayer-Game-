class Form{
    constructor(){

    }
    display(){
        var title = createElement('H2');
        title.html('Multiplayer Car Racing Game');
        title.position(120,10);

        var input = createInput('Name');
        input.position(130,160);

        var  button = createButton('play');
        button.position(250,200);

        var greeting = createElement('H3');

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            greeting.html("Hi "+name);
            greeting.position(130,160);
            
        })

    }
}