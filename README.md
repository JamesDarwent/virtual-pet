<h1>Virtual Pet</h1>

A virtual pet built with Javascript as part of the programming fundimentals track at Manchester Codes. 

<h2>Overview</h2>

<p>This game is designed to create a Tamagotchi style virtual pet, which you can look after with regular feeding and exercise. 

As your pet grows, their fitness and hunger will decrease and increase respectively. Checking your pet's status is the best way to stay on top of catering for it's needs!

Be sure not to neglect them too much, or sadly your pet will die 💀 Just like a real pet then! Except you can't play with it...

FRET NOT! I have also added a play method, which will increase your pet's happiness. Be sure to play with them often, or like me, your pet may die of sadness.</p>

<h2>Game Features</h2>
    <p>
        <ul>
            <li>Name your pet when it is born!</li>
            <li>Your pet starts with set stats for fitness, hunger and happiness.</li>
            <li>As the pet ages, their fitness, hunger and happiness stats will change.</li>
            <li>Walking your pet will increase their fitness.</li>
            <li>Feeding your pet will decrease their hunger.</li>
            <li>Playing with your pet increases their happiness.</li>
            <li>You can check up on your pet do find out their needs.</li>
            <li>If your pet grows too hungry, too unfit or too lonely, it will die.</li>
            <li>When your pet reaches 30 years old it will pass away...</li>
        </ul>
    </p>
<h2>Methods ()</h2>
<p>
- Node
- Hatch your pet with const Pet = require('./src/pet')
- Name your pet with const pet = new Pet("name")
- Age your pet with pet.growUp()
- Walk your pet with pet.walk()
- Feed your pet with pet.feed()
- Show affection with pet.play()
- Check their needs with pet.checkUp()
- Check their status with pet.isAlive
</p>
<h2>Built and tested with</h2>
<p>
- JavaScript
- Node / npm
- Jest
</p>